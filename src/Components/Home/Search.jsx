import { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./Search.css";
import useOutsideClick from "./useOutsideClick";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [storedValue, setStoredValue] = useState("");
  const searchInputRef = useRef(null);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleOutsideClick = () => {
    setSearchValue("");
  };

  const handleSearchButtonClick = () => {
    setStoredValue(searchValue);
    setSearchValue("");
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setStoredValue(searchInputRef.current.value);
      setSearchValue("");
    }
  };

  useOutsideClick(searchInputRef, handleOutsideClick);

  useEffect(() => {
    searchInputRef.current.addEventListener("keydown", handleEnterKey);

    return () => {
      searchInputRef.current.removeEventListener("keydown", handleEnterKey);
    };
  }, []);

  return (
    <div className="searchBoxContainer">
      <div className="searchBox">
        <input
          className="searchInput"
          type="text"
          name=""
          placeholder="Search"
          value={searchValue}
          onChange={handleInputChange}
          ref={searchInputRef}
        />
        <button className="searchButton" onClick={handleSearchButtonClick}>
          <i className="material-icons">
            <AiOutlineSearch className="search_logo" />
          </i>
        </button>
      </div>
    </div>
  );
}

export default Search;
