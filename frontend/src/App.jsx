import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Course from "./components/Course";
import Courses from "./Courses/Courses";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Contact from "./components/Contact";
import { useAuth } from "./context/AuthProvider"; // ✅ named import

function App() {
  const { authUser } = useAuth(); // ✅ correct usage
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/course"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
