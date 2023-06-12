import "./sidebar.css";
import { useContext } from "react";
import { PostContext, UserContext } from "../../../index";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const { allUsers, followHandler, unfollowHandler } = useContext(UserContext);
  const { getUserPosts } = useContext(PostContext);
  console.log(allUsers);

  const getStyle = () => {
    return { textDecoration: "none" };
  };

  const { firstName, lastName, username } = JSON.parse(
    localStorage.getItem("userDetails")
  );
  const token = localStorage.getItem("token");
  return (
    <>
      <div className="sidebar">
        <NavLink
          to={`/mygram/profile/${username}`}
          onClick={() => getUserPosts(username)}
          style={getStyle}
        >
          <div className="my-profile">
            {" "}
            <img
              src="https://images.unsplash.com/photo-1680296280129-84da3c59727b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="my-profile"
            />
            <div className="my-profile-content">
              <p className="my-profile-fullname">
                {firstName} {lastName}
              </p>
              <p className="my-profile-username">@{username}</p>
            </div>
          </div>
        </NavLink>
        <div className="sidebar-central-heading">
          <p>Suggested for you</p>
          <p>See All</p>
        </div>

        <div className="user-list-container">
          {allUsers.map(({ _id, avatar, firstName, lastName, username }) => (
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
              <div
                className="user-follow-link"
                onClick={() => followHandler(_id, token)}
              >
                Follow +
              </div>
            </div>
          ))}{" "}
        </div>
      </div>
    </>
  );
};
