import { useContext, useState } from "react";
import Picker from "emoji-picker-react";
import "./newPostModal.css";
import { FaCamera, FaRegFile, FaSmile } from "react-icons/fa";
import { PostContext } from "../../../index";
import { toast } from "react-toastify";

export const NewPostModal = ({ show, onClose, displayName, post }) => {
  const currentLoggedInUser = JSON.parse(localStorage.getItem("userDetails"));
  const token = localStorage.getItem("token");
  const { avatar, username: currentLoggedInUsername } = currentLoggedInUser;
  const { createPostHandler, editPostHandler } = useContext(PostContext);
  const [newPostContent, setNewPostContent] = useState(
    post ? post.content : ""
  );

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleNewPostClick = () => {
    if (newPostContent.length === 0) {
      toast.error("Please write something to post");
    } else {
      createPostHandler({ content: newPostContent }, token);
      setNewPostContent("");
      onClose();
    }
  };
  const handleUpdatePostClick = () => {
    if (newPostContent.length === 0) {
      toast.error("Please write something to Update");
    } else {
      editPostHandler(post._id, { content: newPostContent }, token);
      onClose();
    }
  };

  const handleEmojiClick = (emojiObj) => {
    const emoji = emojiObj.emoji;
    const updatedContent = newPostContent + emoji;
    setNewPostContent(updatedContent);
    // setShowEmojiPicker(false);
  };
  console.log(newPostContent);

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
                  value={newPostContent}
                  placeholder="Write Something Interesting!"
                  onChange={(e) =>
                    setNewPostContent((pre) =>
                      pre === e.target.value
                        ? toast.info(
                            "You have not changed anything in the post."
                          )
                        : e.target.value
                    )
                  }
                ></textarea>
                <div className="new-post-modal-icon-button-container">
                  <div className="new-post-modal-icons">
                    <FaCamera />
                    <FaRegFile />
                    <FaSmile
                      onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    />
                  </div>
                  {displayName === "New" ? (
                    <button
                      className="new-post-btn"
                      disabled={newPostContent?.length === 0}
                      onClick={handleNewPostClick}
                    >
                      Post
                    </button>
                  ) : (
                    <button
                      className="new-post-btn"
                      disabled={newPostContent.length === 0}
                      onClick={handleUpdatePostClick}
                    >
                      Update
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          {showEmojiPicker && (
            <div
              className="emoji-picker-container"
              onClick={(e) => e.stopPropagation()}
            >
              <Picker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>
      </>
    );
  }
};
