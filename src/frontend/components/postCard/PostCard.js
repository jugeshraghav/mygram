import "./postCard.css";
import {
  FaBookmark,
  FaHeart,
  FaRegBookmark,
  FaRegComment,
  FaRegHeart,
  FaShare,
} from "react-icons/fa";
import { useContext, useState } from "react";
import { BookmarksContext, PostContext } from "../../../index";
import { NewPostModal } from "../../modals/createPost/newPostModal";
export const PostCard = ({ postData }) => {
  const {
    _id,
    content,
    image,
    username,
    likes: { likeCount, likedBy },
  } = postData;

  const [showPostAlterOptions, setShowAlterOptions] = useState(false);
  const [showEditPostModal, setShowEditPostModal] = useState(false);
  const { bookmarks, addToBookmarkHandler, removeFromBookmarkHandler } =
    useContext(BookmarksContext);
  const { likeHandler, unlikeHandler, deletePostHandler } =
    useContext(PostContext);

  const isInBookmarks = bookmarks.filter((bookmarkId) => bookmarkId === _id);

  const token = localStorage.getItem("token");
  const { username: currentLoggedInUsername } = JSON.parse(
    localStorage.getItem("userDetails")
  );

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
              currentLoggedInUsername === username ? (
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
              <FaRegComment className="post-card-icon" />
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
      </div>
    </>
  );
};
