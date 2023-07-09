//react hooks imports
import { useContext } from "react";

//context imports
import { PostContext } from "../../../index";

//components imports
import { PostCard } from "../../components/postCard/PostCard";

//style imports
import "./explore.css";

export const Explore = () => {
  const { allPosts } = useContext(PostContext);

  //component
  return (
    <>
      <div className="explore-posts-container">
        <p className="explore-page-heading">Explore</p>
        <div className="explore-category-btn-container">
          <button>For you</button>
          <button>Trending</button>
          <button>Technology</button>
          <button>Sports</button>
          <button>News</button>
        </div>
        <div className="posts">
          {allPosts.map(({ image, _id, likes: { likeCount } }) => (
            <div className="post-image-container" key={_id}>
              <img src={image} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
