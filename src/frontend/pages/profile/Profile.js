//react hooks imports
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

//context imports
import {
  AuthContext,
  BookmarksContext,
  PostContext,
  UserContext,
} from "../../../index";

//style imports
import "./profile.css";

//component and modal imports
import { EditUserModal } from "../../modals/editUser/editUserModal";
import { default_img } from "../../constants/constants";

import ClipLoader from "react-spinners/ClipLoader";
import { FiLogOut } from "react-icons/fi";
import { PostImageCard } from "../../components/postImageCard/PostImageCard";

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
  const { allPosts, userPosts, getUserPosts, isUserPostsLoaded } =
    useContext(PostContext);
  const { bookmarks } = useContext(BookmarksContext);
  const { token, loggedInUserDetails, logoutHandler } = useContext(AuthContext);

  //state variables
  const [showEditModal, setShowEditModal] = useState(false);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  //utilities
  const bookmarkedPosts = allPosts.filter(({ _id }) =>
    bookmarks.some((bookmarkId) => bookmarkId === _id)
  );

  // calculated values and variables
  useEffect(() => {
    getSingleUserHandler(username);
    getUserPosts(username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, allPosts, allUsers, !showBookmarks]);

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
      {isUserPostsLoaded ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            // backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ClipLoader
            color="black"
            loading={isUserPostsLoaded}
            // cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="profile-page-container">
          <div className="user-profile-card">
            <img src={avatar || default_img} alt={userName}></img>

            <div>
              <div className="user-profile-name-container">
                <div>
                  <p className="user-profile-name">
                    {firstName} {lastName}
                  </p>
                  <p className="profile-username">@{userName}</p>
                </div>
                <div className="profile-edit-btn-container">
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
              </div>
              <div className="user-bio-container">
                <p className="user-bio">{bio}</p>
                <p className="user-website">{website}</p>
              </div>
              <div className="user-stats">
                <div>
                  <p>
                    <span className="user-stats-number">
                      {followers?.length}
                    </span>{" "}
                    Followers
                  </p>
                </div>
                <div>
                  <p>
                    <span className="user-stats-number">
                      {userPosts?.length}
                    </span>{" "}
                    Posts
                  </p>
                </div>
                <div>
                  <p>
                    <span className="user-stats-number">
                      {following?.length}
                    </span>{" "}
                    Following
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-page-navigation-btn">
            <p
              onClick={() => setShowBookmarks(false)}
              className={!showBookmarks && "current-visible-post"}
            >
              {" "}
              POSTS
            </p>
            {loggedInUserDetails?.username === userName && (
              <p
                onClick={() => setShowBookmarks(true)}
                className={showBookmarks && "current-visible-post"}
              >
                BOOKMARKS
              </p>
            )}
          </div>

          {!showBookmarks ? (
            userPosts.length > 0 ? (
              <div className="user-posts">
                {userPosts.map(
                  ({ username, image, _id, likes: { likeCount } }) => (
                    <div
                      onClick={() =>
                        navigate(`/post/${_id}`, {
                          state: { from: location },
                        })
                      }
                    >
                      <PostImageCard
                        key={_id}
                        likeCount={likeCount}
                        image={image}
                        alt={username}
                      />
                    </div>
                  )
                )}
              </div>
            ) : (
              <div className="no-posts-container">
                <h2>No Posts to be displayed...</h2>
                <h4>Start Posting</h4>
              </div>
            )
          ) : bookmarkedPosts.length > 0 ? (
            <div className="bookmarks-posts-container">
              {bookmarkedPosts.map(({ image, _id, likes: { likeCount } }) => (
                <div
                  onClick={() =>
                    navigate(`/post/${_id}`, {
                      state: { from: location },
                    })
                  }
                >
                  <PostImageCard
                    key={_id}
                    likeCount={likeCount}
                    image={image}
                    alt={username}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="no-posts-container">
              <h2>No Bookmarked Posts...</h2>
              <button
                onClick={() => navigate("/explore")}
                className="bookmark-page-btn"
              >
                Explore
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};
