import { useContext } from "react";
import { AuthContext, PostContext } from "../../../index";
import { PostCard } from "../../components/postCard/PostCard";
import ClipLoader from "react-spinners/ClipLoader";
import "./home.css";
import { Stories } from "../../components/stories/Stories";
import { Filter } from "../../components/filter/Filter";
export const Home = () => {
  const { allPosts, postsOfUsersFollowed, isLoading } = useContext(PostContext);
  const { loggedInUserDetails, loading } = useContext(AuthContext);

  console.log(loggedInUserDetails, "logged in user details from home");
  const postsOfFollowedUsersByLoggedInUser = allPosts?.filter(
    (post) =>
      loggedInUserDetails?.following.some(
        (followingUser) => followingUser?.username === post?.username
      ) || loggedInUserDetails?.username === post?.username
  );

  console.log(isLoading, "loading state from post context");
  return (
    <>
      <div className="home-posts-container">
        <>
          <Stories />
          <Filter />
          {postsOfFollowedUsersByLoggedInUser.length > 0 ? (
            postsOfFollowedUsersByLoggedInUser?.map((postData) => (
              <PostCard postData={postData} key={postData._id} />
            ))
          ) : (
            <>
              <h2>No Posts to be displayed...</h2>
              <h4>Start Posting and following People</h4>
            </>
          )}
        </>
      </div>
    </>
  );
};
