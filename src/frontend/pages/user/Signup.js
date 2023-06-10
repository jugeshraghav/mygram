import displayImage from "../../assets/signin-display-image.png";
import { Link, NavLink } from "react-router-dom";
import "./user.css";
export const Signup = () => {
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
            <form>
              <input className="login-input" placeholder="First name"></input>
              <input className="login-input" placeholder="Last name"></input>
              <input className="login-input" placeholder="Email"></input>
              <input className="login-input" placeholder="Password"></input>
              <input
                className="login-input"
                placeholder="Confirm password"
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
              Have an account?<NavLink to="/login">Log in</NavLink>
            </span>
          </div>
        </div>
      </article>
    </>
  );
};
