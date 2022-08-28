import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ViewBudget = ({ handleEditClick }) => {
  const { budget } = useContext(AppContext);

  return (
    <div className="card shadow-sm">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h3 className="card-title fw-light">Budget</h3>
        <a className="btn btn-primary" onClick={handleEditClick}>
          <i class="fa-solid fa-pen"></i>
        </a>
      </div>
      <div className="card-body">
        <h3>{budget}$</h3>
      </div>
    </div>
  );
};

export default ViewBudget;
