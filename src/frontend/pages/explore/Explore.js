//react hooks imports
import { useContext } from "react";

//context imports
import { PostContext } from "../../../index";

//components imports
import { PostCard } from "../../components/postCard/PostCard";

//style imports
import "./explore.css";
import { PostImageCard } from "../../components/postImageCard/PostImageCard";
import { useLocation, useNavigate } from "react-router-dom";

export const Explore = () => {
  const { allPosts } = useContext(PostContext);
  const navigate = useNavigate();
  const location = useLocation();
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
        <div className="explore-post-card-container">
          {allPosts.map(
            ({ username, image, _id, likes: { likeCount }, comments }) => (
              <div
                key={_id}
                onClick={() =>
                  navigate(`/post/${_id}`, {
                    state: { from: location },
                  })
                }
              >
                <PostImageCard
                  likeCount={likeCount}
                  commentCount={comments?.length}
                  image={image}
                  alt={username}
                />
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};
