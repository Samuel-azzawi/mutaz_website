import "./Cards.css";
import { CardContent } from "./CardContent";
import CardImage from "./CardImage";
import fitty from "fitty";
import { useEffect, useState } from "react";

function Cards() {
  const [info, setInfo] = useState(null);
  const [isHiding, setIsHiding] = useState(false);
  const cards = CardContent;

  const handleClick = (title) => {
    if (info && info.title === title) {
      setTimeout(() => {
        setInfo(null);
        setIsHiding(false);
      }, 200); // Delay to match the animation duration
    } else setInfo(cards.find((card) => card.title === title));
  };

  useEffect(() => {
    fitty("#my-element", {
      minSize: 12,
      maxSize: 18,
    });
  }, []);

  return (
    <div className="cards_container">
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
              <div className={`card-info ${isSelected ? "show" : "hide"}`}>
                {isSelected && !isHiding && (
                  <>
                    <p>{info.name}</p>
                    <p>{info.v[0]}</p>
                  </>
                )}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default Cards;
