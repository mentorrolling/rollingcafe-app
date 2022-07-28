import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutScreen from "../pages/AboutScreen";
import AddProductsScreen from "../pages/AddProductsScreen";
import HomeScreen from "../pages/HomeScreen";

const RoutesDos = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about" element={<AboutScreen />} />
      <Route path="/productos" element={<AddProductsScreen />} />
    </Routes>
  );
};

export default RoutesDos;
