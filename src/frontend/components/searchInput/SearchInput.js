//react hooks imports
import { useContext, useEffect, useState } from "react";

//context imports
import { UserContext } from "../../../index";

//icon imports
import { FaSearch } from "react-icons/fa";

//style imports
import "./searchInput.css";

//component
export const SearchInput = ({ from, setShowSearchCardMobile }) => {
  //state variables from context
  const { foundUserHandler } = useContext(UserContext);

  //state variables
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (from === "top-nav") {
      if (searchText) {
        setShowSearchCardMobile(true);
      } else {
        setShowSearchCardMobile(false);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);
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
        />
        <FaSearch className="navbar-search-icon" />
      </div>

      {from !== "top-nav" && <hr style={{ margin: "2rem 0" }}></hr>}
    </>
  );
};
