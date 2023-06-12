import { createContext, useEffect, useState } from "react";
import { allUsersService } from "../services/user-services/userService";
import {
  followService,
  unfollowService,
} from "../services/follow-services/followServices";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState([]);
  const getAllUserHandler = async () => {
    try {
      const response = await allUsersService();
      console.log(response?.data?.users);
      setAllUsers([...response?.data?.users]);
    } catch (e) {
      console.log(e);
    }
  };
  // console.log(allUsers);

  const followHandler = async (folllowUserId, token) => {
    const response = await followService(folllowUserId, token);
    console.log(response);
  };

  const unfollowHandler = async (folllowUserId, token) => {
    const response = await unfollowService(folllowUserId, token);
    console.log(response);
  };
  useEffect(() => {
    getAllUserHandler();
  }, []);
  return (
    <UserContext.Provider value={{ allUsers, followHandler, unfollowHandler }}>
      {children}
    </UserContext.Provider>
  );
};
