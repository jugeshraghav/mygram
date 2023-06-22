import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";
import "./root.css";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { SecondaryNavbar } from "../../components/navbar/secondaryNavbar/SecondaryNavbar";
export const Root = () => {
  return (
    <>
      <div className="root">
        <div className="primary-navbar">
          <Navbar />
        </div>
        <div className="main-content-container">
          <div className="main-content-center">
            <Outlet />
          </div>
          <div className="main-content-sidebar">
            <Sidebar />
          </div>
        </div>
        <div className="secondary-navbar">
          <SecondaryNavbar />
        </div>
      </div>
    </>
  );
};
