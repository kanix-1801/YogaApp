import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Yoga from './pages/Yoga';
import Workout from './pages/Workout'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Yoga" element={<Yoga />} />
            <Route path = "/Workout" element = {<Workout/>} />
          </Routes>
        </Router>
  </React.StrictMode>
);


