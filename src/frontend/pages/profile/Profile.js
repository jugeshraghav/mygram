import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { AuthContext, PostContext, UserContext } from "../../../index";

import "./profile.css";
import { PostCard } from "../../components/postCard/PostCard";
import { EditUserModal } from "../../modals/editUser/editUserModal";

export const Profile = () => {
  //get username from useParams
  const { username } = useParams();

  //get handlers and values from Contexts
  const {
    allUsers,
    selectedUser,
    getSingleUserHandler,
    followHandler,
    unfollowHandler,
  } = useContext(UserContext);
  const { allPosts, userPosts, getUserPosts, dispatch } =
    useContext(PostContext);
  const { token, loggedInUserDetails } = useContext(AuthContext);
  // console.log(loggedInUserDetails);

  //state variables
  const [showEditModal, setShowEditModal] = useState(false);

  // calculated values and variables
  useEffect(() => {
    getSingleUserHandler(username);
    getUserPosts(username);
  }, [username, allPosts, allUsers]);

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
      <EditUserModal
        user={loggedInUserDetails}
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
      />
      <div className="profile-page-container">
        <div className="user-profile-card">
          <img src={avatar} alt={userName}></img>
          <div>
            <p className="user-profile-name">
              {firstName} {lastName}
            </p>
            <p className="profile-username">@{userName}</p>
            {loggedInUserDetails.username === username ? (
              <button
                className="profile-edit-btn"
                onClick={() => {
                  setShowEditModal(true);
                }}
              >
                Edit Profile
              </button>
            ) : followers?.length === 0 ? (
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
              <p className="user-stats-number">{followers?.length}</p>
              <p>Followers</p>
            </div>
            <div>
              <p className="user-stats-number">{userPosts?.length}</p>
              <p>Posts</p>
            </div>
            <div>
              <p className="user-stats-number">{following?.length}</p>
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
