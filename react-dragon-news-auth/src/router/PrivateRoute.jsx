import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return<div className="flex justify-center"> <span className="loading loading-bars loading-xl"></span></div>;
  if (user) return children;
  return <Navigate to={"/loginForm"}></Navigate>;
};

export default PrivateRoute;
