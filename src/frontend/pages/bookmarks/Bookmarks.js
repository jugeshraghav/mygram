import { useContext } from "react";
import { BookmarksContext, PostContext } from "../../../index";
import { PostCard } from "../../components/postCard/PostCard";
import "./bookmarks.css";

export const Bookmarks = () => {
  const { bookmarks } = useContext(BookmarksContext);

  return (
    <>
      <div className="bookmarks-posts-container">
        <p className="bookmarks-page-heading">Your Bookmarks</p>

        {bookmarks.map((postData) => (
          <PostCard postData={postData} key={postData._id} />
        ))}
      </div>
    </>
  );
};
