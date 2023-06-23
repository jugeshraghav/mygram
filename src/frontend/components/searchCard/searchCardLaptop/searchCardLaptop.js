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
            <div className="search-card-container-laptop-content">
              <div className="search-card-laptop-found-users-container">
                {foundUsers.length > 0 ? (
                  foundUsers.map(
                    ({ _id, avatar, firstName, lastName, username }) => (
                      <div key={_id} className="search-card-laptop-found-user">
                        <img src={avatar} alt={username} />
                        <div>
                          <p className="search-card-laptop-fullname">
                            {firstName} {lastName}
                          </p>
                          <p className="search-card-laptop-username">
                            {" "}
                            {username}
                          </p>
                        </div>
                      </div>
                    )
                  )
                ) : (
                  <div className="search-card-laptop-user-not-found-container">
                    <p className="search-card-container-laptop-heading">
                      Recent
                    </p>
                    <p className="search-card-container-subheading">
                      No Recent Searches
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
