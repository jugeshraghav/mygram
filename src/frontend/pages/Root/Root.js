import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";
import "./root.css";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { SecondaryNavbar } from "../../components/navbar/secondaryNavbar/SecondaryNavbar";
import { useContext, CSSProperties, useState } from "react";
import { AuthContext } from "../../contexts/auth-context";
import ClipLoader from "react-spinners/ClipLoader";
import { PostContext } from "../../contexts/post-context";
import { NewPostModal } from "../../modals/createPost/newPostModal";
import { SearchCardMobile } from "../../components/searchCard/searchCardMobile/searchCardMobile";
import { SearchCardLaptop } from "../../components/searchCard/searchCardLaptop/searchCardLaptop";

export const Root = () => {
  const { loading } = useContext(AuthContext);
  const { isLoading } = useContext(PostContext);
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
      />
      {loading ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            // backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ClipLoader
            color="black"
            loading={loading}
            // cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
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
                {isLoading ? (
                  <div
                    style={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      // backgroundColor: "black",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ClipLoader
                      color="black"
                      loading={isLoading}
                      // cssOverride={override}
                      size={50}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  </div>
                ) : (
                  <Outlet />
                )}
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
      )}
    </>
  );
};
