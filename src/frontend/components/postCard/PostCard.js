//style imports
import "./postCard.css";

//icon-imports
import {
  FaBookmark,
  FaHeart,
  FaRegBookmark,
  FaRegComment,
  FaRegHeart,
  FaShare,
} from "react-icons/fa";

//react-hook imports
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

//context imports
import {
  AuthContext,
  BookmarksContext,
  PostContext,
  UserContext,
} from "../../../index";

//modal and component imports
import { NewPostModal } from "../../modals/createPost/newPostModal";
import { CommentInput } from "../commentInput/CommentInput";
import { default_img } from "../../constants/constants";

export const PostCard = ({ postData }) => {
  //handlers from contexts
  const { bookmarks, addToBookmarkHandler, removeFromBookmarkHandler } =
    useContext(BookmarksContext);
  const { allPosts, likeHandler, unlikeHandler, deletePostHandler } =
    useContext(PostContext);
  const { token, loggedInUserDetails } = useContext(AuthContext);
  const { allUsers, unfollowHandler, followHandler } = useContext(UserContext);

  //ID from useParams
  const { pId } = useParams();
  const currentPost = allPosts?.find(({ _id }) => _id === pId);

  //state variables
  const [showPostAlterOptions, setShowAlterOptions] = useState(false);
  const [showEditPostModal, setShowEditPostModal] = useState(false);
  const currentPostData = {
    _id: postData?._id || currentPost?._id,
    content: postData?.content || currentPost?.content,
    image: postData?.image || currentPost?.image,
    username: postData?.username || currentPost?.username,
    likes: postData?.likes || currentPost?.likes,
    comments: postData?.comments || currentPost?.comments,
  };

  //utilities
  const {
    _id,
    content,
    image,
    username,
    likes: { likeCount, likedBy },
    comments,
  } = currentPostData;
  const isInBookmarks = bookmarks.filter((bookmarkId) => bookmarkId === _id);
  const currentPostUser = allUsers?.find((user) => user?.username === username);

  const location = useLocation();
  const navigate = useNavigate();

  //component
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
                src={currentPostUser?.avatar || default_img}
                alt={username}
              />
            </div>
            <div className="post-card-user-details">
              <p className="user-name">
                {currentPostUser?.firstName} {currentPostUser?.lastName}
              </p>
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
                  {loggedInUserDetails?.following?.find(
                    (user) => user.username === username
                  ) ? (
                    <p
                      onClick={() =>
                        unfollowHandler(currentPostUser?._id, token)
                      }
                    >
                      Unfollow
                    </p>
                  ) : (
                    <p
                      onClick={() => followHandler(currentPostUser?._id, token)}
                    >
                      Follow
                    </p>
                  )}
                </div>
              )
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="post-card-content-image-container">
          {image && (
            <img
              src={image}
              alt={username}
              className="post-card-content-image"
            />
          )}
        </div>
        <div className="post-card-content-text">
          {content.length > 100 ? `${content.substring(0, 100)}...` : content}
        </div>

        <div className="post-card-icons">
          <div className="post-card-icons-leftgroup">
            {likedBy.length > 0 ? (
              <span
                onClick={() => {
                  unlikeHandler(_id, token);
                }}
              >
                <FaHeart style={{ color: "red" }} className="post-card-icon" />
              </span>
            ) : (
              <span
                onClick={() => {
                  likeHandler(_id, token);
                }}
              >
                <FaRegHeart className="post-card-icon" />
              </span>
            )}
            <span>
              <div
                onClick={() =>
                  navigate(`/comments/${_id}`, { state: { from: location } })
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
              navigate(`/comments/${_id}`, { state: { from: location } })
            }
          >
            {comments?.length > 0 && (
              <p className="post-card-comment-display-text">
                View all {comments?.length} comments
              </p>
            )}
          </div>

          <CommentInput />
        </div>
      </div>
    </>
  );
};
