import { useState } from "react";

const Character = ({ item, handleClick, score, setScore, setGameOver }) => {
  let [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className="card"
      onClick={() => {
        if(isClicked) {
          console.log("Game over")  
          setGameOver(true)
          setScore(0)
          setIsClicked(false)
        } else {
          setIsClicked(true)
          setScore(score+1)
          handleClick()
        }
      }}
    >
      <div className="card-inner">
        <div className="card-front">
          <img src={item.img} alt={item.name} />
        </div>
      </div>
    </div>
  );
};

export default Character;
