import "./FilterCards.css";
import { FaCaretDown } from "react-icons/fa";
import { CardContent } from "./CardContent";
import CardImage from "./CardImage";
import fitty from "fitty";
import { useContext, useEffect, useRef, useState } from "react";
import useOutsideClick from "./useOutsideClick";
import UserContext from "../UserContext/UserContext";
import { useLocation, useSearchParams } from "react-router-dom";
import Header from "./Header";
import Search from "./Search";

function FilterCards() {
  const [info, setInfo] = useState({});
  const [isHiding, setIsHiding] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useContext(UserContext)[3];
  const [storedValue, setStoredValue] = useContext(UserContext)[1];
  const [search, setSearch] = useContext(UserContext)[4];
  const menuRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");
  const location = useLocation().pathname;
  const extractFirstPath = require("./extractFirstPath");

  const handleClick = (title) => {
    if (info.title !== title) {
      setInfo(cards.find((card) => card.title === title));
    }
  };

  const downloadButton = (link) => {
    window.open(link, "_blank");
  };

  const closingCardInfo = () => {
    setInfo({});
    setTimeout(() => {
      setIsHiding(false);
    }, 100);
  };

  const handleOutsideClick = () => {
    setInfo({});
    setTimeout(() => {
      setIsHiding(false);
    }, 100);
  };
  useOutsideClick(menuRef, handleOutsideClick);

  useEffect(() => {
    setLoading(true);
    if (storedValue.length === 1) {
      console.log(storedValue)
      setSearchParams({ query: storedValue[0].name });
    } else if (search) {
      setSearchParams({ query: search });
      setSearch("");
    }
    setLoading(false);
  }, [search, setSearchParams, setSearch, setStoredValue, storedValue]);

  useEffect(() => {
    setLoading(true);
    setCards(CardContent);
    let newcards = null;
    if (
      location.includes("mac") ||
      location.includes("windows") ||
      location.includes("android")
    ) {
      const firstPath = extractFirstPath(location);
      const filteredCards = CardContent.filter((card) => card.os === firstPath);
      setCards(filteredCards);
      newcards = filteredCards;
    }
    if (searchQuery) {
      if (newcards) {
        const filteredCards = newcards.filter((card) =>
          card.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setCards(filteredCards);
      } else {
        const filteredCards = CardContent.filter((card) =>
          card.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setCards(filteredCards);
      }
    }
    setLoading(false);
  }, [setCards, searchQuery, location, extractFirstPath]);

  useEffect(() => {
    if(!loading){
    fitty("#my-element", {
      minSize: 12,
      maxSize: 18,
    });}
  }, [info, loading]);

  return (
    <>
      <Header />
      <Search />
      {loading ? (
        <div className="no-match-found">
          <h1>Loading...</h1>
        </div>
      ) : (
        <>
          {cards.length === 0 && (
            <div className="no-match-found">
              <h1>no match found</h1>
            </div>
          )}
          {cards.length > 0 && (
            <div className="cards_container" ref={menuRef}>
              <>
                {cards.map((card, index) => {
                  const imageName = `${card.title}`;
                  const isSelected = info && info.title === card.title;
                  return (
                    <button
                      key={index}
                      className={`card ${isSelected ? "selected" : ""}`}
                      onClick={() => handleClick(card.title)}
                    >
                      <div className="card-image">
                        <CardImage imageName={imageName} />
                      </div>
                      <div className="card-content">
                        <p id="my-element" className="text">
                          {card.name}
                        </p>
                        <div className="card-info-container">
                          <div
                            className={`card-info ${
                              isSelected ? "show" : "hide"
                            }`}
                          >
                            {isSelected && !isHiding && (
                              <>
                                <div>
                                  <FaCaretDown
                                    className="card-info-closing-button"
                                    onClick={closingCardInfo}
                                  />
                                  <h1
                                    id="my-element"
                                    className="card-info-title"
                                  >
                                    {info.name}
                                  </h1>
                                </div>
                                <div className="card-info-text">
                                  <p className="card-info-version">
                                    Version: {info.v[0]}
                                  </p>
                                  <p className="card-info-year">
                                    Year: {info.year}
                                  </p>
                                </div>
                                <div
                                  onClick={() => downloadButton(info.link[0])}
                                  className="downloadButton"
                                >
                                  download now!
                                </div>
                                <div
                                  onClick={() => downloadButton(info.link[0])}
                                  className="otherVersionsButton"
                                >
                                  other versions
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default FilterCards;
