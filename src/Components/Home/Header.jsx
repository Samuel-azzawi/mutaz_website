import Menu from "./Menu";
import "./Home.css";
import headerLogo from "../Files/logos/headerLogo.svg";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import UserContext from "../UserContext/UserContext";
import { CardContent } from "./CardContent";

function Header() {
  const [cards, setCards] = useContext(UserContext)[3];
  const [os, setOs] = useContext(UserContext)[5];
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/");
    setOs("")
    setCards(CardContent);
  };

  return (
    <div className="header">
      <img
        src={headerLogo}
        alt="img"
        className="headerLogo"
        onClick={handleNavigation}
      />
      <Menu />
    </div>
  );
}
export default Header;
