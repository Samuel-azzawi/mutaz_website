import Cards from "./Cards";
import "./Home.css";
import Menu from "./Menu";
import Search from "./Search";
import headerLogo from "../Files/logos/headerLogo.svg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleNavigation = () => {
    console.log("hi")
    navigate("/");
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
