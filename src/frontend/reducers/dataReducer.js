export const initial_state = {
  allPosts: [],
  userPosts: [],
  bookmarks: [],
  allUsers: [],
};

export const dataReducer = (state, action) => {
  console.log(state);
  const { type, payLoad } = action;
  console.log(type, payLoad);
  switch (type) {
    case "get_all_posts":
      return { ...state, allPosts: payLoad };
    case "get_all_user_posts":
      return { ...state, userPosts: payLoad };
    case "get_all_users":
      return { ...state, allUsers: payLoad };
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
    case "add_new_post":
      return { ...state, allPosts: payLoad };
    case "delete_post":
      return { ...state, allPosts: payLoad };
    case "edit_post":
      return { ...state, allPosts: payLoad };
    case "apply_filter":
      return { ...state, allPosts: payLoad };
    default:
      return state;
  }
};
