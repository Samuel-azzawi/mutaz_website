import "./Home.css";
import { GrWindows } from "react-icons/gr";
import { AiFillApple, AiFillAndroid, AiOutlineSearch } from "react-icons/ai";
import { HiSquares2X2 } from "react-icons/hi2";
import { FcSearch } from "react-icons/fc";
import { useState, useEffect, useRef } from "react";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const Card = ({ title, content, onClick }) => {
    return (
      <button className="card" onClick={onClick}>
        <h3>{title}</h3>
        <p>{content}</p>
      </button>
    );
  };

  const handleClick = (title) => {
    console.log(`Clicked ${title}`);
    // Add your custom logic here for handling the card click event
  };

  const cards = [
    { title: "Card 1", content: "This is the content of Card 1" },
    { title: "Card 2", content: "This is the content of Card 2" },
    { title: "Card 3", content: "This is the content of Card 3" },
    { title: "Card 1", content: "This is the content of Card 1" },
    { title: "Card 2", content: "This is the content of Card 2" },
    { title: "Card 3", content: "This is the content of Card 3" },
    { title: "Card 1", content: "This is the content of Card 1" },
    { title: "Card 2", content: "This is the content of Card 2" },
    { title: "Card 3", content: "This is the content of Card 3" },
  ];

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="page_container">
      <div className="header">
        <div className="searchBoxContainer">
          <div className="searchBox">
            <input
              className="searchInput"
              type="text"
              name=""
              placeholder="Search"
            />
            <button className="searchButton">
              <i className="material-icons">
                <AiOutlineSearch className="search_logo" />
              </i>
            </button>
          </div>
        </div>
        <div className="menu">
          <button className="menu-toggle" onClick={toggleDropdown}>
            Menu
          </button>
          {isOpen && (
            <div ref={dropdownRef}>
              <div className="menu-items">
                <button className="button-48">
                  <span className="text">
                    <GrWindows className="logo" />
                    <p>Windows</p>
                  </span>
                </button>
                <button className="button-48">
                  <span className="text">
                    <AiFillApple className="logo" />
                    <p>Mac</p>
                  </span>
                </button>
                <button className="button-48">
                  <span className="text">
                    <AiFillAndroid className="logo" />
                    <p>Android</p>
                  </span>
                </button>
                <button className="button-48">
                  <span className="text">
                    <HiSquares2X2 className="logo" />
                    <p>Categories</p>
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className=""></div>
      <div className="cards_container">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            content={card.content}
            onClick={() => handleClick(card.title)}
          />
        ))}
      </div>
    </div>
  );
}
export default Home;
