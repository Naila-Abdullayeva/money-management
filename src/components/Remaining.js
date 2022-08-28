import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const RemainingBudget = () => {
  const { budget, expenses, savings } = useContext(AppContext);

  console.log(budget);

  const totalSavings = savings.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="card shadow-sm">
      <div className="card-header">
        <h3 className="card-title fw-light">Remaining</h3>
      </div>
      <div className="card-body">
        <h3>{budget - totalExpenses - totalSavings}$</h3>
      </div>
    </div>
  );
};

export default RemainingBudget;
