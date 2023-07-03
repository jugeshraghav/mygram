import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";
import "./root.css";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { SecondaryNavbar } from "../../components/navbar/secondaryNavbar/SecondaryNavbar";
import { useContext, CSSProperties } from "react";
import { AuthContext } from "../../contexts/auth-context";
import ClipLoader from "react-spinners/ClipLoader";
import { PostContext } from "../../contexts/post-context";

export const Root = () => {
  const { loading } = useContext(AuthContext);
  const { isLoading } = useContext(PostContext);
  return (
    <>
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
            <Navbar />
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
            <SecondaryNavbar />
          </div>
        </div>
      )}
    </>
  );
};
