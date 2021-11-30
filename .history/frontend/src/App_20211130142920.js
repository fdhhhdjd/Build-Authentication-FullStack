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
      <Route path="/" element={<Login />}/>
        {user 
        
        <Route path="/dashboard" element={<Dashboard />} />
        &&  }
      </Routes>
    </>
  );
}

export default App;
