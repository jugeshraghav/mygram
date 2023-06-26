import { createContext, useState } from "react";
import { loginService } from "../services/auth-services/loginService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signUpService } from "../services/auth-services/signupService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  ///////////////////////// user Details //////////////////////////////////
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loggedInUserDetails, setLoggedInUserDetails] = useState(
    JSON.parse(localStorage.getItem("userDetails"))
  );

  ////////////////////// Auth Handlers /////////////////////////////////////

  const loginHandler = async ({ username, password }) => {
    try {
      const response = await loginService(username, password);
      const { foundUser, encodedToken } = response.data;
      localStorage.setItem("token", encodedToken);
      localStorage.setItem("userDetails", JSON.stringify(foundUser));
      setToken(encodedToken);
      setLoggedInUserDetails(foundUser);
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
        // const { createdUser, encodedToken } = response.data;
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
    setLoggedInUserDetails(null);
    setToken(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        loginHandler,
        signupHandler,
        logoutHandler,
        token,
        loggedInUserDetails,
        setLoggedInUserDetails,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
