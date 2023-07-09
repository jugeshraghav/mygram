//react hooks imports
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

//context imports
import { UserContext } from "../../../../index";

//style imports
import "./searchCardMobile.css";

//component
export const SearchCardMobile = ({ onClose, show }) => {
  //state variables from context
  const { foundUsers } = useContext(UserContext);

  const navigate = useNavigate();

  //component
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
                        navigate(`/profile/${username}`);
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
