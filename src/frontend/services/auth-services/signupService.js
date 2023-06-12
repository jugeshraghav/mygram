import axios from "axios";

export const signUpService = async (firstName, lastName, password, username) =>
  await axios.post("/api/auth/signup", {
    username,
    password,
    firstName,
    lastName,
  });
