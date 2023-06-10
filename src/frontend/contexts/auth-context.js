import { createContext } from "react";
import { loginService } from "../services/auth-services/loginService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const loginHandler = async ({ email, password }) => {
    const response = loginService(email, password);
    console.log(response);
  };
  <AuthContext.Provider value={{ loginHandler }}>
    {children}
  </AuthContext.Provider>;
};
