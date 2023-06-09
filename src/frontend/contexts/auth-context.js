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
      toast.success("successfully logged in!");
    } catch (e) {
      toast.error(e.response.data.errors[0]);
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
        await signUpService(firstname, lastname, password, username);

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
        isUserLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
