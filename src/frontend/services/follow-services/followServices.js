import axios from "axios";

export const followService = async (followUserId, token) => {
  return await axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

export const unfollowService = async (followUserId, token) => {
  return await axios.post(
    `/api/users/unfollow/${followUserId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};
