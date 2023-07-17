//react hooks imports
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

//context imports
import { UserContext } from "../../../../index";

//style imports
import "./searchCardLaptop.css";

//component imports
import { SearchInput } from "../../searchInput/SearchInput";
import { default_img } from "../../../constants/constants";

export const SearchCardLaptop = ({ onClose, show }) => {
  //state variables from context
  const { foundUsers } = useContext(UserContext);

  const navigate = useNavigate();

  //component
  return (
    <>
      {show && (
        <div className="search-card-modal-laptop" onClick={onClose}>
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
                      <div
                        key={_id}
                        className="search-card-laptop-found-user"
                        onClick={() => {
                          navigate(`/profile/${username}`);
                          onClose();
                        }}
                      >
                        <img src={avatar || default_img} alt={username} />
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
        </div>
      )}
    </>
  );
};
