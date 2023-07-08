import { useContext, useEffect, useRef, useState } from "react";
import "./Search.css";
import { CardContent } from "./CardContent";
import useOutsideClick from "./useOutsideClick";
import UserContext from "../UserContext/UserContext";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [storedValue, setStoredValue] = useContext(UserContext)[1];
  const [suggestions, setSuggestions] = useContext(UserContext)[2];
  const suggestionsRef = useRef(null);

  useOutsideClick(suggestionsRef, () => {
    setSuggestions([]);
  });

  const handleSuggestions = (card) => {
    setStoredValue(card.title);
    setSearchValue(card.name);
    setTimeout(() => {
      setSuggestions([]);
    }, 1);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchButtonClick = () => {
    setStoredValue(suggestions);
    setSearchValue("");
  };

  useEffect(() => {
    if (searchValue.length >= 1) {
      const filteredSuggestions = CardContent.filter((card) =>
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
      {suggestions.length > 0 && (
        <ul className="suggestions" ref={suggestionsRef}>
          {suggestions.map((card, index) => (
            <li
              key={index}
              onClick={() => {
                handleSuggestions(card);
              }}
            >
              {card.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
