import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { GrWindows } from "react-icons/gr";
import { HiSquares2X2 } from "react-icons/hi2";
import "./Menu.css";
import useOutsideClick from "./useOutsideClick";
import { useRef } from "react";

function Menu() {
  const menuRef = useRef(null);

  const toggleMenu = () => {
    const menuItems = menuRef.current.querySelector(".menu-items");
    menuItems.style.display =
      menuItems.style.display === "block" ? "none" : "block";
  };

  const handleOutsideClick = () => {
    const menuItems = menuRef.current.querySelector(".menu-items");
    menuItems.style.display = "none";
  };

  useOutsideClick(menuRef, handleOutsideClick);

  return (
    <div className="menu" ref={menuRef}>
      <button className="menu-toggle" onClick={toggleMenu}>
        Menu
      </button>
      <div className="menu-items">
        <button className="button-48">
          <span className="text">
            <GrWindows className="logo" />
            <p>Windows</p>
          </span>
        </button>
        <button className="button-48">
          <span className="text">
            <AiFillApple className="logo" />
            <p>Mac</p>
          </span>
        </button>
        <button className="button-48">
          <span className="text">
            <AiFillAndroid className="logo" />
            <p>Android</p>
          </span>
        </button>
        <button className="button-48">
          <span className="text">
            <HiSquares2X2 className="logo" />
            <p>Categories</p>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Menu;
