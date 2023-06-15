import { useContext } from "react";
import { PostContext, UserContext } from "../../../index";
import "./stories.css";
import { NavLink } from "react-router-dom";

export const Stories = () => {
  const { allUsers } = useContext(UserContext);
  const { getUserPosts } = useContext(PostContext);

  const { _id, firstName, lastName, username } = JSON.parse(
    localStorage.getItem("userDetails")
  );
  const token = localStorage.getItem("token");

  const usersToBeDisplayed = allUsers.filter(
    (user) => user.username !== username
  );

  const getStyle = () => {
    return {
      textDecoration: "none",
    };
  };
  return (
    <>
      <div className="stories-container">
        {usersToBeDisplayed.map(({ avatar, username }) => (
          <NavLink
            to={`/mygram/profile/${username}`}
            // onClick={() => getUserPosts(username)}
            style={getStyle}
          >
            <div>
              {" "}
              <img src={avatar} alt={username} className="user-story" />
              <p className="user-story-name">{username}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
};
