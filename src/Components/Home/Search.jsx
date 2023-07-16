import { useContext, useEffect, useRef, useState } from "react";
import "./Search.css";
import "./Home.css";
import { CardContent } from "./CardContent";
import useOutsideClick from "./useOutsideClick";
import UserContext from "../UserContext/UserContext";
import { useLocation, useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [storedValue, setStoredValue] = useContext(UserContext)[1];
  const [suggestions, setSuggestions] = useContext(UserContext)[2];
  const [cards, setCards] = useContext(UserContext)[3];
  const [search, setSearch] = useContext(UserContext)[4];
  const [searchParams] = useSearchParams();
  const suggestionsRef = useRef(null);
  const inputRef = useRef(null);
  const searchQuery = searchParams.get("query");
  const location = useLocation().pathname;
  const [os, setOs] = useState("");

  const navigate = useNavigate();

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
      if (!location.includes("search")) {
        os ? navigate(`${location}/search`) : navigate("/search");
      }
    }, 1);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchButtonClick = (event) => {
    event.preventDefault();
    if (searchValue) {
      if (!location.includes("search")) {
        os ? navigate(`${location}/search`) : navigate("/search");
      }
      setStoredValue(suggestions);
      setSearch(searchValue);
      setSearchValue("");
    }
  };

  const reset = () => {
    setCards(CardContent);
    setStoredValue("");
    navigate("/");
  };
  //check if path includes os
  useEffect(() => {
    if (location.includes("mac")) {
      setOs("mac");
    }

    if (location.includes("windows")) {
      setOs("windows");
    }

    if (location.includes("android")) {
      setOs("android");
    }
  }, [setOs, location]);

  //filter suggestions
  useEffect(() => {
    if (os) {
      if (searchValue.length > 0) {
        const filteredSuggestions = CardContent.filter(
          (card) =>
            card.name.toLowerCase().includes(searchValue.toLowerCase()) &&
            card.os === os
        );
        setSuggestions(filteredSuggestions);
      } else {
        setSuggestions([]);
      }
    } else {
      if (searchValue.length > 0) {
        const filteredSuggestions = CardContent.filter((card) =>
          card.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
      } else {
        setSuggestions([]);
      }
    }
  }, [searchValue, os, setSuggestions]);

  useEffect(() => {
    const suggestionsElement = document.querySelector(".suggestions");
    if (storedValue && searchValue.length > 0 && suggestions.length > 0)
      suggestionsElement.style.top = "86px";
  }, [storedValue, searchValue, suggestions]);

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
        <div className="search-button">
          <button id="submit" onClick={handleSearchButtonClick}>
            GO
          </button>
        </div>
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
      {searchQuery && (
        <button className="reset-button button-89" onClick={reset}>
          reset search
        </button>
      )}
    </div>
  );
}

export default Search;
