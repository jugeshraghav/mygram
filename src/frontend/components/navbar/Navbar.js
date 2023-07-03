import { NavLink } from "react-router-dom";
import {
  FaBookmark,
  FaCompass,
  FaHome,
  FaInstagram,
  FaPlus,
  FaSearch,
  FaUnlock,
  FaUser,
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import "./navbar.css";
import "../../../App.css";
import { useContext, useState } from "react";
import { AuthContext, PostContext } from "../../../index";
import { NewPostModal } from "../../modals/createPost/newPostModal";
import { SearchInput } from "../searchInput/SearchInput";
import { SearchCardLaptop } from "../searchCard/searchCardLaptop/searchCardLaptop";
import { SearchCardMobile } from "../searchCard/searchCardMobile/searchCardMobile";

export const Navbar = () => {
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  const [showSearchCardLaptop, setShowSearchCardLaptop] = useState(false);
  const [showSearchCardMobile, setShowSearchCardMobile] = useState(false);

  const { getUserPosts } = useContext(PostContext);
  const { logoutHandler, loggedInUserDetails } = useContext(AuthContext);

  // const { _id, firstName, lastName, username } = loggedInUserDetails;
  const getStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: "var(--mg-secondary-text)",
      textDecoration: "none",
    };
  };

  return (
    <>
      <NewPostModal
        show={showNewPostModal}
        onClose={() => setShowNewPostModal(false)}
        displayName="New"
      />
      <SearchCardLaptop
        show={showSearchCardLaptop}
        onClose={() => setShowSearchCardLaptop(false)}
      />
      <SearchCardMobile
        show={showSearchCardMobile}
        onClose={() => setShowSearchCardMobile(false)}
      />
      <aside>
        <p className="nav-heading-primary">Mygram</p>
        <p className="nav-heading-secondary">
          <FaInstagram />
        </p>
        <nav>
          <div className="navbar -links">
            <NavLink
              to="/mygram/home"
              style={getStyle}
              className="nav-link"
              onClick={() => {
                setShowSearchCardLaptop(false);
                setShowSearchCardMobile(false);
              }}
            >
              <span className="nav-icon">
                <FaHome />
              </span>
              <span className="nav-link-text">Home</span>
            </NavLink>
            <NavLink
              to="/mygram/explore"
              style={getStyle}
              className="nav-link"
              onClick={() => {
                setShowSearchCardLaptop(false);
                setShowSearchCardMobile(false);
              }}
            >
              <span className="nav-icon">
                <FaCompass />
              </span>
              <span className="nav-link-text">Explore</span>
            </NavLink>
            <NavLink
              to="/mygram/bookmarks"
              style={getStyle}
              className="nav-link"
              onClick={() => {
                setShowSearchCardLaptop(false);
                setShowSearchCardMobile(false);
              }}
            >
              <span className="nav-icon">
                <FaBookmark />
              </span>
              <span className="nav-link-text">Bookmarks</span>
            </NavLink>
            <div
              className="nav-link search-btn"
              onClick={() => setShowSearchCardLaptop(!showSearchCardLaptop)}
            >
              <span className="nav-icon">
                <FaSearch />
              </span>
              <span className="nav-link-text">Search</span>
            </div>
            <NavLink
              to={`/mygram/profile/${loggedInUserDetails?.username}`}
              onClick={() => {
                // getUserPosts(username);
                setShowSearchCardLaptop(false);
                setShowSearchCardMobile(false);
              }}
              style={getStyle}
              className="nav-link"
            >
              <span className="nav-icon">
                <FaUser />
              </span>
              <span className="nav-link-text">Profile</span>
            </NavLink>

            <div
              className="nav-link create-post-btn"
              onClick={() => {
                setShowNewPostModal(true);
                setShowSearchCardLaptop(false);
                setShowSearchCardMobile(false);
              }}
            >
              <span className="nav-icon">
                <FaPlus />
              </span>
              <span className="nav-link-text">Create</span>
            </div>
          </div>
          <div className="navbar-user-profile">
            <NavLink
              to={`/mygram/profile/${loggedInUserDetails?.username}`}
              onClick={() => {
                // getUserPosts(username);
                setShowSearchCardLaptop(false);
                setShowSearchCardMobile(false);
              }}
              style={getStyle}
            >
              <div className="navbar-my-profile">
                {" "}
                <img src={loggedInUserDetails?.avatar} alt="my-profile" />
                <div className="navbar-my-profile-content">
                  <p className="navbar-my-profile-fullname">
                    {loggedInUserDetails?.firstName}{" "}
                    {loggedInUserDetails?.lastName}
                  </p>
                  <p className="navbar-my-profile-username">
                    @{loggedInUserDetails?.username}
                  </p>
                </div>
              </div>
            </NavLink>
            <div className="logout-btn nav-icon">
              <FiLogOut onClick={logoutHandler} title="Logout" />
            </div>
          </div>
        </nav>
        <div className="navbar-search-container">
          <SearchInput
            from="top-nav"
            showSearchCardMobile={() =>
              setShowSearchCardMobile(!showSearchCardMobile)
            }
          />
        </div>
      </aside>
    </>
  );
};
