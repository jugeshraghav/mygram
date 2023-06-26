import axios from "axios";
export const allUsersService = async () => {
  return await axios.get("/api/users");
};

export const singleUserService = async (userId) => {
  return await axios.get(`/api/users/${userId}`);
};

export const editUserService = async (token, user) => {
  console.log(user, "from edit user services");
  return await axios.post(
    "/api/users/edit",
    { user },
    { headers: { authorization: token } }
  );
};

// export const editUser = async (userData, token) =>
//   await axios.post(
//     "/api/users/edit",
//     {
//       userData,
//     },
//     {
//       headers: {
//         authorization: token,
//       },
//     }
//   );
