//style imports
import "./secondaryNavbar.css";
import "../../../../App.css";

//icon imports
import { FaBookmark, FaCompass, FaHome, FaPlus, FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

//react hook imports
import { useContext } from "react";
import { NavLink } from "react-router-dom";

//context imports
import { AuthContext, PostContext } from "../../../../index";

//Component
export const SecondaryNavbar = ({ setShowNewPostModal }) => {
  //handlers from contexts
  const { getUserPosts } = useContext(PostContext);
  const { logoutHandler } = useContext(AuthContext);
  const { loggedInUserDetails } = useContext(AuthContext);

  //Navlink style
  const getStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: "var(--mg-secondary-text)",
    };
  };

  const username = loggedInUserDetails?.username;

  return (
    <>
      <section className="secondary-navbar-container">
        <nav className="secondary-navbar">
          <NavLink to="/home" style={getStyle} className="nav-link">
            <span className="nav-icon">
              <FaHome />
            </span>
          </NavLink>
          <NavLink to="/explore" style={getStyle} className="nav-link">
            <span className="nav-icon">
              <FaCompass />
            </span>
          </NavLink>
          <div
            className="nav-link create-post-btn"
            onClick={() => setShowNewPostModal(true)}
          >
            <span className="nav-icon">
              <FaPlus />
            </span>
          </div>
          <NavLink to="/bookmarks" style={getStyle} className="nav-link">
            <span className="nav-icon">
              <FaBookmark />
            </span>
          </NavLink>
          <NavLink
            to={`/profile/${username}`}
            onClick={() => getUserPosts(username)}
            style={getStyle}
            className="nav-link"
          >
            <span className="nav-icon">
              <FaUser />
            </span>
          </NavLink>
          <div
            className="nav-link create-post-btn"
            onClick={() => logoutHandler()}
          >
            <span style={{ fontSize: "30px" }} className="nav-icon">
              <IoLogOut />
            </span>
          </div>
        </nav>
      </section>
    </>
  );
};
