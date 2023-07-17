//react hooks imports
import { createContext, useContext, useReducer, useState } from "react";

//services imports
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

//toast imports
import { toast } from "react-toastify";

//reducer
import { dataReducer, initial_state } from "../reducers/dataReducer";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./auth-context";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initial_state);
  const { loggedInUserDetails } = useContext(AuthContext);
  /////////////////////////////State Variable////////////////////////
  const { allPosts, userPosts, postsOfUsersFollowed } = state;
  const [isAllPostsLoaded, setIsAllPostsLoaded] = useState(false);
  const [isUserPostsLoaded, setIsUserPostsLoaded] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  //////////////////////////handlers//////////////////////////////////
  const getAllPostsHandler = async () => {
    setIsAllPostsLoaded(true);
    try {
      const response = await allPostService();
      const postsArray = response?.data?.posts;
      dispatch({ type: "get_all_posts", payLoad: postsArray });
    } catch (e) {
      console.log(e);
    } finally {
      setIsAllPostsLoaded(false);
    }
  };
  const getUserPosts = async (username) => {
    setIsUserPostsLoaded(true);
    try {
      const response = await userPostsService(username);
      const userPostsArray = response?.data?.posts;
      dispatch({ type: "get_all_user_posts", payLoad: userPostsArray });
    } catch (e) {
      console.log(e);
    } finally {
      setIsUserPostsLoaded(false);
    }
  };

  const likeHandler = async (postId, token) => {
    try {
      const response = await likeService(postId, token);
      const postsArray = response?.data?.posts;
      dispatch({ type: "like_post", payLoad: postsArray });
      toast.success("Post liked successfully!");
    } catch (e) {
      console.log(e);
    }
  };
  const unlikeHandler = async (postId, token) => {
    try {
      const response = await unlikeService(postId, token);
      const postsArray = response?.data?.posts;
      dispatch({ type: "unlike_post", payLoad: postsArray });
      toast.info("Post unliked!");
    } catch (e) {
      console.log(e);
    }
  };

  const createPostHandler = async (post, token) => {
    setIsAllPostsLoaded(true);
    try {
      const response = await createPostService(post, token);
      const newPostsArr = response?.data?.posts;
      dispatch({ type: "add_new_post", payLoad: newPostsArr });
      toast.success("New post created.");
    } catch (e) {
      console.log(e);
    } finally {
      setIsAllPostsLoaded(false);
    }
  };

  const deletePostHandler = async (postId, token) => {
    try {
      const response = await deletePostService(postId, token);
      const newPostsArr = response?.data?.posts;
      dispatch({ type: "delete_post", payLoad: newPostsArr });
      toast.info("Post successfully deleted.");
      if (
        location?.state?.from?.pathname === "/bookmarks" ||
        "/explore" ||
        `/profile/${loggedInUserDetails?.username}`
      ) {
        navigate(-1);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const editPostHandler = async (postId, post, token) => {
    setIsAllPostsLoaded(true);
    try {
      const response = await editPostService(postId, post, token);
      const newPostsArr = response?.data?.posts;
      dispatch({ type: "edit_post", payLoad: newPostsArr });
      toast.info("Post successfully edited.");
    } catch (e) {
      console.log(e.message);
    } finally {
      setIsAllPostsLoaded(false);
    }
  };

  return (
    <PostContext.Provider
      value={{
        isAllPostsLoaded,
        isUserPostsLoaded,
        allPosts,
        getAllPostsHandler,
        getUserPosts,
        userPosts,
        postsOfUsersFollowed,
        likeHandler,
        unlikeHandler,
        createPostHandler,
        deletePostHandler,
        editPostHandler,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
