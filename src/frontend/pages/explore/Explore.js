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
        {allPosts.map((postData) => (
          <PostCard postData={postData} key={postData._id} />
        ))}
      </div>
    </>
  );
};
