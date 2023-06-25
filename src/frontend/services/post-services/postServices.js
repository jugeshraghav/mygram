import axios from "axios";

export const allPostService = async () => {
  return await axios.get("/api/posts");
};

export const singlePostService = async (postId) => {
  return await axios.get(`/api/posts/${postId}`);
};

export const userPostsService = async (username) => {
  return await axios.get(`/api/posts/user/${username}`);
};

/*****Private Post Routes**********/
export const createPostService = async (post, token) => {
  return await axios.post(
    "/api/posts",
    { postData: post },
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const deletePostService = async (postId, token) => {
  return await axios.delete(`/api/posts/${postId}`, {
    headers: {
      authorization: token,
    },
  });
};

export const editPostService = async (postId, post, token) => {
  return await axios.post(
    `/api/posts/edit/${postId}`,
    {
      postData: post,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );
};
