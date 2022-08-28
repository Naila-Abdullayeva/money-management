import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppProvider } from "./context/AppContext";
import { Routes, Route } from "react-router-dom";

import Login from "./components/Login"
import Signup from "./components/Signup";
import Mainpage from "./components/Mainpage";
import Test from "./components/Test";


const App = () => {
  return (
    <AppProvider>
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mainpage" element={<Mainpage />} />
      </Routes>
    </AppProvider>
  );
};

export default App;
