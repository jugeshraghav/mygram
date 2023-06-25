import { useContext } from "react";
import { AuthContext, PostContext } from "../../../index";
import { PostCard } from "../../components/postCard/PostCard";
import "./home.css";
import { Stories } from "../../components/stories/Stories";
import { Filter } from "../../components/filter/Filter";

export const Home = () => {
  const { allPosts } = useContext(PostContext);
  const { loggedInUserDetails } = useContext(AuthContext);

  const postsOfFollowedUsersByLoggedInUser = allPosts?.filter(
    (post) =>
      loggedInUserDetails?.following.some(
        (followingUser) => followingUser.username === post.username
      ) || loggedInUserDetails.username === post.username
  );
  console.log(
    postsOfFollowedUsersByLoggedInUser,
    "posts of users followed by logged in user"
  );

  return (
    <>
      <div className="home-posts-container">
        <Stories />
        <Filter />
        {postsOfFollowedUsersByLoggedInUser?.map((postData) => (
          <PostCard postData={postData} key={postData._id} />
        ))}
      </div>
    </>
  );
};
