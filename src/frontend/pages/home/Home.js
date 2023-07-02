import { useContext } from "react";
import { AuthContext, PostContext } from "../../../index";
import { PostCard } from "../../components/postCard/PostCard";
import "./home.css";
import { Stories } from "../../components/stories/Stories";
import { Filter } from "../../components/filter/Filter";
import ClipLoader from "react-spinners/ClipLoader";
export const Home = () => {
  const { allPosts, postsOfUsersFollowed } = useContext(PostContext);
  const { loggedInUserDetails, loading } = useContext(AuthContext);

  console.log(loggedInUserDetails, "logged in user details from home");
  const postsOfFollowedUsersByLoggedInUser = allPosts?.filter(
    (post) =>
      loggedInUserDetails?.following.some(
        (followingUser) => followingUser?.username === post?.username
      ) || loggedInUserDetails?.username === post?.username
  );
  // console.log(
  //   postsOfUsersFollowed,
  //   "posts of users followed by logged in user"
  // );

  console.log(loading);
  return (
    <>
      <div className="home-posts-container">
        {loading ? (
          <ClipLoader
            color="black"
            loading={loading}
            // cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <>
            <Stories />
            <Filter />
            {postsOfFollowedUsersByLoggedInUser?.map((postData) => (
              <PostCard postData={postData} key={postData._id} />
            ))}
          </>
        )}
      </div>
    </>
  );
};
