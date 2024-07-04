import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";
import { useRef, useState, useEffect } from "react";

const Sidebar = ({ handleChange, showSidebar, clicked }) => {
  const boxRef = useRef(null);
  // boxOutsideClick will be true on outside click
  const boxOutsideClick = OutsideClick(boxRef);

  // if boxOutsideClick is true then close the sidebar
  if (boxOutsideClick) {
    clicked(false);
  }

  function OutsideClick(ref) {
    const [isClicked, setIsClicked] = useState();
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsClicked(true);
        } else {
          setIsClicked(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
    return isClicked;
  }

  return (
    <>
      <section className="sidebar" ref={boxRef}>
        <div className="logo-container">
          <h1>🛒</h1>
          {showSidebar && (
            <div className="close-icon" onClick={() => clicked(false)}>
              X
            </div>
          )}
        </div>
        <li>
          <Category handleChange={handleChange} />
          <Price handleChange={handleChange} />
          <Colors handleChange={handleChange} />
        </li>
      </section>
    </>
  );
};

export default Sidebar;
