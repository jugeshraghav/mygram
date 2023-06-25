import { createContext, useEffect, useReducer } from "react";
import {
  allUsersService,
  editUserService,
} from "../services/user-services/userService";
import {
  followService,
  unfollowService,
} from "../services/follow-services/followServices";
import { dataReducer, initial_state } from "../reducers/dataReducer";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  ///////////////////// User Reducer //////////////////////////////////
  const [state, dispatch] = useReducer(dataReducer, initial_state);

  /////////////////// Values from State //////////////////////////////
  const { allUsers, foundUsers } = state;

  ////////////////// Handlers //////////////////////////////////////
  const getAllUserHandler = async () => {
    try {
      const response = await allUsersService();
      const users = response?.data?.users;
      dispatch({ type: "get_all_users", payLoad: users });
    } catch (e) {
      console.log(e);
    }
  };

  const followHandler = async (followUserId, token) => {
    const response = await followService(followUserId, token);
    const userFollowed = response.data.followUser;
    const followedBy = response.data.user;
    dispatch({ type: "update_user_followed_details", payLoad: userFollowed });
    dispatch({ type: "update_followed_by_user_details", payLoad: followedBy });
  };

  const unfollowHandler = async (folllowUserId, token) => {
    const response = await unfollowService(folllowUserId, token);
    const userFollowed = response.data.followUser;
    const followedBy = response.data.user;
    dispatch({ type: "update_user_followed_details", payLoad: userFollowed });
    dispatch({ type: "update_followed_by_user_details", payLoad: followedBy });
  };
  const editUserHandler = async (token, user) => {
    console.log(token, user);
    const response = await editUserService(token, user);
    console.log(response);
  };

  const foundUserHandler = (searchText) => {
    dispatch({ type: "found_users_on_search", payLoad: searchText });
  };
  useEffect(() => {
    getAllUserHandler();
  }, []);
  return (
    <UserContext.Provider
      value={{
        allUsers,
        foundUsers,
        followHandler,
        unfollowHandler,
        editUserHandler,
        foundUserHandler,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
