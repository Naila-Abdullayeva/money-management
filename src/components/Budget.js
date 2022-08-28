import React, { useState, useContext } from "react";
import ViewBudget from "./ViewBudget";
import EditBudget from "./EditBudget";
import { AppContext } from "../context/AppContext";



const Budget = () => {
  const { dispatch } = useContext(AppContext);
  
  const [isEditing, setIsEditing] = useState(false);

  

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "SET_BUDGET",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <EditBudget handleSaveClick={handleSaveClick} />
      ) : (
        <ViewBudget handleEditClick={handleEditClick} />
      )}
    </>
  );
};

export default Budget;
