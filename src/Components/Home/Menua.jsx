import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { GrWindows } from "react-icons/gr";
import { HiSquares2X2 } from "react-icons/hi2";
import "./Menua.css";
import useWindowSize from "./useWindowSize";
import { useState } from "react";

function Menua() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const size = useWindowSize();

  return (
    <div>
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
          className={`hamburger-menu ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="hamburger-icon">
            <span className={`line ${isOpen ? "line1" : ""}`}></span>
            <span className={`line ${isOpen ? "line2" : ""}`}></span>
            <span className={`line ${isOpen ? "line3" : ""}`}></span>
          </div>
          <ul className={`menu-items ${isOpen ? "open" : ""}`}>
            <li className="button-48">
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
            <li className="button-48">
              <span className="text">
                <HiSquares2X2 className="logo" />
                <p>Categories</p>
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Menua;
