import axios from "axios";
export const allUsersService = async () => {
  return await axios.get("/api/users");
};

export const userService = async (userId) => {
  return await axios.get(`/api/users/${userId}`);
};

export const editUserService = async (token, user) => {
  return await axios.post(
    "/api/users/edit",
    { user },
    { headers: { authorization: token } }
  );
};
