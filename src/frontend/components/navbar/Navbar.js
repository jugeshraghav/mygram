import { NavLink } from "react-router-dom";
import {
  FaBookmark,
  FaCompass,
  FaHome,
  FaInstagram,
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
import { SearchInput } from "../searchInput/SearchInput";
import { SearchCardMobile } from "../searchCard/searchCardMobile/searchCardMobile";
import { SearchCardLaptop } from "../searchCard/searchCardLaptop/searchCardLaptop";

export const Navbar = () => {
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  const [showSearchCardMobile, setShowSearchCardMobile] = useState(false);
  const [showSearchCardLaptop, setShowSearchCardLaptop] = useState(false);

  const { getUserPosts } = useContext(PostContext);
  const { logoutHandler } = useContext(AuthContext);

  const getStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: "var(--mg-secondary-text)",
    };
  };

  const { username } = JSON.parse(localStorage.getItem("userDetails"));

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
            <span
              className="nav-link-text"
              style={{ display: showSearchCardLaptop ? "none" : "block" }}
            >
              Home
            </span>
          </NavLink>
          <NavLink to="/mygram/explore" style={getStyle} className="nav-link">
            <span className="nav-icon">
              <FaCompass />
            </span>
            <span
              className="nav-link-text"
              style={{ display: showSearchCardLaptop ? "none" : "block" }}
            >
              Explore
            </span>
          </NavLink>
          <NavLink to="bookmarks" style={getStyle} className="nav-link">
            <span className="nav-icon">
              <FaBookmark />
            </span>
            <span
              className="nav-link-text"
              style={{ display: showSearchCardLaptop ? "none" : "block" }}
            >
              Bookmarks
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
            <span
              className="nav-link-text"
              style={{ display: showSearchCardLaptop ? "none" : "block" }}
            >
              Profile
            </span>
          </NavLink>
          <div
            className="nav-link search-btn"
            onClick={() => setShowSearchCardLaptop(!showSearchCardLaptop)}
          >
            <span className="nav-icon">
              <FaSearch />
            </span>
            <span
              className="nav-link-text"
              style={{ display: showSearchCardLaptop ? "none" : "block" }}
            >
              Search
            </span>
          </div>
          <div
            className="nav-link create-post-btn"
            onClick={() => setShowNewPostModal(true)}
          >
            <span className="nav-icon">
              <FaPlus />
            </span>

            <span
              className="nav-link-text"
              style={{ display: showSearchCardLaptop ? "none" : "block" }}
            >
              Create
            </span>
          </div>
          {/* <button onClick={logoutHandler}>
            <FaLongArrowAltRight />
          </button> */}
        </nav>
        <div className="navbar-search-container">
          <SearchInput
            from="top-nav"
            showSearchCard={() => setShowSearchCardMobile(true)}
          />
          <div className="navbar-search-card-mobile">
            <SearchCardMobile
              onClose={() => setShowSearchCardMobile(!showSearchCardMobile)}
              show={showSearchCardMobile}
            />
          </div>
        </div>

        <SearchCardLaptop
          show={showSearchCardLaptop}
          onClose={() => setShowSearchCardLaptop(!showSearchCardLaptop)}
        />
      </aside>
    </>
  );
};
