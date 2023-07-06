import React from "react";
import "./Cards.css";
import { CardContent } from "./CardContent";
import CardImage from "./CardImage";

function Cards() {
  const cards = CardContent;

  const Card = ({ title, content, onClick }) => {
    return (
      <button className="card" onClick={onClick}>
        <div className="card-image">{content}</div>
        <p>{title}</p>
      </button>
    );
  };

  const handleClick = (title) => {
    console.log(`Clicked ${title}`);
  };

  return (
    <div className="cards_container">
      {cards.map((card, index) => {
        const imageName = `${card.title}`;
        return (
          <Card
            key={index}
            content={<CardImage imageName={imageName} />}
            title={card.name}
            onClick={() => handleClick(card.name)}
          />
        );
      })}
    </div>
  );
}

export default Cards;
