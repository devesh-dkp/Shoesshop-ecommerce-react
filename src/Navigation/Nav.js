import { FiHeart } from "react-icons/fi";
import {
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
  AiOutlineMenu,
} from "react-icons/ai";
import "./Nav.css";
import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import logo from "./logo.png";
// D:\projects\Ecommerce\public\favicon.ico
const Nav = ({ handleInputChange, query, handleChange }) => {
  const [showSidebar, setShowSidebar] = React.useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => shrinkNavbar(), false);
    return () => {
      window.removeEventListener("scroll", () => shrinkNavbar());
    };
  }, []);

  const shrinkNavbar = () => {
    const nav = document.querySelector("nav");
    nav.style.transition = "0.5s";
    if (window.scrollY > 200) {
      nav.classList.add("shrink");
    } else {
      nav.classList.remove("shrink");
    }
  };
  // write css for the shrink class

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <img
            className="logo-img"
            src={logo}
            alt="logo"
            onClick={() => window.location.reload()}
          />
          <h1 className="logo-text" onClick={() => window.location.reload()}>
            ShoesShop
          </h1>
        </div>
        <div
          className="sidebar-toggle"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          {/* show three dash icon */}
          <AiOutlineMenu className="nav-icons" />
        </div>
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
        <a
          href="https://github.com/devesh-dkp"
          target="_blank"
          rel="noreferrer"
        >
          <FiHeart className="nav-icons" />
        </a>
        <a
          href="https://github.com/devesh-dkp"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a
          href="https://github.com/devesh-dkp"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
