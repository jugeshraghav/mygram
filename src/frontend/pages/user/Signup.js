import displayImage from "../../assets/signin-display-image.png";
import { NavLink } from "react-router-dom";
import "./user.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../../index";
export const Signup = () => {
  const { signupHandler } = useContext(AuthContext);
  const [userSignupDetails, setUserSignupDetails] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const handleSignupInput = (e) => {
    setUserSignupDetails({
      ...userSignupDetails,
      [e.target.name]: e.target.value,
    });
    console.log(userSignupDetails);
  };
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    signupHandler(userSignupDetails);
  };
  return (
    <>
      <article>
        <div className="display-image">
          <img src={displayImage} alt="display"></img>
        </div>

        <div className="login-container">
          <div className="login-form">
            <p className="heading">Mygram</p>
            <p className="desc">
              Sign up to see photos and videos from your friends.
            </p>
            <form onSubmit={handleSignupSubmit}>
              <input
                className="login-input"
                placeholder="First name"
                name="firstname"
                required
                onChange={handleSignupInput}
              ></input>
              <input
                className="login-input"
                placeholder="Last name"
                name="lastname"
                required
                onChange={handleSignupInput}
              ></input>
              <input
                className="login-input"
                placeholder="username"
                name="username"
                required
                onChange={handleSignupInput}
              ></input>
              <input
                className="login-input"
                placeholder="Password"
                name="password"
                required
                onChange={handleSignupInput}
              ></input>
              <input
                className="login-input"
                placeholder="Confirm password"
                name="confirmPassword"
                required
                onChange={handleSignupInput}
              ></input>

              <button type="submit" className="primary-button">
                Signup
              </button>
              <p className="signup-desc">
                By signing up, you agree to our Terms , Privacy Policy and
                Cookies Policy .
              </p>
            </form>
          </div>
          <div className="login-container-signup">
            <span>
              Have an account?<NavLink to="/">Log in</NavLink>
            </span>
          </div>
        </div>
      </article>
    </>
  );
};
