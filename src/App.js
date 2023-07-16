import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import UserContext from "./Components/UserContext/UserContext";
import Home from "./Components/Home/Home";
import { CardContent } from "./Components/Home/CardContent";

function App() {
  const [language, setLanguage] = useState("عربي");
  const [storedValue, setStoredValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [cards, setCards] = useState(CardContent);
  const [search, setSearch] = useState("");

  return (
    <UserContext.Provider
      value={[
        [language, setLanguage],
        [storedValue, setStoredValue],
        [suggestions, setSuggestions],
        [cards, setCards],
        [search, setSearch],
      ]}
    >
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
      <footer>Copyright &copy; REPAIR. All Rights Reserved.</footer>
    </UserContext.Provider>
  );
}

export default App;
