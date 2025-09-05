import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation, useNavigation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  // solve redirect after login
  const location = useLocation();
  console.log(location);

  if (loading)
    return (
      <div className="flex justify-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  if (user) return children;
  return <Navigate state={location.pathname} to={"/loginForm"}></Navigate>;
};

export default PrivateRoute;
