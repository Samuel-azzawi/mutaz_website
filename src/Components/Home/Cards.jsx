import "./Cards.css";
import { CardContent } from "./CardContent";
import CardImage from "./CardImage";
import Card from "./Card";

function Cards() {
  const cards = CardContent;

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
