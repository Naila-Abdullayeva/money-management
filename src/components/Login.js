import React, { useState, useContext, useEffect } from "react";
import { Card, Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function Login() {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = `/mainpage`;
    navigate(path);
  };

  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const users = [
    {
      fullname: "Name Surname",
      email: "default@example.com",
      password: "123n",
      budget: 43000,
      id: uuidv4(),
      expenses: [
        {
          id: uuidv4(),
          name: "Car",
          cost: 2000,
        },
      ],
      savings: [
        {
          id: uuidv4(),
          name: "Holiday",
          cost: 5000,
        },
      ],
    },
    {
      fullname: "Test Test",
      email: "test@example.com",
      password: "test123",
      budget: 15000,
      id: uuidv4(),
      expenses: [
        {
          id: uuidv4(),
          name: "Car",
          cost: 2000,
        },
      ],
      savings: [
        {
          id: uuidv4(),
          name: "Holiday",
          cost: 5000,
        },
      ],
    },
  ];

  const setInitialUsers = () => {
    localStorage.setItem("users", JSON.stringify(users));
  };

  const handleUserLogin = (user) => {
    localStorage.setItem("user", JSON.stringify(user))
    routeChange();
  };

  const doesUserExist = () => {
    users.map((user) => {
      if (email === user.email && password === user.password) {
        handleUserLogin(user);
      } else {
        console.log("User does not exist. Create an account first");
      }
    });
  };

  useEffect(() => {
    setInitialUsers();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Card className="shadow w-50 d-flex my-5 flex-row justify-content-between align-items-center">
        <Form className="ms-5">
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
              placeholder="Enter password"
            />
          </Form.Group>
          <div className="d-flex justify-content-between align-items-center">
            <Button
              onClick={() => {
                doesUserExist();
              }}
              className="btn-primary"
            >
              Login
            </Button>
            <Link className="text-decoration-none" to={"signup"}>
              Don't have an account?
            </Link>
          </div>
        </Form>
        <img
          src="https://static.vecteezy.com/system/resources/previews/003/487/356/non_2x/money-bag-cash-coins-money-and-clock-payment-icon-cartoon-time-is-money-background-concept-free-vector.jpg"
          class="w-50 rounded-end"
          alt="..."
        ></img>
      </Card>
    </div>
  );
}

export default Login;
