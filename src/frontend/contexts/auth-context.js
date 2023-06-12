import { createContext } from "react";
import { loginService } from "../services/auth-services/loginService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signUpService } from "../services/auth-services/signupService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const loginHandler = async ({ username, password }) => {
    try {
      const response = await loginService(username, password);
      const { foundUser, encodedToken } = response.data;
      console.log(foundUser);
      console.log(encodedToken);
      localStorage.setItem("token", encodedToken);
      localStorage.setItem("userDetails", JSON.stringify(foundUser));
      toast.success("successfully logged in!");
      navigate("/mygram/home");
    } catch (e) {
      toast.error(e.response.data.errors[0]);
    }
  };

  const signupHandler = async ({
    firstname,
    lastname,
    username,
    password,
    confirmPassword,
  }) => {
    if (password !== confirmPassword) {
      toast.error("Password fileds are not matching!");
    } else {
      try {
        const response = await signUpService(
          firstname,
          lastname,
          password,
          username
        );
        const { createdUser, encodedToken } = response.data;
        console.log(createdUser);
        console.log(encodedToken);
        toast.success("Successfully signed up! Kindly login to continue.");
        navigate("/");
      } catch (e) {
        toast.error(e.response.data.errors[0]);
      }
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userDetails");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ loginHandler, signupHandler, logoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};
