//react hook imports
import { useContext, useState } from "react";
import Picker from "emoji-picker-react";

//style imports
import "./newPostModal.css";

//icon imports
import { FaCamera, FaSmile } from "react-icons/fa";

//context imports
import { AuthContext, PostContext } from "../../../index";

//toast imports
import { toast } from "react-toastify";
import { default_img } from "../../constants/constants";

export const NewPostModal = ({ show, onClose, displayName, post }) => {
  const { token, loggedInUserDetails } = useContext(AuthContext);
  const { createPostHandler, editPostHandler } = useContext(PostContext);

  //state variables
  const [newPostContent, setNewPostContent] = useState(
    post ? post.content : ""
  );
  const [newPostImageName, setNewPostImageName] = useState(
    post ? post.image : ""
  );
  const [newPostImage, setNewPostImage] = useState(post ? post.image : null);

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  //handlers
  const handleNewPostClick = () => {
    if (newPostContent.length === 0) {
      toast.error("Please write something to post");
    } else {
      createPostHandler(
        { content: newPostContent, image: newPostImage },
        token
      );
      setNewPostContent("");
      setNewPostImage("");
      setNewPostImageName("");
      onClose();
    }
  };
  const handleUpdatePostClick = () => {
    if (newPostContent.length === 0) {
      toast.error("Please write something to Update");
    } else {
      editPostHandler(
        post._id,
        { content: newPostContent, image: newPostImage },
        token
      );
      onClose();
    }
  };

  const handleEmojiClick = (emojiObj) => {
    const emoji = emojiObj.emoji;
    const updatedContent = newPostContent + emoji;
    setNewPostContent(updatedContent);
    setShowEmojiPicker(false);
  };

  const handleImageChange = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const image = e.target.files[0];
      const imageName = e.target.files[0].name;
      const imageURL = URL.createObjectURL(image);
      console.log(imageURL);
      setNewPostImage(imageURL);
      setNewPostImageName(imageName);
    };
    input.click();
  };

  //component
  if (!show) {
    return null;
  } else {
    return (
      <>
        <div className="new-post-modal-container" onClick={onClose}>
          <div
            className="new-post-modal"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <p className="new-post-modal-heading">{displayName} Post</p>
            <div className="new-post-modal-content">
              <img
                src={loggedInUserDetails?.avatar || default_img}
                alt={loggedInUserDetails?.username}
              ></img>
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

                {newPostImageName?.length > 0 ? (
                  <p
                    style={{
                      color: "green",
                      fontSize: "12px",
                    }}
                  >
                    {`${newPostImageName.substring(0, 30)}...`}
                  </p>
                ) : (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    select an image
                  </p>
                )}

                <div className="new-post-modal-icon-button-container">
                  <div className="new-post-modal-icons">
                    <FaCamera
                      className="new-post-modal-icon camera-icon"
                      onClick={handleImageChange}
                    />
                    <FaSmile
                      className="new-post-modal-icon smile-icon"
                      onClick={(e) => {
                        setShowEmojiPicker(!showEmojiPicker);
                        e.stopPropagation();
                      }}
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
                      disabled={newPostContent?.length === 0}
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
              onClick={(e) => {
                e.stopPropagation();
                setShowEmojiPicker(false);
              }}
            >
              <Picker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>
      </>
    );
  }
};
