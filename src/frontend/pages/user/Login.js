import displayImage from "../../assets/signin-display-image.png";
import { Link } from "react-router-dom";
import "./user.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../../index";

export const Login = () => {
  const { loginHadler } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const guestUserDetails = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };
  const handleInput = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loginHadler(userDetails);
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
            <form>
              <input
                className="login-input"
                placeholder="Phone number,username,email"
                onChange={handleInput}
                name="email"
              ></input>
              <input
                className="login-input"
                placeholder="Password"
                name="password"
                onChange={handleInput}
              ></input>
              <button
                type="submit"
                className="primary-button"
                onClick={handleSubmit}
              >
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
