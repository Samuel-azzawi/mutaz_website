import Cards from "./Cards";
import "./Home.css";
import Menua from "./Menua";
import Search from "./Search";
import headerLogo from "./logos/headerLogo.png";

function Home() {
  return (
    <div className="page_container">
      <div className="header">
        <img src={headerLogo} alt="img" className="headerLogo" />
        <Menua />
      </div>
        <Search />
      <Cards />
    </div>
  );
}
export default Home;
