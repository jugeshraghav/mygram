import { useContext } from "react";
import { PostContext } from "../../../index";
import { PostCard } from "../../components/postCard/PostCard";
import "./home.css";

export const Home = () => {
  const { allPosts } = useContext(PostContext);

  return (
    <>
      <div className="home-posts-container">
        {allPosts.map((postData) => (
          <PostCard postData={postData} key={postData._id} />
        ))}
      </div>
    </>
  );
};
