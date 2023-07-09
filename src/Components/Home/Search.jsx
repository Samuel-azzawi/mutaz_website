import { useContext, useEffect, useRef, useState } from "react";
import "./Search.css";
import "./Home.css";
import { CardContent } from "./CardContent";
import useOutsideClick from "./useOutsideClick";
import UserContext from "../UserContext/UserContext";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [storedValue, setStoredValue] = useContext(UserContext)[1];
  const [suggestions, setSuggestions] = useContext(UserContext)[2];
  const suggestionsRef = useRef(null);
  const inputRef = useRef(null);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      inputRef.current.blur();
    }
  };

  useOutsideClick(suggestionsRef, () => {
    setSuggestions([]);
  });

  const handleSuggestions = (card) => {
    setStoredValue([card]);
    setSearchValue("");
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

  const reset = () => {
    setStoredValue("");
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

  useEffect(() => {
    const suggestionsElement = document.querySelector(".suggestions");
    if(storedValue && searchValue.length > 0 && suggestions.length > 0)suggestionsElement.style.top = "86px"
  }, [storedValue, searchValue, suggestions])
  
  return (
    <div className="searchBoxContainer">
      <form className="form-wrapper" onSubmit={handleFormSubmit}>
        <input
          ref={inputRef}
          onKeyPress={handleKeyPress}
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
      {storedValue && (
        <button className="reset-button button-89" onClick={reset}>
          reset
        </button>
      )}
    </div>
  );
}

export default Search;
