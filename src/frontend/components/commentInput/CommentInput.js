import "./commentInput.css";
import { FaRegSmile } from "react-icons/fa";
export const CommentInput = () => {
  return (
    <>
      <div className="comment-input-container">
        <div>
          <FaRegSmile className="post-card-icon post-comment-smile" />
          <input
            // value={commentData}
            placeholder="Add a comment..."
            className="post-comment-input"
            // onChange={(e) => setCommentData(e.target.value)}
          ></input>
        </div>
        <p
          className="post-comment-btn"
          // onClick={() => postCommentHandler(_id, commentData, token)}
        >
          Post
        </p>
      </div>
    </>
  );
};
