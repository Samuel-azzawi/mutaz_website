import "./Cards.css";
import { FaCaretDown } from "react-icons/fa";
import { CardContent } from "./CardContent";
import CardImage from "./CardImage";
import fitty from "fitty";
import { useContext, useEffect, useRef, useState } from "react";
import useOutsideClick from "./useOutsideClick";
import UserContext from "../UserContext/UserContext";
import { useSearchParams } from "react-router-dom";

function FilterCards() {
  const [info, setInfo] = useState({});
  const [isHiding, setIsHiding] = useState(false);
  const [cards, setCards] = useContext(UserContext)[3];
  const [storedValue] = useContext(UserContext)[1];
  const [search, setSearch] = useContext(UserContext)[4];
  const menuRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");


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
    if (searchQuery) {
      console.log(searchQuery);
      const filteredCards = CardContent.filter((card) =>
        card.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      console.log(filteredCards)
      setCards(filteredCards);
    } else if (Array.isArray(storedValue) && storedValue.length === 1) {
      setCards(storedValue);
      setSearchParams({ query: storedValue[0].name });
    } else {
      setCards(storedValue);
      setSearchParams({ query: search });
    }
  }, [storedValue, search, setCards, setSearchParams]);

  useEffect(() => {
    fitty("#my-element", {
      minSize: 12,
      maxSize: 18,
    });
  }, [info]);

  return (
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
                        className={`card-info ${isSelected ? "show" : "hide"}`}
                      >
                        {isSelected && !isHiding && (
                          <>
                            <div>
                              <FaCaretDown
                                className="card-info-closing-button"
                                onClick={closingCardInfo}
                              />
                              <h1 id="my-element" className="card-info-title">
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
  );
}

export default FilterCards;
