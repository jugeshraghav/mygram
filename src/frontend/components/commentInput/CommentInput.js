// style imports
import "./commentInput.css";
//icon imports
import { FaRegSmile } from "react-icons/fa";

//comment input component
export const CommentInput = () => {
  return (
    <>
      <div className="comment-input-container">
        <div>
          <FaRegSmile className="post-card-icon post-comment-smile" />
          <input
            placeholder="Add a comment..."
            className="post-comment-input"
          ></input>
        </div>
        <p className="post-comment-btn">Post</p>
      </div>
    </>
  );
};
