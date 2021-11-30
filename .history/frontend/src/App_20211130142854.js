import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login, Dashboard, Register } from "./imports/index";
import { useSelector } from "react-redux";
function App() {
  const { user } = useSelector((state) => state.data);
  return (
    <>
      <Routes>
        {user && <Route path="/" element={<Login />} />}
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
