import { useContext, useEffect, useRef, useState } from "react";
import "./Search.css";
import "./Home.css";
import { CardContent } from "./CardContent";
import useOutsideClick from "./useOutsideClick";
import UserContext from "../UserContext/UserContext";
import { useNavigate } from "react-router";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [storedValue, setStoredValue] = useContext(UserContext)[1];
  const [suggestions, setSuggestions] = useContext(UserContext)[2];
  const suggestionsRef = useRef(null);
  const inputRef = useRef(null);

  const navigate = useNavigate();
  const url = window.location.href;

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
    navigate("/search");
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
    if (searchValue) {
      setStoredValue(suggestions);
      setSearchValue("");
      navigate("/search");
    }
  };

  const reset = () => {
    setStoredValue("");
    if (url.includes("/search")) {
      navigate("/");
    }
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
    const handleBeforeUnload = () => {
      localStorage.setItem("shouldNavigateToHome", "true");
    };

    const handleLoad = () => {
      const shouldNavigate = localStorage.getItem("shouldNavigateToHome");

      if (shouldNavigate) {
        localStorage.removeItem("shouldNavigateToHome");
        navigate("/");
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("load", handleLoad);
    };
  }, [navigate]);

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
      {storedValue && url.includes("/search") && (
        <button className="reset-button button-89" onClick={reset}>
          reset search
        </button>
      )}
    </div>
  );
}

export default Search;
