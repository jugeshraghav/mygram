import { createContext, useEffect, useState } from "react";
import {
  allPostService,
  userPostsService,
} from "../services/post-services/postServices";
import {
  likeService,
  unlikeService,
} from "../services/like-services/likeServices";
import { toast } from "react-toastify";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [allPosts, setAllPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const getAllPostsHandler = async () => {
    try {
      const response = await allPostService();
      const postsArray = response?.data?.posts;
      // console.log(postsArray);
      setAllPosts([...postsArray]);
    } catch (e) {
      console.log(e);
    }
  };
  const getUserPosts = async (username) => {
    try {
      const response = await userPostsService(username);
      // console.log(response);
      setUserPosts([...response?.data?.posts]);
    } catch (e) {
      console.log(e);
    }
  };
  // console.log(allPosts);

  const likeHandler = async (postId, token) => {
    const response = await likeService(postId, token);
    setAllPosts([...response?.data?.posts]);
    toast.success("Post liked successfully!");
    // console.log(response);
  };
  const unlikeHandler = async (postId, token) => {
    const response = await unlikeService(postId, token);
    setAllPosts([...response?.data?.posts]);
    toast.info("Post unliked!");
  };
  useEffect(() => {
    getAllPostsHandler();
  }, []);
  return (
    <PostContext.Provider
      value={{ allPosts, getUserPosts, userPosts, likeHandler, unlikeHandler }}
    >
      {children}
    </PostContext.Provider>
  );
};
