//react hooks imports
import { createContext, useEffect, useReducer, useState } from "react";

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
import {
  getCommentsServices,
  addPostCommentsServices,
} from "../services/comments-services/commentsServices";

//toast imports
import { toast } from "react-toastify";

//reducer
import { dataReducer, initial_state } from "../reducers/dataReducer";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initial_state);

  /////////////////////////////State Variable////////////////////////
  const { allPosts, userPosts, postsOfUsersFollowed } = state;
  const [isLoading, setIsLoading] = useState(false);

  //////////////////////////handlers//////////////////////////////////
  const getAllPostsHandler = async () => {
    setIsLoading(true);
    try {
      const response = await allPostService();
      const postsArray = response?.data?.posts;
      dispatch({ type: "get_all_posts", payLoad: postsArray });
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  const getUserPosts = async (username) => {
    // setIsLoading(true);
    try {
      const response = await userPostsService(username);
      const userPostsArray = response?.data?.posts;
      dispatch({ type: "get_all_user_posts", payLoad: userPostsArray });
    } catch (e) {
      console.log(e);
    }
  };

  const likeHandler = async (postId, username, token) => {
    try {
      const response = await likeService(postId, token);
      const postsArray = response?.data?.posts;
      dispatch({ type: "like_post", payLoad: postsArray });
      toast.success("Post liked successfully!");
    } catch (e) {
      console.log(e);
    }
  };
  const unlikeHandler = async (postId, username, token) => {
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
    setIsLoading(true);
    try {
      const response = await deletePostService(postId, token);
      const newPostsArr = response?.data?.posts;
      dispatch({ type: "delete_post", payLoad: newPostsArr });
      toast.info("Post successfully deleted.");
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const editPostHandler = async (postId, post, token) => {
    setIsLoading(true);
    try {
      const response = await editPostService(postId, post, token);
      const newPostsArr = response?.data?.posts;
      dispatch({ type: "edit_post", payLoad: newPostsArr });
      toast.info("Post successfully edited.");
    } catch (e) {
      console.log(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const filtersHandler = (currentFilter) => {
    const filteredPosts =
      currentFilter === "Trending"
        ? allPosts.sort((a, b) => b.likes.likeCount - a.likes.likeCount)
        : allPosts.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );

    dispatch({ type: "apply_filter", payLoad: filteredPosts });
  };

  //////Comments Handler//////////////////////////////
  const getAllPostCommentsHandler = async (postId, token) => {
    const response = await getCommentsServices(postId, token);
    console.log(response);
  };

  const postCommentHandler = async (postId, commentData, token) => {
    console.log(postId, commentData, token);
    const response = await addPostCommentsServices(postId, commentData, token);
    console.log(response);
  };

  useEffect(() => {
    getAllPostsHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PostContext.Provider
      value={{
        isLoading,
        allPosts,
        getUserPosts,
        userPosts,
        postsOfUsersFollowed,
        likeHandler,
        unlikeHandler,
        createPostHandler,
        deletePostHandler,
        editPostHandler,
        filtersHandler,
        getAllPostCommentsHandler,
        postCommentHandler,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
