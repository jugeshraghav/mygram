import axios from "axios";

export const getCommentsServices = (postId, token) =>
  axios.get(`/api/comments/${postId}`, {
    headers: {
      authorization: token,
    },
  });

export const addPostCommentsServices = (postId, commentData, token) => {
  console.log(postId, commentData, token);
  return axios.post(
    `/api/comments/add/${postId}`,
    { commentData },
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const editCommentsServices = (postId, commentId, commentData, token) =>
  axios.post(
    `/api/comments/edit/${postId}/${commentId}`,
    { commentData },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const deleteCommentsServices = (postId, commentId, token) =>
  axios.delete(`/api/comments/delete/${postId}/${commentId}`, {
    headers: {
      authorization: token,
    },
  });

export const upvotePostCommentService = (postId, commentId) => {
  axios.get(`/api/comments/upvote/${postId}/${commentId}`);
};

export const downvotePostCommentService = (postId, commentId) => {
  axios.get(`/api/comments/downvote/${postId}/${commentId}`);
};
