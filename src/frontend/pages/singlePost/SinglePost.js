import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostContext, UserContext } from "../../../index";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { PostCard } from "../../components/postCard/PostCard";

export const SinglePost = () => {
  const { postId } = useParams();
  const { allPosts } = useContext(PostContext);
  const { allUsers } = useContext(UserContext);
  const postToBeDisplayed = allPosts?.find(({ _id }) => _id === postId);
  const currentPostUser = allUsers?.find(
    (user) => user?.username === postToBeDisplayed?.username
  );
  console.log(postToBeDisplayed);
  return (
    <>
      <div>
        <AiOutlineArrowLeft />
        <p>Post</p>
      </div>
      <div className="post-modal">
        <img src={postToBeDisplayed?.image} alt={postToBeDisplayed?.mediaAlt} />
        <div className="post-modal-content"></div>
      </div>
    </>
  );
};
