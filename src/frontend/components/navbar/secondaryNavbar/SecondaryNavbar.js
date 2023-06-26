import { NavLink } from "react-router-dom";
import { FaBookmark, FaCompass, FaHome, FaPlus, FaUser } from "react-icons/fa";
import "./secondaryNavbar.css";
import "../../../../App.css";
import { useContext, useState } from "react";
import { AuthContext, PostContext } from "../../../../index";
import { NewPostModal } from "../../../modals/createPost/newPostModal";

export const SecondaryNavbar = () => {
  const [showNewPostModal, setShowNewPostModal] = useState(false);

  const { getUserPosts } = useContext(PostContext);
  const { logoutHandler } = useContext(AuthContext);
  const { loggedInUserDetails } = useContext(AuthContext);

  const getStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: "var(--mg-secondary-text)",
    };
  };

  const username = loggedInUserDetails?.username;

  return (
    <>
      <NewPostModal
        show={showNewPostModal}
        onClose={() => setShowNewPostModal(false)}
        displayName="New"
      />
      <section className="secondary-navbar-container">
        <nav className="secondary-navbar">
          <NavLink to="/mygram/home" style={getStyle} className="nav-link">
            <span className="nav-icon">
              <FaHome />
            </span>
          </NavLink>
          <NavLink to="/mygram/explore" style={getStyle} className="nav-link">
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
          <NavLink to="bookmarks" style={getStyle} className="nav-link">
            <span className="nav-icon">
              <FaBookmark />
            </span>
          </NavLink>
          <NavLink
            to={`/mygram/profile/${username}`}
            onClick={() => getUserPosts(username)}
            style={getStyle}
            className="nav-link"
          >
            <span className="nav-icon">
              <FaUser />
            </span>
          </NavLink>
        </nav>
      </section>
    </>
  );
};
