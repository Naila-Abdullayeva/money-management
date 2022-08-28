import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const SavingItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteSaving = () => {
    dispatch({
      type: "DELETE_SAVING",
      payload: props.id,
    });
  };

  return (
    <li class="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div className="d-flex align-items-center">
        <span class="badge rounded-pill text-bg-success me-3">{props.cost}</span>
        <a onClick={handleDeleteSaving}>
          <i class="fa-solid fa-circle-xmark"></i>
        </a>
      </div>
    </li>
  );
};

export default SavingItem;
