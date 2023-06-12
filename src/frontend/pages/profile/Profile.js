import { useContext } from "react";
import { PostContext, UserContext } from "../../../index";
import { useParams } from "react-router-dom";

import "./profile.css";
import { PostCard } from "../../components/postCard/PostCard";

export const Profile = () => {
  const { username } = useParams();
  const { allUsers } = useContext(UserContext);
  const { userPosts } = useContext(PostContext);
  const selectedUser = allUsers.find((user) => user.username === username);
  //   console.log(selectedUser);

  const {
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
            <button className="profile-edit-btn">Edit Profile</button>
          </div>
          <p className="user-bio">{bio}</p>
          <p className="user-website">{website}</p>
          <div className="user-stats">
            <div>
              <p className="user-stats-number">{followers.length}</p>
              <p>Followers</p>
            </div>
            <div>
              <p className="user-stats-number">{0}</p>
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
