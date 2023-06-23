import "./sidebar.css";
import { useContext } from "react";
import { PostContext, UserContext } from "../../../index";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const { allUsers, followHandler, unfollowHandler } = useContext(UserContext);
  const { getUserPosts } = useContext(PostContext);

  const { _id, firstName, lastName, username } = JSON.parse(
    localStorage.getItem("userDetails")
  );
  const token = localStorage.getItem("token");

  const usersToBeDisplayed = allUsers.filter(
    (user) => user.username !== username
  );
  const getStyle = () => {
    return { textDecoration: "none" };
  };

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-central-heading">
          <p>Suggested for you</p>
          <p>See All</p>
        </div>

        <div className="user-list-container">
          {usersToBeDisplayed.map(
            ({ _id, avatar, firstName, lastName, username, followers }) => (
              <div key={_id} className="user">
                <NavLink
                  to={`/mygram/profile/${username}`}
                  onClick={() => getUserPosts(username)}
                  style={getStyle}
                >
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
                {followers.length === 0 ? (
                  <div
                    className="user-follow-link"
                    onClick={() => followHandler(_id, token)}
                  >
                    Follow +
                  </div>
                ) : (
                  <div
                    className="user-following-link"
                    onClick={() => unfollowHandler(_id, token)}
                  >
                    Following
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
