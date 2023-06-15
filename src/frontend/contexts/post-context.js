import { createContext, useEffect, useReducer } from "react";
import {
  allPostService,
  createPostService,
  deletePostService,
  editPostService,
  userPostsService,
} from "../services/post-services/postServices";
import {
  likeService,
  unlikeService,
} from "../services/like-services/likeServices";
import { toast } from "react-toastify";
import { dataReducer, initial_state } from "../reducers/dataReducer";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initial_state);
  const { allPosts, userPosts } = state;

  const getAllPostsHandler = async () => {
    try {
      const response = await allPostService();
      const postsArray = response?.data?.posts;
      dispatch({ type: "get_all_posts", payLoad: postsArray });
    } catch (e) {
      console.log(e);
    }
  };
  const getUserPosts = async (username) => {
    try {
      const response = await userPostsService(username);

      const userPostsArray = response?.data?.posts;
      dispatch({ type: "get_all_user_posts", payLoad: userPostsArray });
    } catch (e) {
      console.log(e);
    }
  };

  const likeHandler = async (postId, token) => {
    const response = await likeService(postId, token);
    const postsArray = response?.data?.posts;
    dispatch({ type: "like_post", payLoad: postsArray });
    toast.success("Post liked successfully!");
  };
  const unlikeHandler = async (postId, token) => {
    const response = await unlikeService(postId, token);
    const postsArray = response?.data?.posts;
    dispatch({ type: "unlike_post", payLoad: postsArray });
    toast.info("Post unliked!");
  };

  const createPostHandler = async (post, token) => {
    const response = await createPostService(post, token);
    const newPostsArr = response?.data?.posts;
    dispatch({ type: "add_new_post", payLoad: newPostsArr });
    toast.success("New post created.");
  };

  const deletePostHandler = async (postId, token) => {
    const response = await deletePostService(postId, token);
    const newPostsArr = response?.data?.posts;
    dispatch({ type: "delete_post", payLoad: newPostsArr });
    toast.info("Post successfully deleted.");
  };

  const editPostHandler = async (postId, post, token) => {
    try {
      const response = await editPostService(postId, post, token);
      const newPostsArr = response?.data?.posts;
      dispatch({ type: "edit_post", payLoad: newPostsArr });
      toast.info("Post successfully edited.");
    } catch (e) {
      console.log(e.message);
    }
  };

  const filtersHandler = (currentFilter) => {
    dispatch({ type: "apply_filter", payLoad: currentFilter });
  };
  useEffect(() => {
    getAllPostsHandler();
  }, []);
  return (
    <PostContext.Provider
      value={{
        allPosts,
        getUserPosts,
        userPosts,
        likeHandler,
        unlikeHandler,
        createPostHandler,
        deletePostHandler,
        editPostHandler,
        filtersHandler,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
