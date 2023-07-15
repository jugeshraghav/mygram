//react hook imports
import { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

//components and modal imports
import { Navbar } from "../../components/navbar/Navbar";
import "./root.css";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { SecondaryNavbar } from "../../components/navbar/secondaryNavbar/SecondaryNavbar";
import { NewPostModal } from "../../modals/createPost/newPostModal";
import { SearchCardMobile } from "../../components/searchCard/searchCardMobile/searchCardMobile";
import { SearchCardLaptop } from "../../components/searchCard/searchCardLaptop/searchCardLaptop";

//context imports
import { AuthContext } from "../../contexts/auth-context";
import { PostContext } from "../../contexts/post-context";

export const LayoutWithSideBar = () => {
  const { isUserLoggedIn } = useContext(AuthContext);
  const { isAllPostsLoaded } = useContext(PostContext);

  //state variables
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  const [showSearchCardLaptop, setShowSearchCardLaptop] = useState(false);
  const [showSearchCardMobile, setShowSearchCardMobile] = useState(false);

  //component
  return (
    <>
      <NewPostModal
        show={showNewPostModal}
        onClose={() => setShowNewPostModal(false)}
        displayName="New"
      />
      <SearchCardLaptop
        show={showSearchCardLaptop}
        onClose={() => setShowSearchCardLaptop(false)}
      />
      <SearchCardMobile
        show={showSearchCardMobile}
        onClose={() => setShowSearchCardMobile(false)}
        setShowSearchCardMobile={setShowSearchCardMobile}
      />

      <div className="root">
        <div className="primary-navbar">
          <Navbar
            showSearchCardLaptop={showSearchCardLaptop}
            showSearchCardMobile={showSearchCardMobile}
            setShowNewPostModal={setShowNewPostModal}
            setShowSearchCardLaptop={setShowSearchCardLaptop}
            setShowSearchCardMobile={setShowSearchCardMobile}
          />
        </div>

        <div className="main-content-container">
          <>
            <div className="main-content-center">
              <Outlet />
            </div>
            <div className="main-content-sidebar">
              <Sidebar />
            </div>
          </>
        </div>

        <div className="secondary-navbar">
          <SecondaryNavbar setShowNewPostModal={setShowNewPostModal} />
        </div>
      </div>
    </>
  );
};

export const LayoutWithoutSideBar = () => {
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  const [showSearchCardLaptop, setShowSearchCardLaptop] = useState(false);
  const [showSearchCardMobile, setShowSearchCardMobile] = useState(false);

  return (
    <>
      <NewPostModal
        show={showNewPostModal}
        onClose={() => setShowNewPostModal(false)}
        displayName="New"
      />
      <SearchCardLaptop
        show={showSearchCardLaptop}
        onClose={() => setShowSearchCardLaptop(false)}
      />
      <SearchCardMobile
        show={showSearchCardMobile}
        onClose={() => setShowSearchCardMobile(false)}
        setShowSearchCardMobile={setShowSearchCardMobile}
      />
      <div className="root">
        <div className="primary-navbar">
          <Navbar
            showSearchCardLaptop={showSearchCardLaptop}
            showSearchCardMobile={showSearchCardMobile}
            setShowNewPostModal={setShowNewPostModal}
            setShowSearchCardLaptop={setShowSearchCardLaptop}
            setShowSearchCardMobile={setShowSearchCardMobile}
          />
        </div>

        <div className="main-content-container">
          <Outlet />
        </div>

        <div className="secondary-navbar">
          <SecondaryNavbar setShowNewPostModal={setShowNewPostModal} />
        </div>
      </div>
      ;
    </>
  );
};
