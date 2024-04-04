import { useState } from "react";
import DiceDispay from "./DiceDispay";

const Dice = () => {
  const [dice, setDice] = useState(1);
  const [tries, setTries] = useState(0);
  const [targetValue, setTargetValue] = useState(
    Math.floor(Math.random() * 6) + 1
  );
  const rollDice = () => {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    setDice(randomNum);
    setTries(tries + 1);
    if (randomNum === targetValue) {
    setMessage("CONGRATULATION YOU WON");
  }
  };
  const [message, setMessage] = useState("");
  
  return (
    <>
      <DiceDispay value={dice}></DiceDispay>
      <h4>targeted number : {targetValue}</h4>
      <button onClick={rollDice}>roll the dice</button>
      <h5>tries {tries}: </h5>
      <h3>{message}</h3>
    </>
  );
};

export default Dice;
