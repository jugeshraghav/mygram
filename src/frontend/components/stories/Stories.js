//react  hooks imports
import { useContext } from "react";
import { NavLink } from "react-router-dom";

//context imports
import { AuthContext, UserContext } from "../../../index";

//style imports
import "./stories.css";

export const Stories = () => {
  //handlers and variables from context
  const { allUsers } = useContext(UserContext);
  const { loggedInUserDetails } = useContext(AuthContext);

  //utilities
  const usersToBeDisplayed = allUsers
    .filter((user) => user?.username !== loggedInUserDetails?.username)
    .slice(0, 6);

  //styles
  const getStyle = () => {
    return {
      textDecoration: "none",
    };
  };

  //component
  return (
    <>
      <div className="stories-container">
        {usersToBeDisplayed?.map(({ _id, avatar, username }) => (
          <NavLink key={_id} to={`/profile/${username}`} style={getStyle}>
            <div>
              {" "}
              <img src={avatar} alt={username} className="user-story" />
              <p className="user-story-name">{username.slice(0, 10)}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
};
