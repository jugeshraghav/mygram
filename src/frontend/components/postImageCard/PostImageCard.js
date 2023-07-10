import "./postImageCard.css";
import { FaHeart, FaComment } from "react-icons/fa";
export const PostImageCard = ({ image, likeCount, commentCount, username }) => {
  return (
    <>
      <div className="post-image-container">
        <img src={image} alt={username} />
        <div className="post-image-card-overlay">
          <div className="post-image-card-icons-container">
            <span className="post-image-card-icon">
              <FaHeart />
              {likeCount}
            </span>
            <span className="post-image-card-icon">
              {" "}
              <FaComment />
              {commentCount}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
