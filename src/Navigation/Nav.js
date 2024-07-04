import { FiHeart } from "react-icons/fi";
import {
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
  AiOutlineMenu,
} from "react-icons/ai";
import "./Nav.css";
import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const Nav = ({ handleInputChange, query, handleChange }) => {
  const [showSidebar, setShowSidebar] = React.useState(false);
  return (
    <nav>
      <div
        className="sidebar-toggle"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {/* show three dash icon */}
        <AiOutlineMenu className="nav-icons" />
      </div>
      {showSidebar && (
        <Sidebar
          handleChange={handleChange}
          showSidebar={showSidebar}
          clicked={setShowSidebar}
        />
      )}
      <input
        className="search-input"
        type="text"
        onChange={handleInputChange}
        value={query}
        placeholder="Enter your search shoes."
      />
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
