import { useContext } from "react";
import { UserContext } from "../../../../index";

import "./searchCardMobile.css";

export const SearchCardMobile = () => {
  const { foundUsers } = useContext(UserContext);

  console.log(foundUsers, "found-user");
  return (
    <>
      <div className="search-card-modal">
        <div className="search-card-container">
          <p>Recent</p>
          {foundUsers.length > 0 ? (
            foundUsers.map(({ username }) => <p>{username}</p>)
          ) : (
            <p>No Recent Searches</p>
          )}
        </div>
      </div>
    </>
  );
};
