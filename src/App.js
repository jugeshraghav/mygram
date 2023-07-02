import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Signup } from "./frontend/pages/user/Signup";
import { Login } from "./frontend/pages/user/Login";
import { Home } from "./frontend/pages/home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Root } from "./frontend/pages/Root/Root";
import { Profile } from "./frontend/pages/profile/Profile";
import { Explore } from "./frontend/pages/explore/Explore";
import { Bookmarks } from "./frontend/pages/bookmarks/Bookmarks";
import { SinglePost } from "./frontend/pages/singlePost/SinglePost";
import { RequiresAuth } from "./frontend/auth/RequiresAuth";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>

        <Route
          path="/mygram"
          element={
            <RequiresAuth>
              <Root />
            </RequiresAuth>
          }
        >
          <Route
            path="/mygram/home"
            element={
              <RequiresAuth>
                <Home />
              </RequiresAuth>
            }
          />
          <Route
            path="/mygram/explore"
            element={
              <RequiresAuth>
                <Explore />
              </RequiresAuth>
            }
          />
          <Route
            path="/mygram/bookmarks"
            element={
              <RequiresAuth>
                <Bookmarks />
              </RequiresAuth>
            }
          />
          <Route
            path="/mygram/profile/:username"
            element={
              <RequiresAuth>
                <Profile />
              </RequiresAuth>
            }
          />
          <Route
            path="/mygram/post/:postId"
            element={
              <RequiresAuth>
                <SinglePost />
              </RequiresAuth>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
