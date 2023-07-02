import { useContext } from "react";
import { AuthContext } from "../contexts/auth-context";
import { Navigate, useLocation } from "react-router-dom";

export const RequiresAuth = ({ children }) => {
  const { token } = useContext(AuthContext);
  const location = useLocation();
  return token ? children : <Navigate to="/" state={{ from: location }} />;
};
