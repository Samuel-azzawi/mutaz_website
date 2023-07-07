import "./Cards.css";
import { CardContent } from "./CardContent";
import CardImage from "./CardImage";
import fitty from "fitty";
import { useEffect } from "react";


function Cards() {
  const cards = CardContent;
  const fit = fitty

  const handleClick = (title) => {
    console.log(`Clicked ${title}`);
  };
  useEffect(() => {
  fit("#my-element", {
    minSize: 8,
    maxSize: 18,
  });
},[])
  

  return (
    <div className="cards_container">
      {cards.map((card, index) => {
        const imageName = `${card.title}`;
        return (
          <button
            key={index}
            className="card"
            onClick={() => handleClick(card.name)}
          >
            <div className="card-image">
              <CardImage imageName={imageName} />
            </div>
            <div className="card-content">
              <p id="my-element" className="text">
                {card.name}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default Cards;
