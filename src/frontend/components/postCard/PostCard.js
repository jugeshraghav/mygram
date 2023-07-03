import "./postCard.css";
import {
  FaBookmark,
  FaHeart,
  FaRegBookmark,
  FaRegComment,
  FaRegHeart,
  FaRegSmile,
  FaShare,
} from "react-icons/fa";
import { useContext, useState } from "react";
import {
  AuthContext,
  BookmarksContext,
  PostContext,
  UserContext,
} from "../../../index";
import { NewPostModal } from "../../modals/createPost/newPostModal";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
export const PostCard = ({ postData }) => {
  const {
    _id,
    content,
    image,
    username,
    likes: { likeCount, likedBy },
    comments,
  } = postData;

  const [showPostAlterOptions, setShowAlterOptions] = useState(false);
  const [showEditPostModal, setShowEditPostModal] = useState(false);
  const { bookmarks, addToBookmarkHandler, removeFromBookmarkHandler } =
    useContext(BookmarksContext);
  const { likeHandler, unlikeHandler, deletePostHandler, postCommentHandler } =
    useContext(PostContext);
  const { token, loggedInUserDetails } = useContext(AuthContext);
  const { allUsers, unfollowHandler } = useContext(UserContext);

  const isInBookmarks = bookmarks.filter((bookmarkId) => bookmarkId === _id);

  const [commentData, setCommentData] = useState("");
  console.log(commentData);
  const location = useLocation();
  const navigate = useNavigate();

  const currentPostUser = allUsers?.find((user) => user?.username === username);
  return (
    <>
      <NewPostModal
        show={showEditPostModal}
        onClose={() => setShowEditPostModal(false)}
        displayName="Edit"
        post={postData}
      />
      <div className="post-card">
        <div className="post-card-header">
          <div className="post-card-user">
            <div className="post-card-user-img">
              <img src={currentPostUser?.avatar} alt={username} />
            </div>
            <div className="post-card-user-details">
              <p className="user-name">{username}</p>
              <p className="at-user-name">@{username}</p>
            </div>
          </div>
          <div className="post-alter-link">
            <div
              className="three-dot-icon"
              onClick={() => setShowAlterOptions(!showPostAlterOptions)}
            >
              ...
            </div>
            {showPostAlterOptions ? (
              loggedInUserDetails.username === username ? (
                <div className="post-alter-options">
                  <p
                    onClick={() => {
                      setShowEditPostModal(true);
                      setShowAlterOptions(false);
                    }}
                  >
                    Edit
                  </p>
                  <p onClick={() => deletePostHandler(_id, token)}>Delete</p>
                </div>
              ) : (
                <div className="post-alter-options">
                  <p
                    onClick={() => unfollowHandler(currentPostUser?._id, token)}
                  >
                    Unfollow
                  </p>
                </div>
              )
            ) : (
              ""
            )}
          </div>
        </div>

        {image && (
          <img src={image} alt={username} className="post-card-content-image" />
        )}

        <div className="post-card-content-text">
          {content.length > 100 ? `${content.substring(0, 100)}...` : content}
        </div>

        <div className="post-card-icons">
          <div className="post-card-icons-leftgroup">
            {likedBy.length > 0 ? (
              <span
                onClick={() => {
                  unlikeHandler(_id, username, token);
                }}
              >
                <FaHeart style={{ color: "red" }} className="post-card-icon" />
              </span>
            ) : (
              <span
                onClick={() => {
                  likeHandler(_id, username, token);
                }}
              >
                <FaRegHeart className="post-card-icon" />
              </span>
            )}
            <span>
              <div
                onClick={() =>
                  navigate(`/mygram/post/${_id}`, { state: { from: location } })
                }
              >
                <FaRegComment className="post-card-icon" />
              </div>
            </span>
            <span>
              <FaShare className="post-card-icon" />
            </span>
          </div>

          {isInBookmarks.length !== 0 ? (
            <div onClick={() => removeFromBookmarkHandler(_id, token)}>
              <FaBookmark className="post-card-icon" />
            </div>
          ) : (
            <div onClick={() => addToBookmarkHandler(_id, token)}>
              <FaRegBookmark className="post-card-icon" />
            </div>
          )}
        </div>
        <p className="post-card-like-count-container">
          <span className="post-card-like-count">{likeCount}</span> likes
        </p>
        {/* comments */}
        <div className="post-card-comments-container">
          <div
            onClick={() =>
              navigate(`/mygram/post/${_id}`, { state: { from: location } })
            }
          >
            {comments?.length > 0 && (
              <p className="post-card-comment-display-text">
                View all {comments?.length} comments
              </p>
            )}
          </div>
          <div className="comment-input-container">
            <div>
              <FaRegSmile className="post-card-icon post-comment-smile" />
              <input
                value={commentData}
                placeholder="Add a comment..."
                className="post-comment-input"
                onChange={(e) => setCommentData(e.target.value)}
              ></input>
            </div>
            <p
              className="post-comment-btn"
              onClick={() => postCommentHandler(_id, commentData, token)}
            >
              Post
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
