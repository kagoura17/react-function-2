import { useState } from "react";
import DiceReturn from "./DiceReturn";

const RollTheDice = () => {
  const [dice, setDice] = useState(1);
  const [tries, setTries] = useState(0);
  const [targetValue, setTargetValue] = useState();
  const [message, setMessage] = useState("");

  const randomNumTarget = Math.floor(Math.random() * 6) + 1;

  const rollDice = () => {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    setDice(randomNum);
    setTries(tries + 1);
    setTargetValue(randomNumTarget);

    if (randomNum === randomNumTarget) {
      setMessage("You won!");
    }
  };

  return (
    <>
      <DiceReturn value={dice}></DiceReturn>
      <p>Target Number : {targetValue} </p>
      <p>Tries: {tries}</p>
      <p>{message}</p>
      <button onClick={rollDice}>Roll Dice</button>
    </>
  );
};

export default RollTheDice;

// prof

// import { useState } from "react";
// import Dice from "./Dice";
// import "./index.css";

// function App() {
//   const [diceValue, setDiceValue] = useState(1);
//   const [tries, setTries] = useState(0);
//   const [message, setMessage] = useState("");
//   const [gameOver, setGameOver] = useState(false);
//   const [randomNumber, setRandomNumber] = useState(
//     Math.floor(Math.random() * 6) + 1
//   );

//   const rollDice = () => {
//     const newValue = Math.floor(Math.random() * 6) + 1;
//     setDiceValue(newValue);
//     setTries(tries + 1);

//     if (newValue === randomNumber) {
//       setMessage("Congratulations! You've won!");
//       setGameOver(true);
//     } else {
//       setMessage("Try again");
//     }
//   };

//   const restartGame = () => {
//     setDiceValue(1);
//     setTries(0);
//     setMessage("");
//     setRandomNumber(Math.floor(Math.random() * 6) + 1);
//     setGameOver(false);
//   };

//   return (
//     <div className="App">
//       <h1>Dice Game</h1>
//       <div className="dice-container">
//         <Dice value={diceValue} />
//       </div>
//       <p>Random Number: {randomNumber}</p>
//       <p>Tries: {tries}</p>
//       {gameOver ? (
//         <button onClick={restartGame}>Play Again</button>
//       ) : (
//         <button onClick={rollDice}>Roll Dice</button>
//       )}
//       {message && <p>{message}</p>}
//     </div>
//   );
// }

// export default App;
// composant dice import "./index.css";
// function Dice({ value }) {
//   return <div className={dice dice-${value}}></div>;
// }
// export default Dice;
