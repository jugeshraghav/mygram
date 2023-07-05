import { useContext, useState } from "react";
import { UserContext } from "../../../index";
import { FaSearch } from "react-icons/fa";

import "./searchInput.css";

export const SearchInput = ({ from, showSearchCardMobile }) => {
  const { foundUserHandler } = useContext(UserContext);
  const [searchText, setSearchText] = useState("");
  return (
    <>
      {from !== "top-nav" && (
        <p className="search-card-container-heading">Search</p>
      )}

      <div className="search-input-container">
        <input
          className="navbar-search-input"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            foundUserHandler(e.target.value);
            setSearchText(e.target.value);
          }}
          onClick={showSearchCardMobile}
        />
        <FaSearch className="navbar-search-icon" />
      </div>

      {from !== "top-nav" && <hr style={{ margin: "2rem 0" }}></hr>}
    </>
  );
};
