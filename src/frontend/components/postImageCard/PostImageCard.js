import "./postImageCard.css";
export const PostImageCard = ({ image, likeCount, commentCount, username }) => {
  return (
    <>
      <div className="post-image-container">
        <img src={image} alt={username} />
      </div>
    </>
  );
};
