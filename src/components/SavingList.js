import React, { useContext, useState, useEffect } from "react";
import SavingItem from "./SavingItem";
import { AppContext } from "../context/AppContext";

const SavingList = () => {
  const { savings } = useContext(AppContext)

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const [filteredSavings, setfilteredSavings] = useState(savings || []);

  useEffect(() => {
    setfilteredSavings(savings);
  }, [savings]);

  const handleChange = (event) => {
    const searchResults = savings.filter((filteredSaving) =>
      filteredSaving.name.toLowerCase().includes(event.target.value)
    );
    setfilteredSavings(searchResults);
  };

  return (
    <div className="mt-5">
      <input
        type="text"
        class="form-control mb-2 mr-sm-2"
        placeholder="Search for a saving..."
        onChange={handleChange}
      />
      <ul class="list-group mt-3 mb-3">
        {filteredSavings.map((saving) => (
          <SavingItem id={saving.id} name={saving.name} cost={saving.cost} />
        ))}
      </ul>
    </div>
  );
};

export default SavingList;
