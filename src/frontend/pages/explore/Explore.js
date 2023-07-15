//react hooks imports
import { useContext, useEffect } from "react";

//context imports
import { PostContext } from "../../../index";

//components imports

//style imports
import "./explore.css";
import { PostImageCard } from "../../components/postImageCard/PostImageCard";
import { useLocation, useNavigate } from "react-router-dom";

import { ClipLoader } from "react-spinners";

export const Explore = () => {
  const { allPosts, getAllPostsHandler, isAllPostsLoaded } =
    useContext(PostContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getAllPostsHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //component
  return (
    <>
      <div className="explore-posts-container">
        {!isAllPostsLoaded ? (
          <>
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
          </>
        ) : (
          <div
            style={{
              position: "absolute",
              left: "45%",
              top: "40%",
            }}
          >
            <ClipLoader
              color="black"
              loading={isAllPostsLoaded}
              // cssOverride={override}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}
      </div>
    </>
  );
};
