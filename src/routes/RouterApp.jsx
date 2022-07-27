import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import LoginScreen from "../pages/LoginScreen";
import SignUp from "../pages/SignUp";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
