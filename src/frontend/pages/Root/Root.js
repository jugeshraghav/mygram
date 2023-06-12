import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";
import "./root.css";
import { Sidebar } from "../../components/sidebar/Sidebar";
export const Root = () => {
  return (
    <>
      <div className="root">
        <Navbar />
        <Outlet />
        <Sidebar />
      </div>
    </>
  );
};
