import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, AuthContext } from "./frontend/contexts/auth-context";
import { PostProvider, PostContext } from "./frontend/contexts/post-context";
import { UserProvider, UserContext } from "./frontend/contexts/user-context";
import {
  BookmarksProvider,
  BookmarksContext,
} from "./frontend/contexts/bookmarks-context";

export { AuthContext, PostContext, UserContext, BookmarksContext };
// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <BookmarksProvider>
        <PostProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </PostProvider>
      </BookmarksProvider>
    </AuthProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
