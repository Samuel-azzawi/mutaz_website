import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./Components/UserContext/UserContext";
import Home from "./Components/Home/Home";
import { CardContent } from "./Components/Home/CardContent";

function App() {
  const [language, setLanguage] = useState("عربي");
  const [storedValue, setStoredValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [cards, setCards] = useState(CardContent);

  return (
    <UserContext.Provider
      value={[
        [language, setLanguage],
        [storedValue, setStoredValue],
        [suggestions, setSuggestions],
        [cards, setCards],
      ]}
    >
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Home />
                </div>
              }
            />
            <Route
              path="/search"
              element={
                <div>
                  <Home />
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
      <footer>Copyright &copy; REPAIR. All Rights Reserved.</footer>
    </UserContext.Provider>
  );
}

export default App;
