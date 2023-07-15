//assts imports
import displayImage from "../../assets/signin-display-image.png";

//react hook imports
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

//style imports
import "./user.css";

//context imports
import { AuthContext } from "../../../index";

//icon imports
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
export const Signup = () => {
  const { signupHandler } = useContext(AuthContext);

  //state variables
  const [userSignupDetails, setUserSignupDetails] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [showSignUpPwd, setShowSignUpPwd] = useState(false);
  const [showSignUpConfirmPwd, setShowSignUpConfirmPwd] = useState(false);

  //handlers
  const handleSignupInput = (e) => {
    setUserSignupDetails({
      ...userSignupDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    signupHandler(userSignupDetails);
  };

  //component
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
              <div className="login-form-pwd-input-container">
                <input
                  type={showSignUpPwd ? "text" : "password"}
                  className="login-input"
                  placeholder="Password"
                  name="password"
                  required
                  onChange={handleSignupInput}
                ></input>
                {userSignupDetails?.password ? (
                  showSignUpPwd ? (
                    <AiOutlineEye
                      className="login-form-eye-icon"
                      onClick={() => setShowSignUpPwd(!showSignUpPwd)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="login-form-eye-icon"
                      onClick={() => setShowSignUpPwd(!showSignUpPwd)}
                    />
                  )
                ) : (
                  ""
                )}
              </div>
              <div className="login-form-pwd-input-container">
                <input
                  type={showSignUpConfirmPwd ? "text" : "password"}
                  className="login-input"
                  placeholder="Confirm password"
                  name="confirmPassword"
                  required
                  onChange={handleSignupInput}
                ></input>

                {userSignupDetails?.confirmPassword ? (
                  showSignUpConfirmPwd ? (
                    <AiOutlineEye
                      className="login-form-eye-icon"
                      onClick={() =>
                        setShowSignUpConfirmPwd(!showSignUpConfirmPwd)
                      }
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="login-form-eye-icon"
                      onClick={() =>
                        setShowSignUpConfirmPwd(!showSignUpConfirmPwd)
                      }
                    />
                  )
                ) : (
                  ""
                )}
              </div>

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
