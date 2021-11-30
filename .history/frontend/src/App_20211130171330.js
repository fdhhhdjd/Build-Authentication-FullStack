import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login, Dashboard, Register } from "./imports/index";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
function App() {
  const { user } = useSelector((state) => state.data);
  const Navigate = useNavigate();
  return (
    <>
      <Routes>
        <ToastContainer position="top-center" />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
