//react hook imports
import { useState } from "react";
import { Outlet } from "react-router-dom";

//components and modal imports
import { Navbar } from "../../components/navbar/Navbar";
import "./root.css";
import { SecondaryNavbar } from "../../components/navbar/secondaryNavbar/SecondaryNavbar";
import { NewPostModal } from "../../modals/createPost/newPostModal";
import { SearchCardMobile } from "../../components/searchCard/searchCardMobile/searchCardMobile";
import { SearchCardLaptop } from "../../components/searchCard/searchCardLaptop/searchCardLaptop";

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
