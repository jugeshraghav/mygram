//react hooks imports
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

//toast imports
import { toast } from "react-toastify";

//services imports
import { signUpService } from "../services/auth-services/signupService";
import { loginService } from "../services/auth-services/loginService";
import { default_img } from "../constants/constants";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  ///////////////////////// user Details //////////////////////////////////
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loggedInUserDetails, setLoggedInUserDetails] = useState(
    JSON.parse(localStorage.getItem("userDetails"))
  );
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  ////////////////////// Auth Handlers /////////////////////////////////////

  const loginHandler = async ({ username, password }) => {
    setIsUserLoggedIn(true);
    try {
      const response = await loginService(username, password);
      if (response.status === 200) {
        const { foundUser, encodedToken } = response?.data;
        const updatedFoundUser = {
          ...foundUser,
          avatar: !foundUser.avatar ? default_img : foundUser?.avatar,
        };
        localStorage.setItem("token", encodedToken);
        localStorage.setItem("userDetails", JSON.stringify(updatedFoundUser));
        setToken(encodedToken);
        setLoggedInUserDetails(updatedFoundUser);
        navigate("/home");
        toast.success(`Welcome Back! ${foundUser?.username} 👋`);
      }
    } catch (error) {
      const {
        response: { status },
      } = error;
      if (status === 404) {
        toast.error("The username you entered is not registered.");
      } else if (status === 401) {
        toast.error(
          "The credentials you entered are invalid. Please try again."
        );
      } else {
        toast.error("Something went wrong");
      }
      console.error(error);
    } finally {
      setIsUserLoggedIn(false);
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
        if (response?.status === 201) {
          toast.success("Successfully signed up! Kindly login to continue.");
          navigate("/");
        }
      } catch (error) {
        if (error?.status === 422) {
          toast.error("Username Already Exists. Please choose another one.");
        } else {
          toast.error("Something went wrong");
        }
        console.error(error);
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
        isUserLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
