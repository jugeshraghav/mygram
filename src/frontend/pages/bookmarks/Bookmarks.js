//react hooks imports
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

//context imports
import { BookmarksContext, PostContext } from "../../../index";

//components import
import { PostCard } from "../../components/postCard/PostCard";

//style imports
import "./bookmarks.css";

export const Bookmarks = () => {
  const { bookmarks } = useContext(BookmarksContext);
  const { allPosts } = useContext(PostContext);
  const navigate = useNavigate();

  //utilities
  const bookmarkedPosts = allPosts.filter(({ _id }) =>
    bookmarks.some((bookmarkId) => bookmarkId === _id)
  );

  return (
    <>
      <div className="bookmarks-posts-container">
        <p className="bookmarks-page-heading">Your Bookmarks</p>

        {bookmarkedPosts.length > 0 ? (
          bookmarkedPosts.map((postData) => (
            <PostCard postData={postData} key={postData._id} />
          ))
        ) : (
          <>
            <h2>No Bookmarked Posts...</h2>
            <button
              onClick={() => navigate("/mygram/explore")}
              className="bookmark-page-btn"
            >
              Explore
            </button>
          </>
        )}
      </div>
    </>
  );
};
