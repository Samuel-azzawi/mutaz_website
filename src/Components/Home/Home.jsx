import Cards from "./Cards";
import "./Home.css";
import Menu from "./Menu";
import Search from "./Search";
import headerLogo from "../Files/logos/headerLogo.svg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../UserContext/UserContext";
import { CardContent } from "./CardContent";

function Home() {
  const [cards, setCards] = useContext(UserContext)[3];
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/");
    setCards(CardContent)
  };

  return (
    <>
      <div className="header">
        <img
          src={headerLogo}
          alt="img"
          className="headerLogo"
          onClick={handleNavigation}
        />
        <Menu />
      </div>
      <Search />
      <Cards />
    </>
  );
}
export default Home;
