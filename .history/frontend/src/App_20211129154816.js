import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./imports/index";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
