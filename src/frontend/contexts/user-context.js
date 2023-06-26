import { createContext, useContext, useEffect, useReducer } from "react";
import {
  allUsersService,
  editUserService,
  singleUserService,
} from "../services/user-services/userService";
import {
  followService,
  unfollowService,
} from "../services/follow-services/followServices";
import { dataReducer, initial_state } from "../reducers/dataReducer";
import { AuthContext, PostContext } from "../../index";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const { allPosts } = useContext(PostContext);
  const { setLoggedInUserDetails } = useContext(AuthContext);
  ///////////////////// User Reducer //////////////////////////////////
  const [state, dispatch] = useReducer(dataReducer, initial_state);

  /////////////////// Values from State //////////////////////////////
  const { allUsers, selectedUser, foundUsers } = state;

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

  const getSingleUserHandler = async (userId) => {
    try {
      const response = await singleUserService(userId);
      const singleUserData = response?.data?.user;
      dispatch({ type: "set_single_user", payLoad: singleUserData });
    } catch (e) {
      console.log(e);
    }
  };

  const followHandler = async (followUserId, token) => {
    const response = await followService(followUserId, token);
    const userFollowed = response.data.followUser;
    const followedBy = response.data.user;
    setLoggedInUserDetails(followedBy);
    dispatch({ type: "update_user_followed_details", payLoad: userFollowed });
    dispatch({ type: "update_followed_by_user_details", payLoad: followedBy });
  };

  const unfollowHandler = async (folllowUserId, token) => {
    const response = await unfollowService(folllowUserId, token);
    const userFollowed = response.data.followUser;
    const followedBy = response.data.user;
    setLoggedInUserDetails(followedBy);
    dispatch({ type: "update_user_followed_details", payLoad: userFollowed });
    dispatch({ type: "update_followed_by_user_details", payLoad: followedBy });
  };

  console.log(allUsers, "all users from user-context");

  const editUserHandler = async (token, user) => {
    // console.log(user, "from edit user handler");
    const response = await editUserService(token, user);
    const updatedUserDetails = response?.data?.user;
    // console.log(updatedUserDetails);
    setLoggedInUserDetails(updatedUserDetails);
    dispatch({ type: "edit_user", payLoad: updatedUserDetails });
  };

  const foundUserHandler = (searchText) => {
    dispatch({ type: "found_users_on_search", payLoad: searchText });
  };
  useEffect(() => {
    getAllUserHandler();
  }, [dispatch]);
  return (
    <UserContext.Provider
      value={{
        allUsers,
        selectedUser,
        foundUsers,
        followHandler,
        unfollowHandler,
        editUserHandler,
        foundUserHandler,
        getSingleUserHandler,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
