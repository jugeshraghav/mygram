import { useContext } from "react";
import { PostContext } from "../../../index";
import { PostCard } from "../../components/postCard/PostCard";
import "./home.css";
import { NewPostModal } from "../../modals/createPost/newPostModal";
import { Stories } from "../../components/stories/Stories";
import { Filter } from "../../components/filter/Filter";

export const Home = () => {
  const { allPosts } = useContext(PostContext);

  return (
    <>
      <div className="home-posts-container">
        <Stories />
        <Filter />
        {allPosts.map((postData) => (
          <PostCard postData={postData} key={postData._id} />
        ))}
      </div>
    </>
  );
};
