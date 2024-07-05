import { AiOutlineMenu } from "react-icons/ai";
import "./Nav.css";
import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import logo from "./logo.png";
import CartWidget from "../CartWidget/CartWidget";
import Recommended from "../Recommended/Recommended";
import useLocalStorageState from "use-local-storage-state";
import { useLocation } from "react-router-dom";

const Nav = ({ handleInputChange, query, handleChange, handleClick }) => {
  const [showSidebar, setShowSidebar] = React.useState(false);
  const [cart] = useLocalStorageState("cart", {});
  const location = useLocation();

  useEffect(() => {
    const shrinkNavbarandSearch = () => {
      const nav = document.querySelector("nav");
      if (location.pathname === "/cart") {
        nav.classList.add("shrinkSearch");
      } else {
        nav.classList.remove("shrinkSearch");
      }
    };
    shrinkNavbarandSearch();
  }, [location.pathname]); // Add location.pathname to the dependency array

  const productsCount = cart ? Object.keys(cart).length : 0;
  useEffect(() => {
    const shrinkNavbar = () => {
      const nav = document.querySelector("nav");
      nav.style.transition = "0.5s";
      if (window.scrollY > 200) {
        nav.classList.add("shrink");
      } else {
        nav.classList.remove("shrink");
      }
    };

    window.addEventListener("scroll", shrinkNavbar);
    return () => {
      window.removeEventListener("scroll", shrinkNavbar);
    };
  }, []);

  return (
    <nav>
      <div className="nav-top">
        <div className="logo-box">
          <img
            className="logo-img"
            src={logo}
            alt="logo"
            onClick={() => window.location.assign("/")}
          />

          <h1 className="logo-text" onClick={() => window.location.assign("/")}>
            ShoesShop
          </h1>
        </div>
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            onChange={handleInputChange}
            value={query}
            placeholder="Search for products"
          />
          <div className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </div>
        </div>

        <CartWidget productsCount={productsCount} />
      </div>
      <hr className="nav-line" />
      <div className="nav-bottom">
        <div
          className="sidebar-toggle"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <AiOutlineMenu className="nav-icons" />
        </div>
        <Recommended handleClick={handleClick} />
      </div>
      <hr className="nav-line" />
      {showSidebar && (
        <Sidebar
          handleChange={handleChange}
          showSidebar={showSidebar}
          clicked={setShowSidebar}
        />
      )}
    </nav>
  );
};

export default Nav;
