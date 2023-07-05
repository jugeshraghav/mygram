//react hooks imports
import { createContext, useReducer } from "react";

//services imports
import {
  addToBookmarkService,
  removeFromBookmarkService,
} from "../services/bookmark-services/bookmarkServices";
//toast import
import { toast } from "react-toastify";
//reducer
import { dataReducer, initial_state } from "../reducers/dataReducer";

export const BookmarksContext = createContext();

export const BookmarksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initial_state);

  const { bookmarks } = state;

  ///////////////////////////////Handlers//////////////////////////////////
  // const getAllBookmarksHandler = async (token) => {
  //   console.log(token);
  //   const response = await allBookmarkService(token);
  //   console.log(response?.data?.bookmarks);
  // };
  const addToBookmarkHandler = async (postId, token) => {
    const response = await addToBookmarkService(postId, token);
    const bookmarks = response?.data?.bookmarks;
    dispatch({ type: "add_to_bookmarks", payLoad: bookmarks });
    toast.success("post added to bookmarks!");
  };

  const removeFromBookmarkHandler = async (postId, token) => {
    const response = await removeFromBookmarkService(postId, token);
    const bookmarks = response?.data?.bookmarks;
    dispatch({ type: "remove_from_bookmarks", payLoad: bookmarks });
    toast.info("post removed from bookmarks!");
  };

  return (
    <BookmarksContext.Provider
      value={{ bookmarks, addToBookmarkHandler, removeFromBookmarkHandler }}
    >
      {children}
    </BookmarksContext.Provider>
  );
};
