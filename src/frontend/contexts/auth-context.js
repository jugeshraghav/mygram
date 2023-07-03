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
  const [loading, setLoading] = useState(false);

  ////////////////////// Auth Handlers /////////////////////////////////////

  const loginHandler = async ({ username, password }) => {
    setLoading(true);
    try {
      setLoading(true);
      const response = await loginService(username, password);
      const { foundUser, encodedToken } = response?.data;
      const updatedFoundUser = {
        ...foundUser,
        avatar: !foundUser.avatar
          ? "https://img.freepik.com/free-icon/user_318-644324.jpg?size=626&ext=jpg&ga=GA1.2.1704512721.1672676438&semt=sph"
          : foundUser?.avatar,
      };
      localStorage.setItem("token", encodedToken);
      localStorage.setItem("userDetails", JSON.stringify(updatedFoundUser));
      setToken(encodedToken);
      setLoggedInUserDetails(updatedFoundUser);
      navigate("/mygram/home");
      toast.success("successfully logged in!");
    } catch (e) {
      toast.error(e.response.data.errors[0]);
    } finally {
      setLoading(false);
    }
  };

  const signupHandler = async ({
    firstname,
    lastname,
    username,
    password,
    confirmPassword,
  }) => {
    setLoading(true);
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
      } finally {
        setLoading(false);
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
        loading,
        loggedInUserDetails,
        setLoggedInUserDetails,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
