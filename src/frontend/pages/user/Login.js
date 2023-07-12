//assets imports
import displayImage from "../../assets/signin-display-image.png";

//react-hooks imports
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

//style imports
import "./user.css";

//context imports
import { AuthContext } from "../../../index";

//icon imports
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export const Login = () => {
  const { loginHandler } = useContext(AuthContext);

  //state variables
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  const [showLoginPwd, setShowLoginPwd] = useState(false);
  const guestUserDetails = {
    username: "jugeshRaghav01",
    password: "jugesh15",
  };

  //handlers
  const handleInput = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    loginHandler(userDetails);
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
            <form onSubmit={handleLoginSubmit}>
              .
              <div className="login-form-pwd-input-container">
                <input
                  type="text"
                  className="login-input"
                  placeholder="Phone number,username,email"
                  value={userDetails.username}
                  onChange={handleInput}
                  name="username"
                  required
                ></input>

                <input
                  type={showLoginPwd ? "text" : "password"}
                  className="login-input"
                  placeholder="Password"
                  name="password"
                  value={userDetails.password}
                  onChange={handleInput}
                  required
                ></input>

                {userDetails?.password ? (
                  showLoginPwd ? (
                    <AiOutlineEye
                      className="login-form-eye-icon"
                      onClick={() => setShowLoginPwd(!showLoginPwd)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="login-form-eye-icon"
                      onClick={() => setShowLoginPwd(!showLoginPwd)}
                    />
                  )
                ) : (
                  ""
                )}
              </div>
              <button type="submit" className="primary-button">
                Log in
              </button>
              <hr></hr>
              <button
                type="submit"
                className="primary-button"
                onClick={() => setUserDetails(guestUserDetails)}
              >
                Log in as Guest
              </button>
            </form>
          </div>
          <div className="login-container-signup">
            <span>
              Don't have account?<Link to="/signup">Sign up</Link>
            </span>
          </div>
          <div className="login-container-get-app-buttons">
            <span>Get the App</span>

            <div>
              <img
                alt="Get it on Google Play"
                src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
              />
              <img
                alt="Get it from Microsoft"
                src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
              />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
