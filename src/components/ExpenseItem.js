import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <li class="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div className="d-flex align-items-center">
        <span class="badge rounded-pill text-bg-danger me-3">{props.cost}</span>
        <a onClick={handleDeleteExpense}>
          <i class="fa-solid fa-circle-xmark"></i>
        </a>
      </div>
    </li>
  );
};

export default ExpenseItem;
