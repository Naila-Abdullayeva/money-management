import React, { useContext, useEffect, useState } from "react";
import Budget from "./Budget";
import ExpenseTotal from "./ExpenseTotal";
import ExpenseList from "./ExpenseList";
import SavingList from "./SavingList";
import AddExpenseForm from "./AddExpenseForm";
import AddSavingForm from "./AddSavingFrom";
import RemainingBudget from "./Remaining";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router";

function Mainpage() {
  const { state } = useContext(AppContext);
  const [user, setUser] = useState();
  let navigate = useNavigate();
  const [users, setUsers] = useState();
  console.log(users);

  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  const getUser = () => {
    setUser(JSON.parse(localStorage.getItem("user")));
    setUsers(JSON.parse(localStorage.getItem("users")));
  };

  const logOut = () => {
    
    // localStorage.setItem("users", JSON.stringify(users))
    localStorage.removeItem("user");
    routeChange();
  };

  useEffect(() => {
    getUser()
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="container-fluid">
      <div className="m-5">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="my-4 fw-light">Money management</h1>
          <div className="d-flex align-items-center">
            <h5 className="my-4 fw-light me-3">{user?.fullname}</h5>
            <a className="btn btn-danger" onClick={logOut}>
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
            </a>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <RemainingBudget />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-6">
            <div className="card shadow-sm">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h3 className="mt-3 fw-light">Expenses</h3>
              </div>
              <div className="card-body p-4">
                <h3 className="mt-3 card-title">Add new expense</h3>
                <div className="row mt-3">
                  <div className="col-sm">
                    <AddExpenseForm />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <ExpenseList />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card shadow-sm">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h3 className="mt-3 fw-light">Savings</h3>
              </div>
              <div className="card-body p-4">
                <h3 className="mt-3 card-title">Add new saving</h3>
                <div className="row mt-3">
                  <div className="col-sm">
                    <AddSavingForm />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <SavingList />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
