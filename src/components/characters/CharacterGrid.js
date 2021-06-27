import { useState, useEffect } from "react";
import Spinner from "../ui/Spinner";
import Character from "./Character";

const CharacterGrid = ({ isLoading, items, getItems, score, setScore }) => {
  let [gameOver, setGameOver] = useState(false)
  useEffect(() => {}, [items]);
  useEffect(() => {
    setGameOver(false)
  }, [gameOver])

  let shuffleFisherYates = (array) => {
    let i = array.length;
    while (i--) {
      const ri = Math.floor(Math.random() * i);
      [array[i], array[ri]] = [array[ri], array[i]];
    }
    return array;
  };

  let handleClick = () => {
    let characters = shuffleFisherYates([...items]);
    getItems(characters);
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <Character
          key={item.char_id}
          item={item}
          handleClick={handleClick}
          score={score}
          setScore={setScore}
          setGameOver={setGameOver}
        />
      ))}
    </section>
  );
};

export default CharacterGrid;
