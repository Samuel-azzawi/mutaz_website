const CardContentConverter = (content) => {
  const startIndex = content.indexOf("[");
  const endIndex = content.lastIndexOf("]");
  const cardsString = content.slice(startIndex + 1, endIndex).trim();

  const regex = /{([^}]+)}/g;
  const matches = cardsString.match(regex);

  if (!matches) {
    return [];
  }

  const cards = matches.map((match) => {
    const cardString = match.replace(/\s/g, "");

    const keyValuePairs = cardString.split(",");

    const cardObject = {};
    keyValuePairs.forEach((pair) => {
      const [key, value] = pair.split(":");
      const trimmedKey = key.trim();
      let trimmedValue = value.trim();

      // Check if the key is 'link'
      if (trimmedKey === "link") {
        // Remove the 'link:' prefix
        const linkValue = pair.substring(pair.indexOf(":") + 1).trim();
        // Replace the escaped double quotes
        trimmedValue = linkValue.replace(/\\"/g, '"');
      }

      cardObject[trimmedKey] = trimmedValue;
    });

    return cardObject;
  });

  return cards;
};

export default CardContentConverter;
