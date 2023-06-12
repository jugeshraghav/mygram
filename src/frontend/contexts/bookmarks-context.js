import { createContext, useEffect, useState } from "react";
import {
  addToBookmarkService,
  allBookmarkService,
  removeFromBookmarkService,
} from "../services/bookmark-services/bookmarkServices";
import { toast } from "react-toastify";

export const BookmarksContext = createContext();
export const BookmarksProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);
  //   const token = localStorage.getItem("token");

  const getAllBookmarksHandler = async (token) => {
    console.log(token);
    const response = await allBookmarkService(token);
    console.log(response?.data?.bookmarks);
  };
  const addToBookmarkHandler = async (postId, token) => {
    const response = await addToBookmarkService(postId, token);
    setBookmarks([...response?.data?.bookmarks]);
    // getAllBookmarksHandler(token);
    toast.success("post added to bookmarks!");
  };
  const removeFromBookmarkHandler = async (postId, token) => {
    const response = await removeFromBookmarkService(postId, token);
    setBookmarks([...response?.data?.bookmarks]);
    // getAllBookmarksHandler(token);
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
