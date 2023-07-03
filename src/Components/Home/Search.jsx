import { useEffect, useRef, useState } from "react";
import "./Search.css";
import { CardContent } from "./CardContent";
import useOutsideClick from "./useOutsideClick";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [storedValue, setStoredValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const suggestionsRef = useRef(null);

  useOutsideClick(suggestionsRef, () => {
    setSuggestions([]);
  });

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    handleSearchButtonClick();
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchButtonClick = () => {
    setStoredValue(searchValue);
    setSearchValue("");
    console.log(storedValue);
  };

  useEffect(() => {
    const parseCardContent = (content) => {
      const cardRegex =
        /\{title:(.*?), name:(.*?), year:(.*?), v:(.*?), link:(.*?)\}/g;
      const cards = [];

      let match;
      while ((match = cardRegex.exec(content))) {
        const card = {
          title: match[1],
          name: match[2],
          year: parseInt(match[3]),
          v: match[4],
          link: match[5],
        };
        cards.push(card);
      }

      return cards;
    };

    const parsedCardContent = parseCardContent(CardContent);

    if (searchValue.length >= 1) {
      const filteredSuggestions = parsedCardContent.filter((card) =>
        card.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchValue]);

  return (
    <div className="searchBoxContainer">
      <form className="form-wrapper" onSubmit={handleFormSubmit}>
        <input
          className="search"
          type="text"
          name=""
          placeholder="Search"
          value={searchValue}
          onChange={handleInputChange}
        />
        <button id="submit" onClick={handleSearchButtonClick}>
          GO
        </button>
      </form>
      {/* Render suggestions */}
      {suggestions.length > 0 && (
        <ul className="suggestions" ref={suggestionsRef}>
          {suggestions.map((card) => (
            <li key={card.title}>{card.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
