import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { GrWindows } from "react-icons/gr";
import "./Menu.css";
import { useState } from "react";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <button onClick={toggleMenu}>menu</button>
      <ul className={isOpen ? "open" : "closed"}>
        <li>
          <GrWindows className="icon" />
          <span className="icon-text">windows</span>
        </li>
        <li>
          <AiFillApple className="icon" />
          <span className="icon-text">mac</span>
        </li>
        <li>
          <AiFillAndroid className="icon" />
          <span className="icon-text">android</span>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
