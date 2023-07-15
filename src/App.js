import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Signup } from "./frontend/pages/user/Signup";
import { Login } from "./frontend/pages/user/Login";
import { Home } from "./frontend/pages/home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  LayoutWithSideBar,
  LayoutWithoutSideBar,
} from "./frontend/pages/Root/Root";
import { Profile } from "./frontend/pages/profile/Profile";
import { Explore } from "./frontend/pages/explore/Explore";
import { SinglePost } from "./frontend/pages/singlePost/SinglePost";
import { RequiresAuth } from "./frontend/auth/RequiresAuth";
import { PostCard } from "./frontend/components/postCard/PostCard";

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={500} />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>

        {/* <Route
          element={
            <RequiresAuth>
              <LayoutWithSideBar />
            </RequiresAuth>
          }
        >
          <Route
            path="/home"
            element={
              <RequiresAuth>
                <Home />
              </RequiresAuth>
            }
          />
        </Route> */}
        <Route
          element={
            <RequiresAuth>
              <LayoutWithoutSideBar />
            </RequiresAuth>
          }
        >
          <Route
            path="/home"
            element={
              <RequiresAuth>
                <Home />
              </RequiresAuth>
            }
          />
          <Route
            path="/explore"
            element={
              <RequiresAuth>
                <Explore />
              </RequiresAuth>
            }
          />
          <Route
            path="/bookmarks"
            element={
              <RequiresAuth>
                <Profile />
              </RequiresAuth>
            }
          />
          <Route
            path="/profile/:username"
            element={
              <RequiresAuth>
                <Profile />
              </RequiresAuth>
            }
          />
          <Route
            path="/comments/:postId"
            element={
              <RequiresAuth>
                <SinglePost />
              </RequiresAuth>
            }
          />
          <Route
            path="/post/:pId"
            element={
              <RequiresAuth>
                <PostCard />
              </RequiresAuth>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
