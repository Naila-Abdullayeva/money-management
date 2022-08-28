import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext)

  const total = expenses.reduce((total, item) => {
        return total += item.cost;
      }, 0);
    

  return (
    <div className="card shadow-sm">
      <div className="card-header">
        <h3 className="card-title fw-light">Total spent</h3>
      </div>
      <div className="card-body">
        <h3>{total}$</h3>
      </div>
    </div>
  );
};

export default ExpenseTotal;
