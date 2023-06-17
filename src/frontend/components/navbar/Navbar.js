import { NavLink } from "react-router-dom";
import {
  FaBookmark,
  FaCompass,
  FaHome,
  FaInstagram,
  FaLongArrowAltRight,
  FaLongArrowAltUp,
  FaPlus,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import "./navbar.css";
import "../../../App.css";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { AuthContext, PostContext, UserContext } from "../../../index";
import { NewPostModal } from "../../modals/createPost/newPostModal";

export const Navbar = () => {
  const [showNewPostModal, setShowNewPostModal] = useState(false);

  const { getUserPosts } = useContext(PostContext);
  const { logoutHandler } = useContext(AuthContext);

  const getStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: "var(--mg-secondary-text)",
    };
  };

  const { username } = JSON.parse(localStorage.getItem("userDetails"));
  // console.log(username, "logged in user");
  return (
    <>
      <NewPostModal
        show={showNewPostModal}
        onClose={() => setShowNewPostModal(false)}
        displayName="New"
      />
      <aside>
        <p className="nav-heading-primary">Mygram</p>
        <p className="nav-heading-secondary">
          <FaInstagram />
        </p>
        <nav>
          <NavLink to="/mygram/home" style={getStyle} className="nav-link">
            <span className="nav-icon">
              <FaHome />
            </span>
            <span className="nav-link-text">Home</span>
          </NavLink>
          <NavLink to="/mygram/explore" style={getStyle} className="nav-link">
            <span className="nav-icon">
              <FaCompass />
            </span>
            <span className="nav-link-text">Explore</span>
          </NavLink>
          <NavLink to="bookmarks" style={getStyle} className="nav-link">
            <span className="nav-icon">
              <FaBookmark />
            </span>
            <span className="nav-link-text">Bookmarks</span>
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
            <span className="nav-link-text">Profile</span>
          </NavLink>
          <div className="nav-link search-btn" onClick={() => toast("Search")}>
            <span className="nav-icon">
              <FaSearch />
            </span>
            <span className="nav-link-text">Search</span>
          </div>
          <div
            className="nav-link create-post-btn"
            onClick={() => setShowNewPostModal(true)}
          >
            <span className="nav-icon">
              <FaPlus />
            </span>

            <span className="nav-link-text">Create</span>
          </div>
          {/* <button onClick={logoutHandler}>
            <FaLongArrowAltRight />
          </button> */}
        </nav>
      </aside>
    </>
  );
};
