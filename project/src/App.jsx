import React from "react";
import "./App.css";
import TaskDashborad from "./Context/TaskDashborad";
import Login from "./Login/login";
import { BrowserRouter, Routes,Route } from "react-router-dom";
function App() {
  return (
    <>
      <>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<TaskDashborad/>} />
      </Routes>
      </BrowserRouter>
      </>
    </>
  );
}

export default App;
