import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { GrWindows } from "react-icons/gr";
import { MdOutlineOtherHouses } from "react-icons/md";
import "./Menu.css";
import useWindowSize from "./useWindowSize";
import { useState, useRef, useEffect } from "react";
import useOutsideClick from "./useOutsideClick";
import { useLocation, useNavigate } from "react-router-dom";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOs, setMenuOs] = useState("");
  const [firstPath, setFirstPath] = useState("");
  const size = useWindowSize();
  const location = useLocation().pathname;
  const extractFirstPath = require("./extractFirstPath");

  const menuRef = useRef(null);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = () => {
    if (size.width < 980 && isOpen) {
      setIsOpen(false);
    }
  };

  useOutsideClick(menuRef, handleOutsideClick);

  const windowsButton = () => {
    navigate("/windows");
  };
  const macButton = () => {
    navigate("/mac");
  };
  const androidButton = () => {
    navigate("/android");
  };
  const resetOsButton = () => {
    navigate("/");
  };

  useEffect(() => {
    setFirstPath(extractFirstPath(location));
    if (
      location.includes("mac") ||
      location.includes("windows") ||
      location.includes("android")
    ) {
      setMenuOs(firstPath);
    }
  }, [extractFirstPath, firstPath, location]);

  return (
    <>
      {size.width > 980 ? (
        <div className="big-screen-items">
          <button className="button-48" onClick={resetOsButton}>
            <span className="text">
              <MdOutlineOtherHouses className="logo" />
              <p>all os</p>
            </span>
          </button>
          <button className="button-48" onClick={windowsButton}>
            <span className="text">
              <GrWindows className="logo" />
              <p>Windows</p>
            </span>
          </button>
          <button className="button-48" onClick={macButton}>
            <span className="text">
              <AiFillApple className="logo" />
              <p>Mac</p>
            </span>
          </button>
          <button className="button-48" onClick={androidButton}>
            <span className="text">
              <AiFillAndroid className="logo" />
              <p>Android</p>
            </span>
          </button>
        </div>
      ) : (
        <>
          {menuOs && <div className="os_header">{firstPath}</div>}

          <div
            className={`menu-container ${isOpen ? "open" : "close"}`}
            ref={menuRef}
          >
            <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
              <div className="hamburger-icon" onClick={toggleMenu}>
                <span className="menu-os">OS filter</span>
                <span className={`line ${isOpen ? "line1" : ""}`}></span>
                <span className={`line ${isOpen ? "line2" : ""}`}></span>
                <span className={`line ${isOpen ? "line3" : ""}`}></span>
              </div>
              <div className="container">
                <ul className={`menu-items ${isOpen ? "open" : "close"}`}>
                  <li className="button-48 windows" onClick={resetOsButton}>
                    <span className="text">
                      <MdOutlineOtherHouses className="logo" />
                      <p>all os</p>
                    </span>
                  </li>
                  <li className="button-48 windows" onClick={windowsButton}>
                    <span className="text">
                      <GrWindows className="logo" />
                      <p>Windows</p>
                    </span>
                  </li>
                  <li className="button-48" onClick={macButton}>
                    <span className="text">
                      <AiFillApple className="logo" />
                      <p>Mac</p>
                    </span>
                  </li>
                  <li className="button-48" onClick={androidButton}>
                    <span className="text">
                      <AiFillAndroid className="logo" />
                      <p>Android</p>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Menu;
