import { useContext, useState } from "react";
import "./newPostModal.css";
import { FaCamera, FaRegFile, FaSmile } from "react-icons/fa";
import { PostContext } from "../../../index";
import { toast } from "react-toastify";

export const NewPostModal = ({ show, onClose, displayName, post }) => {
  const currentLoggedInUser = JSON.parse(localStorage.getItem("userDetails"));
  const token = localStorage.getItem("token");
  const { avatar, username: currentLoggedInUsername } = currentLoggedInUser;
  const { createPostHandler, editPostHandler } = useContext(PostContext);
  const [newPost, setNewPost] = useState({
    content: post ? post.content : "",
  });

  const handleNewPostClick = () => {
    if (newPost.content.length === 0) {
      toast.error("Please write something to post");
    } else {
      createPostHandler(newPost, token);
      setNewPost({ content: "" });
      onClose();
    }
  };
  const handleUpdatePostClick = () => {
    if (newPost.content.length === 0) {
      toast.error("Please write something to Update");
    } else {
      editPostHandler(post._id, newPost, token);
      onClose();
    }
  };

  if (!show) {
    return null;
  } else {
    return (
      <>
        <div className="new-post-modal-container" onClick={onClose}>
          <div className="new-post-modal" onClick={(e) => e.stopPropagation()}>
            <p className="new-post-modal-heading">{displayName} Post</p>
            <div className="new-post-modal-content">
              <img src={avatar} alt={currentLoggedInUsername}></img>
              <div className="new-post-input-area">
                <textarea
                  rows="8"
                  cols="50"
                  value={newPost.content}
                  placeholder="Write Something Interesting!"
                  onChange={(e) =>
                    setNewPost((pre) =>
                      pre === e.target.value
                        ? toast.info(
                            "You have not changed anything in the post."
                          )
                        : { ...pre, content: e.target.value }
                    )
                  }
                ></textarea>
                <div className="new-post-modal-icon-button-container">
                  <div className="new-post-modal-icons">
                    <FaCamera />
                    <FaRegFile />
                    <FaSmile />
                  </div>
                  {displayName === "New" ? (
                    <button
                      className="new-post-btn"
                      disabled={newPost.content.length === 0}
                      onClick={handleNewPostClick}
                    >
                      Post
                    </button>
                  ) : (
                    <button
                      className="new-post-btn"
                      disabled={newPost.content.length === 0}
                      onClick={handleUpdatePostClick}
                    >
                      Update
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};
