import { useState, useEffect } from "react";
import Header from "./components/ui/Header";
import Scores from "./components/ui/Scores";
import CharacterGrid from "./components/characters/CharacterGrid";
import axios from "axios";
import "./App.css";

function App() {
  let [isLoading, setIsLoading] = useState(true);
  let [items, setItems] = useState();
  let [score, setScore] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      try {
        let result = await axios(
          `https://www.breakingbadapi.com/api/characters?limit=10&offset=15`
        );
        setItems(result.data);
        setIsLoading(false);
      } catch (err) {
        console.log(`Error: ${err}`);
      }
    };

    loadData();
  }, []);

  return (
    <div className="container">
      <Header />
      <Scores
        score={score}
      />
      <CharacterGrid
        isLoading={isLoading}
        items={items}
        getItems={(charArray) => setItems(charArray)}
        score={score}
        setScore={setScore}
      />
    </div>
  );
}

export default App;
