import displayImage from "../assets/signin-display-image.png";
import { Link } from "react-router-dom";
import "./login.css";
export const Login = () => {
  return (
    <>
      <article>
        <div className="display-image">
          <img src={displayImage} alt="display"></img>
        </div>

        <div className="login-container">
          <div className="login-form">
            <form>
              <p className="heading">Mygram</p>
              <input placeholder="Phone number,username,email"></input>
              <input placeholder="Password"></input>
              <button type="submit" className="primary-button">
                Log in
              </button>
              <hr></hr>
              <button type="submit" className="primary-button">
                Log in as Guest
              </button>
            </form>
          </div>
          <div className="login-container-signup">
            <span>
              Don't have account?<a>Sign up</a>
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
