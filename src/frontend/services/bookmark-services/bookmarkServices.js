import axios from "axios";

export const addToBookmarkService = async (postId, token) => {
  return await axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

export const removeFromBookmarkService = async (postId, token) => {
  return await axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

export const allBookmarkService = async (token) => {
  return await axios.get(
    `/api/users/bookmark/`,
    {},
    {
      headers: { authorization: token },
    }
  );
};
