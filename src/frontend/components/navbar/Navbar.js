//style imports
import "./navbar.css";
import "../../../App.css";

//icon imports
import {
  FaBookmark,
  FaCompass,
  FaHome,
  FaInstagram,
  FaPlus,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

//react hooks imports
import { useContext } from "react";
import { NavLink } from "react-router-dom";

//context imports
import { AuthContext } from "../../../index";
import { SearchInput } from "../searchInput/SearchInput";

//constant imports
import { default_img } from "../../constants/constants";

export const Navbar = ({
  showSearchCardLaptop,
  setShowNewPostModal,
  setShowSearchCardLaptop,
  setShowSearchCardMobile,
}) => {
  const { logoutHandler, loggedInUserDetails } = useContext(AuthContext);

  //Navlink style
  const getStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: "var(--mg-secondary-text)",
      textDecoration: "none",
    };
  };

  return (
    <>
      <aside>
        <p className="nav-heading-primary">Mygram</p>
        <p className="nav-heading-secondary">
          <FaInstagram />
        </p>
        <nav>
          <div className="navbar -links">
            <NavLink
              to="/home"
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
              to="/explore"
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
              to="bookmarks"
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
              to={`/profile/${loggedInUserDetails?.username}`}
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
              to={`/profile/${loggedInUserDetails?.username}`}
              onClick={() => {
                // getUserPosts(username);
                setShowSearchCardLaptop(false);
                setShowSearchCardMobile(false);
              }}
              style={getStyle}
            >
              <div className="navbar-my-profile">
                {" "}
                <img
                  src={loggedInUserDetails?.avatar || default_img}
                  alt="my-profile"
                />
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
            setShowSearchCardMobile={setShowSearchCardMobile}
          />
        </div>
      </aside>
    </>
  );
};
