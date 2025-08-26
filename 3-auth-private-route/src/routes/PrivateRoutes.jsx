import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  // when user loading the page it doesn't remain in the selected route - to avoid it.
  if (loading) return <span className="loading loading-bars loading-lg"></span>;

  /* children = <Order/> -> which is form main.jsx 
  file <PrivateRoutes> <Order/> </PrivateRoute> 
  Without login user will not see the order list
  */
  if (user) return children;
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoutes;
