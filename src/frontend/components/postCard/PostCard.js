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
import { AuthContext, BookmarksContext, PostContext } from "../../../index";
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

  const isInBookmarks = bookmarks.filter((bookmarkId) => bookmarkId === _id);

  // const token = localStorage.getItem("token");
  // const { username: currentLoggedInUsername } = JSON.parse(
  //   localStorage.getItem("userDetails")
  // );

  const [commentData, setCommentData] = useState("");
  console.log(commentData);
  const location = useLocation();
  const navigate = useNavigate();

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
              <img
                src="https://images.unsplash.com/photo-1680296280129-84da3c59727b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt={username}
              />
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
                  <p>Unfollow</p>
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
