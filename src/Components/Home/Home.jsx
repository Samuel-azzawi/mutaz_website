import Cards from "./Cards";
import "./Home.css";
import Menu from "./Menu";
import Search from "./Search";
import headerLogo from "../Files/logos/headerLogo.svg";

function Home() {
  return (
    <>
      <div className="header">
        <img src={headerLogo} alt="img" className="headerLogo" />
        <Menu />
      </div>
      <Search />
      <Cards />
    </>
  );
}
export default Home;
