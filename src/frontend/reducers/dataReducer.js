export const initial_state = {
  //post
  allPosts: [], ///initially we get all posts
  userPosts: [],
  // postsOfUsersFollowed: [],
  //user
  allUsers: [], ///initially we get all users
  bookmarks: [], ///this array contains the id of posts that are bookmarked.
  foundUsers: [], ///after searching users we get this array filtered from allUsers
  selectedUser: {},
};

export const dataReducer = (state, action) => {
  console.log(state);

  const { type, payLoad } = action;
  console.log(type, payLoad);
  switch (type) {
    //////Post Reducer///////
    case "get_all_posts":
      return { ...state, allPosts: payLoad };
    case "get_all_user_posts":
      return { ...state, userPosts: payLoad };
    case "get_posts_of_users_followed_by_logged_in_user":
      return { ...state, postsOfUsersFollowed: payLoad };
    case "add_new_post":
      return { ...state, allPosts: payLoad };
    case "delete_post":
      return { ...state, allPosts: payLoad };
    case "edit_post":
      return { ...state, allPosts: payLoad };
    case "apply_filter":
      return { ...state, allPosts: payLoad };

    //////User Reducer//////
    case "get_all_users":
      return { ...state, allUsers: payLoad };
    case "set_single_user":
      return { ...state, selectedUser: payLoad };
    case "add_to_bookmarks":
      return { ...state, bookmarks: [...payLoad] };
    case "remove_from_bookmarks":
      return { ...state, bookmarks: [...payLoad] };
    case "like_post":
      return { ...state, allPosts: payLoad };
    case "unlike_post":
      return { ...state, allPosts: payLoad };
    case "update_user_followed_details":
      return {
        ...state,
        allUsers: state.allUsers.map((user) =>
          user._id === payLoad._id ? payLoad : user
        ),
      };
    case "update_followed_by_user_details":
      return {
        ...state,
        allUsers: state.allUsers.map((user) =>
          user._id === payLoad._id ? payLoad : user
        ),
      };

    case "found_users_on_search":
      console.log(payLoad, "from found users case");
      return {
        ...state,
        foundUsers: state.allUsers.filter(
          ({ firstName, lastName, username }) =>
            firstName?.toLowerCase().includes(payLoad?.toLowerCase()) ||
            lastName?.toLowerCase().includes(payLoad?.toLowerCase()) ||
            username?.toLowerCase().includes(payLoad?.toLowerCase())
        ),
      };
    default:
      return state;
  }
};
