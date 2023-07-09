//react hook imports
import { useContext, useState } from "react";

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

  //State variables
  const [appliedFilter, setAppliedFilter] = useState("Latest");
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  //utilities
  const homePosts = allPosts?.filter(
    (post) =>
      loggedInUserDetails?.following.some(
        (followingUser) => followingUser?.username === post?.username
      ) || loggedInUserDetails?.username === post?.username
  );

  const filteredPosts =
    appliedFilter === "Trending"
      ? homePosts.sort((a, b) => b.likes.likeCount - a.likes.likeCount)
      : homePosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  //component
  return (
    <>
      <div className="home-posts-container">
        <>
          <Stories />
          <Filter
            appliedFilter={appliedFilter}
            setAppliedFilter={setAppliedFilter}
            showFilterOptions={showFilterOptions}
            setShowFilterOptions={setShowFilterOptions}
          />
          {filteredPosts.length > 0 ? (
            filteredPosts?.map((postData) => (
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
