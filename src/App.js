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

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>

        <Route path="/mygram" element={<Root />}>
          <Route path="/mygram/home" element={<Home />} />
          <Route path="/mygram/explore" element={<Explore />} />
          <Route path="/mygram/bookmarks" element={<Bookmarks />} />
          <Route path="/mygram/profile/:username" element={<Profile />} />
          <Route path="/mygram/post/:postId" element={<SinglePost />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
