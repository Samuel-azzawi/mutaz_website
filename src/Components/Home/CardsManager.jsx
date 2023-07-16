import "./CardsManager.css";
import { FaCaretDown } from "react-icons/fa";
import CardImage from "./CardImage";
import fitty from "fitty";
import { useContext, useEffect, useRef, useState } from "react";
import useOutsideClick from "./useOutsideClick";
import UserContext from "../UserContext/UserContext";
import { useLocation } from "react-router-dom";
import { CardContent } from "./CardContent";

function CardsManager() {
  const [info, setInfo] = useState({});
  const [isHiding, setIsHiding] = useState(false);
  const [cards, setCards] = useContext(UserContext)[3];
  const menuRef = useRef(null);
  const location = useLocation().pathname;

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
    fitty("#my-element", {
      minSize: 12,
      maxSize: 18,
    });
  }, [info]);

  useEffect(() => {
    const url = location.substring(1);
    if (
      location.includes("mac") ||
      location.includes("windows") ||
      location.includes("android")
    ) {
      setCards(CardContent.filter((card) => card.os === url));
    } else {
      setCards(CardContent);
    }
  }, [location, setCards]);

  return (
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
                  <div className={`card-info ${isSelected ? "show" : "hide"}`}>
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
                          <p className="card-info-year">Year: {info.year}</p>
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
  );
}

export default CardsManager;
