//react hook imports
import { useContext } from "react";

//context imports
import { AuthContext, PostContext } from "../../../index";

//style imports
import "./home.css";

//components imports
import { PostCard } from "../../components/postCard/PostCard";
import { Stories } from "../../components/stories/Stories";
import { Filter } from "../../components/filter/Filter";

export const Home = () => {
  const { allPosts } = useContext(PostContext);
  const { loggedInUserDetails } = useContext(AuthContext);

  //utilities
  const postsOfFollowedUsersByLoggedInUser = allPosts?.filter(
    (post) =>
      loggedInUserDetails?.following.some(
        (followingUser) => followingUser?.username === post?.username
      ) || loggedInUserDetails?.username === post?.username
  );

  //component
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
