import displayImage from "../../assets/signin-display-image.png";
import { Link, useNavigate } from "react-router-dom";
import "./user.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../../index";

export const Login = () => {
  const { loginHandler } = useContext(AuthContext);

  // console.log(a);
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  const guestUserDetails = {
    username: "emilysmith",
    password: "emily@123Smith",
  };
  const handleInput = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    loginHandler(userDetails);
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
            <form onSubmit={handleLoginSubmit}>
              <input
                className="login-input"
                placeholder="Phone number,username,email"
                value={userDetails.username}
                onChange={handleInput}
                name="username"
                autoComplete="on"
                required
              ></input>
              <input
                className="login-input"
                placeholder="Password"
                name="password"
                value={userDetails.password}
                onChange={handleInput}
                autoComplete="on"
                required
              ></input>
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
