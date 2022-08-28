import React, { createContext, useReducer, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const user = JSON.parse(localStorage.getItem("user"))
const initialState = user  


export const AppContext = createContext();

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "SET_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    case "ADD_SAVING":
      return {
        ...state,
        savings: [...state.savings, action.payload],
      };
    case "DELETE_SAVING":
      return {
        ...state,
        savings: state.savings.filter((saving) => saving.id !== action.payload),
      };

    default:
      return state;
  }
};



export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        state: state,
        expenses: state?.expenses,
        budget: state?.budget,
        savings: state?.savings,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
