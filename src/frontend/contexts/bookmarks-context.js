import { createContext, useEffect, useReducer, useState } from "react";
import {
  addToBookmarkService,
  allBookmarkService,
  removeFromBookmarkService,
} from "../services/bookmark-services/bookmarkServices";
import { toast } from "react-toastify";
import { dataReducer, initial_state } from "../reducers/dataReducer";

export const BookmarksContext = createContext();
export const BookmarksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initial_state);

  const { bookmarks } = state;

  const getAllBookmarksHandler = async (token) => {
    console.log(token);
    const response = await allBookmarkService(token);
    console.log(response?.data?.bookmarks);
  };
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

  //   useEffect(() => {
  //     getAllBookmarksHandler(token);
  //   });
  return (
    <BookmarksContext.Provider
      value={{ bookmarks, addToBookmarkHandler, removeFromBookmarkHandler }}
    >
      {children}
    </BookmarksContext.Provider>
  );
};
