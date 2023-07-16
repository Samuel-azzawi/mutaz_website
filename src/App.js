import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./Components/UserContext/UserContext";
import Home from "./Components/Home/Home";
import { CardContent } from "./Components/Home/CardContent";
import Windows from "./Components/Home/os/Windows";
import Mac from "./Components/Home/os/Mac";
import Android from "./Components/Home/os/Android";
import FilterCards from "./Components/Home/FilterCards";

function App() {
  const [language, setLanguage] = useState("عربي");
  const [storedValue, setStoredValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [cards, setCards] = useState(CardContent);
  const [search, setSearch] = useState("");
  const [os, setOs] = useState("");

  return (
    <UserContext.Provider
      value={[
        [language, setLanguage],
        [storedValue, setStoredValue],
        [suggestions, setSuggestions],
        [cards, setCards],
        [search, setSearch],
        [os, setOs],
      ]}
    >
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/windows" element={<Windows />} />
            <Route path="/mac" element={<Mac />} />
            <Route path="/android" element={<Android />} />
            <Route path="/search" element={<FilterCards />} />
            <Route path="/windows/search" element={<FilterCards />} />
            <Route path="/mac/search" element={<FilterCards />} />
            <Route path="/android/search" element={<FilterCards />} />
          </Routes>
        </BrowserRouter>
      </div>
      <footer>Copyright &copy; REPAIR. All Rights Reserved.</footer>
    </UserContext.Provider>
  );
}

export default App;
