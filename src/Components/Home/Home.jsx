import Cards from "./Cards";
import "./Home.css";
import Menu from "./Menu";
import Search from "./Search";
import headerLogo from "../Files/logos/headerLogo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../UserContext/UserContext";
import { CardContent } from "./CardContent";
import FilterCards from "./FilterCards";

function Home() {
  const [cards, setCards] = useContext(UserContext)[3];
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/");
    setCards(CardContent)
  };
  const location = useLocation().pathname;

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
      
      {location === "/" && <Cards />}
      {location === "/search" && <FilterCards />}
    </>
  );
}
export default Home;
