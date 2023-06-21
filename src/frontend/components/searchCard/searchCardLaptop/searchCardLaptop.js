import { useContext } from "react";
import { UserContext } from "../../../../index";

import "./searchCardLaptop.css";
import { SearchInput } from "../../searchInput/SearchInput";

export const SearchCardLaptop = ({ onClose, show }) => {
  const { foundUsers } = useContext(UserContext);

  console.log(foundUsers, "found-user");
  return (
    <>
      <div className="search-card-modal-laptop" onClick={onClose}>
        {show && (
          <div
            className="search-card-container-laptop"
            onClick={(e) => e.stopPropagation()}
          >
            <SearchInput />
            <p>Recent</p>
            {foundUsers.length > 0 ? (
              foundUsers.map(({ username }) => <p>{username}</p>)
            ) : (
              <p>No Recent Searches</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};
