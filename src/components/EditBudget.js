import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";


const EditBudget = ({ handleSaveClick }) => {
  const { budget } = useContext(AppContext);
  const [value, setValue] = useState(budget);

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h3 className="fw-light">Edit Budget</h3>
        <a className="btn btn-success" onClick={() => handleSaveClick(value)}>
          <i class="fa-solid fa-check"></i>
        </a>
      </div>
      <div className="card-body px-3 py-4">
        <input
          required="required"
          type="number"
          class="form-control mr-3"
          id="name"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
    </div>
  );
};

export default EditBudget;
