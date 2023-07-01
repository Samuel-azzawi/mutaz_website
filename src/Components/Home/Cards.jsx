import "./Cards.css";
import CardContentConverter from "./CardContentConverter";
import { CardContent } from "./CardContent";

function Cards() {
  const cards = CardContentConverter(CardContent);

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
    // Add your custom logic here for handling the card click event
  };
  require.context("./logos", false, /\.(png|jpe?g|svg)$/);
  let images = {};

  try {
    const importAll = (r) => {
      r.keys().forEach((item, index) => {
        images[item.replace("./", "")] = r(item);
      });
    };

    importAll(require.context("./logos", false, /\.(png|jpe?g|svg)$/));
  } catch (error) {
    console.error("Error occurred while importing images:", error);
    // Handle the error appropriately (e.g., display a message, fallback image, etc.)
  }

  const getImagePath = (title) => {
    const imageExtensions = [".png", ".jpg", ".jpeg", ".svg"];

    for (let i = 0; i < imageExtensions.length; i++) {
      const currentExtension = imageExtensions[i];
      const imagePath = `${title}${currentExtension}`;

      if (images[imagePath]) {
        return images[imagePath];
      }
    }
    // Image file not found for any extension
    return null;
  };

  return (
    <div className="cards_container">
      {cards.map((card, index) => {
        const imageName = `${card["{title"]}`;
        console.log(imageName);
        return (
          <Card
            key={index}
            content={
              <img src={getImagePath(imageName)} alt="img" className="images" />
            }
            title={card.name}
            onClick={() => handleClick(card.name)}
          />
        );
      })}
    </div>
  );
}

export default Cards;
