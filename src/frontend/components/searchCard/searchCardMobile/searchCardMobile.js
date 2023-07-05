import { useContext } from "react";
import { UserContext } from "../../../../index";

import "./searchCardMobile.css";
import { useNavigate } from "react-router-dom";

export const SearchCardMobile = ({ onClose, show }) => {
  const { foundUsers } = useContext(UserContext);
  const navigate = useNavigate();
  console.log(foundUsers, "found-user");
  return (
    <>
      {show && (
        <div className="search-card-mobile-modal" onClick={onClose}>
          <div
            className="search-card-mobile-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="search-card-mobile-content">
              {foundUsers.length > 0 ? (
                foundUsers.map(
                  ({ _id, avatar, firstName, lastName, username }) => (
                    <div
                      key={_id}
                      className="search-card-mobile-found-user"
                      onClick={() => {
                        navigate(`/mygram/profile/${username}`);
                        onClose();
                      }}
                    >
                      <img src={avatar} alt={username} />
                      <div>
                        <p className="search-card-mobile-fullname">
                          {firstName} {lastName}
                        </p>
                        <p className="search-card-mobile-username">
                          {" "}
                          {username}
                        </p>
                      </div>
                    </div>
                  )
                )
              ) : (
                <div className="search-card-mobile-user-not-found-container">
                  <p className="search-card-mobile-not-found-heading">Recent</p>
                  <p className="search-card-mobile-not-found-subheading">
                    No Recent Searches
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
