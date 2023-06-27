import './Cards.css'
function Cards() {
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

  return (
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
  );
}

export default Cards;
