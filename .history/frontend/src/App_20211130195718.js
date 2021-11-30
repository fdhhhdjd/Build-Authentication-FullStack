import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login, Dashboard, Register } from "./imports/index";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
