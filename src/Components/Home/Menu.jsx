import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { GrWindows } from "react-icons/gr";
import { MdOutlineOtherHouses } from "react-icons/md";
import "./Menu.css";
import useWindowSize from "./useWindowSize";
import { useState, useRef, useEffect, useContext } from "react";
import useOutsideClick from "./useOutsideClick";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import UserContext from "../UserContext/UserContext";
import { CardContent } from "./CardContent";

function Menu() {
  const [storedValue, setStoredValue] = useContext(UserContext)[1];
  const [cards, setCards] = useContext(UserContext)[3];
  const [os, setOs] = useContext(UserContext)[5];
  const [activeButton, setActiveButton] = useContext(UserContext)[6];
  const [isOpen, setIsOpen] = useState(false);
  const [menuOs, setMenuOs] = useState("");
  const [firstPath, setFirstPath] = useState("");
  const [isBigScreen, setIsBigScreen] = useState(true);
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
    setStoredValue("");
    setCards(CardContent);
    setOs("");
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

  useEffect(() => {
    const handleResize = () => {
      setIsBigScreen(window.innerWidth > 980);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (location.includes("windows")) {
      setActiveButton("windows");
    } else if (location.includes("mac")) {
      setActiveButton("mac");
    } else if (location.includes("android")) {
      setActiveButton("android");
    } else {
      setActiveButton("all");
    }
  }, [location, setActiveButton]);

  return (
    <>
      {isBigScreen ? (
        <div className="big-screen-items">
          <button
            className={`button-48 ${activeButton === "all" ? "active" : ""}`}
            onClick={resetOsButton}
          >
            <span className="text">
              <MdOutlineOtherHouses className="logo" />
              <p>all os</p>
            </span>
          </button>
          <button
            className={`button-48 ${
              activeButton === "windows" ? "active" : ""
            }`}
            onClick={windowsButton}
          >
            <span className="text">
              <GrWindows className="logo" />
              <p>Windows</p>
            </span>
          </button>
          <button
            className={`button-48 ${activeButton === "mac" ? "active" : ""}`}
            onClick={macButton}
          >
            <span className="text">
              <AiFillApple className="logo" />
              <p>Mac</p>
            </span>
          </button>
          <button
            className={`button-48 ${
              activeButton === "android" ? "active" : ""
            }`}
            onClick={androidButton}
          >
            <span className="text">
              <AiFillAndroid className="logo" />
              <p>Android</p>
            </span>
          </button>
        </div>
      ) : (
        <>
          <div
            className={`menu-container ${isOpen ? "open" : "close"}`}
            ref={menuRef}
          >
            <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
              <div className="hamburger-icon" onClick={toggleMenu}>
                <span className="menu-os">{os || "All os"}</span>
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
