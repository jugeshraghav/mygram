import { useContext } from "react";
import { PostContext, UserContext } from "../../../index";
import { useParams } from "react-router-dom";

import "./profile.css";
import { PostCard } from "../../components/postCard/PostCard";
import { EditUserModal } from "../../modals/editUser/editUserModal";

export const Profile = () => {
  const { username } = useParams();

  const { allUsers, followHandler, unfollowHandler, editUserHandler } =
    useContext(UserContext);

  const { userPosts } = useContext(PostContext);
  const selectedUser = allUsers.find((user) => user.username === username);
  //   console.log(selectedUser);
  const loggedInUserDetails = JSON.parse(localStorage.getItem("userDetails"));
  const token = localStorage.getItem("token");
  // console.log(loggedInUserDetails.username);

  const {
    _id,
    avatar,
    firstName,
    lastName,
    username: userName,
    bio,
    followers,
    following,
    website,
  } = selectedUser;
  return (
    <>
      <div className="profile-page-container">
        <div className="user-profile-card">
          <img src={avatar} alt={userName}></img>
          <div>
            <p className="user-profile-name">
              {firstName} {lastName}
            </p>
            <p className="profile-username">@{userName}</p>
            <EditUserModal user={loggedInUserDetails} />
            {loggedInUserDetails.username === username ? (
              <button
                className="profile-edit-btn"
                onClick={() => editUserHandler(token, selectedUser)}
              >
                Edit Profile
              </button>
            ) : followers.length === 0 ? (
              <button
                className="follow-btn"
                onClick={() => followHandler(_id, token)}
              >
                Follow
              </button>
            ) : (
              <button
                className="unfollow-btn"
                onClick={() => unfollowHandler(_id, token)}
              >
                Following
              </button>
            )}
          </div>
          <p className="user-bio">{bio}</p>
          <p className="user-website">{website}</p>
          <div className="user-stats">
            <div>
              <p className="user-stats-number">{followers.length}</p>
              <p>Followers</p>
            </div>
            <div>
              <p className="user-stats-number">{userPosts.length}</p>
              <p>Posts</p>
            </div>
            <div>
              <p className="user-stats-number">{following.length}</p>
              <p>Following</p>
            </div>
          </div>
        </div>
        <p className="user-posts-heading">Your Posts</p>
        <div className="user-posts">
          {userPosts.map((postData) => (
            <PostCard postData={postData} key={postData._id} />
          ))}
        </div>
      </div>
    </>
  );
};
