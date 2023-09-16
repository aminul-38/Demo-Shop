import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const userEmail = JSON.parse(localStorage.getItem("user"));
  return userEmail ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
