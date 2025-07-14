import React from "react";
import Home from "./components/Home";
import Course from "./components/Course";
import Courses from "./Courses/Courses";
import Signup from "./components/Signup";
import Login from "./components/Login"; // Make sure this import is present
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Login />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> {/* Add this line */}
      </Routes>
    </div>
  );
}

export default App;
