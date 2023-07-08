import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./Components/UserContext/UserContext";
import Home from "./Components/Home/Home";

function App() {
  const [language, setLanguage] = useState("عربي");
  const [storedValue, setStoredValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  return (
    <UserContext.Provider
      value={[
        [language, setLanguage],
        [storedValue, setStoredValue],
        [suggestions, setSuggestions],
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
            <Route path="/about" element={<div></div>} />
            <Route path="/contact-us" element={<div></div>} />
            <Route path="/privacy-policy" element={<div></div>} />
          </Routes>
        </BrowserRouter>
      </div>
      <footer>Copyright &copy; REPAIR. All Rights Reserved.</footer>
    </UserContext.Provider>
  );
}

export default App;
