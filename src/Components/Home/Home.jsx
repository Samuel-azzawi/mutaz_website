import Cards from "./Cards";
import "./Home.css";
import Menu from "./Menu";
import Search from "./Search";

function Home() {

  return (
    <div className="page_container">
      <div className="header">
        <Search/>
        <Menu/>
      </div>
      <Cards/>
    </div>
  );
}
export default Home;
