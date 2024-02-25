import React, { useState } from "react";
import "./Sidebar.css";
import Home from "../Home/Home";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
const Sidebar = () => {
  const [expandSidebar, setExpandSidebar] = useState(true);
  const handleExpandClick = () => {
    setExpandSidebar((expandSidebar) => !expandSidebar);
  };
  return (
    <div className="sidebar-section container-fluid">
      <div className={expandSidebar ? "sidebar sidebar-expand" : "sidebar"}>
        <div className="icon-for-sidebar-expand-and-collapse">
          <p onClick={handleExpandClick}>
            {expandSidebar ? (
              <BsChevronLeft size={30} />
            ) : (
              <BsChevronRight size={30} />
            )}
          </p>
        </div>
      </div>
      <div className="container">
        <p>
          <Home />
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
