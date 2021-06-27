import {useEffect, useState} from 'react'

const Scores = ({score}) => {
  let [highscore, setHighscore] = useState(0);
  useEffect(() => {
    if(score > highscore) {
      setHighscore(score)
    }
  }, [score, highscore])

  return (
    <div className="scores">
      <p className="score-item">High Score: {highscore}</p>
      <p className="score-item">Current Score: {score}</p>
    </div>
  );
};

export default Scores;
