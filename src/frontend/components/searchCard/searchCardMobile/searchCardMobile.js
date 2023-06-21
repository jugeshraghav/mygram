import { useContext } from "react";
import { UserContext } from "../../../../index";

import "./searchCardMobile.css";

export const SearchCardMobile = ({ onClose, show }) => {
  const { foundUsers } = useContext(UserContext);

  console.log(foundUsers, "found-user");
  return (
    <>
      {show && (
        <div className="search-card-modal" onClick={onClose}>
          <div
            className="search-card-container"
            onClick={(e) => e.stopPropagation()}
          >
            <p>Recent</p>
            {foundUsers.length > 0 ? (
              foundUsers.map(({ username }) => <p>{username}</p>)
            ) : (
              <p>No Recent Searches</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};
