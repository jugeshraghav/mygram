import { useContext } from "react";
import { BookmarksContext, PostContext } from "../../../index";
import { PostCard } from "../../components/postCard/PostCard";
import "./bookmarks.css";

export const Bookmarks = () => {
  const { bookmarks } = useContext(BookmarksContext);
  const { allPosts } = useContext(PostContext);
  const bookmarkedPosts = allPosts.filter(({ _id }) =>
    bookmarks.some((bookmarkId) => bookmarkId === _id)
  );

  return (
    <>
      <div className="bookmarks-posts-container">
        <p className="bookmarks-page-heading">Your Bookmarks</p>

        {bookmarkedPosts.map((postData) => (
          <PostCard postData={postData} key={postData._id} />
        ))}
      </div>
    </>
  );
};
