//style imports
import "./sidebar.css";

//react hooks imports
import { useContext } from "react";
import { NavLink } from "react-router-dom";

//context imports
import { AuthContext, UserContext } from "../../../index";

//constant imports
import { default_img } from "../../constants/constants";

export const Sidebar = () => {
  //handlers from context
  const { allUsers, followHandler, unfollowHandler } = useContext(UserContext);
  const { token, loggedInUserDetails } = useContext(AuthContext);

  //utilities
  const usersToBeDisplayed = allUsers
    .filter((user) => user?.username !== loggedInUserDetails?.username)
    .slice(0, 5);
  const getStyle = () => {
    return { textDecoration: "none" };
  };

  //component
  return (
    <>
      <div className="sidebar">
        <NavLink
          to={`/profile/${loggedInUserDetails?.username}`}
          style={getStyle}
        >
          <div className="my-profile">
            {" "}
            <img
              src={loggedInUserDetails?.avatar || default_img}
              alt={loggedInUserDetails?.username}
            />
            <div className="my-profile-content">
              <p className="my-profile-fullname">
                {loggedInUserDetails?.firstName} {loggedInUserDetails?.lastName}
              </p>
              <p className="my-profile-username">
                @{loggedInUserDetails?.username}
              </p>
            </div>
          </div>
        </NavLink>
        <div className="sidebar-central-heading">
          <p>Suggested for you</p>
          <p>See All</p>
        </div>

        <div className="user-list-container">
          {usersToBeDisplayed?.map(
            ({ _id, avatar, firstName, lastName, username, followers }) => (
              <div key={_id} className="user">
                <NavLink to={`/profile/${username}`} style={getStyle}>
                  <div className="user-details-container">
                    <img src={avatar} alt={username}></img>
                    <div className="user-details">
                      <p className="user-firstname">
                        {firstName} {lastName}
                      </p>
                      <p className="username">{username}</p>
                    </div>
                  </div>
                </NavLink>

                {followers?.find(
                  (currentUser) =>
                    currentUser?.username === loggedInUserDetails?.username
                ) ? (
                  <div
                    className="user-following-link"
                    onClick={() => unfollowHandler(_id, token)}
                  >
                    Following
                  </div>
                ) : (
                  <div
                    className="user-follow-link"
                    onClick={() => followHandler(_id, token)}
                  >
                    Follow +
                  </div>
                )}
              </div>
            )
          )}{" "}
        </div>
      </div>
    </>
  );
};
