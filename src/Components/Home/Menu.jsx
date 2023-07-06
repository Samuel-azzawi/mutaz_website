import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { GrWindows } from "react-icons/gr";
import { HiSquares2X2 } from "react-icons/hi2";
import "./Menu.css";
import useWindowSize from "./useWindowSize";
import { useState, useRef, useEffect } from "react";
import useOutsideClick from "./useOutsideClick";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const size = useWindowSize();

  const menuRef = useRef(null);

  const toggleMenu = () => {
    console.log("hi");
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = () => {
    if (size.width < 980 && isOpen) {
      setIsOpen(false);
    }
  };

  useOutsideClick(menuRef, handleOutsideClick);

  return (
    <>
      {size.width > 980 ? (
        <div className="big-screen-items">
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
      ) : (
        <div
          className={`menu-container ${isOpen ? "open" : "close"}`}
          ref={menuRef}
        >
          <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
            <div className="hamburger-icon" onClick={toggleMenu}>
              <span className={`line ${isOpen ? "line1" : ""}`}></span>
              <span className={`line ${isOpen ? "line2" : ""}`}></span>
              <span className={`line ${isOpen ? "line3" : ""}`}></span>
            </div>
            <div className="container">
              <ul className={`menu-items ${isOpen ? "open" : "close"}`}>
                <li className="button-48 windows">
                  <span className="text">
                    <GrWindows className="logo" />
                    <p>Windows</p>
                  </span>
                </li>
                <li className="button-48">
                  <span className="text">
                    <AiFillApple className="logo" />
                    <p>Mac</p>
                  </span>
                </li>
                <li className="button-48">
                  <span className="text">
                    <AiFillAndroid className="logo" />
                    <p>Android</p>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
