import { useContext, useState } from "react";
import { UserContext } from "../../../index";
import { FaSearch } from "react-icons/fa";

import "./searchInput.css";

export const SearchInput = ({ from, showSearchCardMobile }) => {
  const [searchText, setSearchText] = useState();

  console.log(searchText, "search name");
  const { foundUserHandler } = useContext(UserContext);
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
            setSearchText(e.target.value);
            foundUserHandler(searchText);
          }}
          onClick={showSearchCardMobile}
        />
        <FaSearch className="navbar-search-icon" />
      </div>

      {from !== "top-nav" && <hr style={{ margin: "2rem 0" }}></hr>}
    </>
  );
};
