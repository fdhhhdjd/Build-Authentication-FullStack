import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./imports/index";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
