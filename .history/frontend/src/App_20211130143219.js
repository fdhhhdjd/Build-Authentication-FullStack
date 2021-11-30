import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login, Dashboard, Register } from "./imports/index";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
  const { user } = useSelector((state) => state.data);
  const Navigate = useNavigate();
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {user.status === 200 ? (
          <Route path="/dashboard" element={<Dashboard />} />
        ) : (
          Navigate("/"),
        )}
      </Routes>
    </>
  );
}

export default App;
