import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router";

function Signup() {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [fullname, setFullname] = useState();
  const [users, setUsers] = useState();

  let navigate = useNavigate();

  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  const getInitialUsers = () => {
    const res = localStorage.getItem("users");
    const parseUsers = JSON.parse(res);
    if (parseUsers) {
      setUsers(parseUsers);
    }
    addNewUser();
  };

  const setNewUsers = () => {
    localStorage.setItem("users", JSON.stringify(users));
    routeChange();
  };

  const addNewUser = () => {
    setUsers((users) => [
      ...users,
      {
        fullname: fullname,
        email: email,
        password: password,
        budget: 0,
        expenses: [],
        savings: [],
      },
    ]);

    setNewUsers();
  };

  useEffect(() => {}, []);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Card className="shadow w-50 d-flex my-5 flex-row justify-content-between align-items-center">
        <Form className="ms-5">
          <Form.Group className="mb-3">
            <Form.Label>Full name</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                setFullname(e.target.value);
              }}
              placeholder="Enter full name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
            />
          </Form.Group>

          <div className="d-flex justify-content-between align-items-center">
            <a className=" btn btn-primary me-3" onClick={getInitialUsers}>
              Sign up
            </a>
            <Link className="text-decoration-none" to={"/"}>
              Already have an account?
            </Link>
          </div>
        </Form>
        <img
          src="https://static.vecteezy.com/system/resources/previews/003/487/348/non_2x/money-bag-cash-coins-money-and-clock-payment-icon-cartoon-time-is-money-background-concept-free-vector.jpg"
          class="w-50 rounded-end"
          alt="..."
        ></img>
      </Card>
    </div>
  );
}

export default Signup;
