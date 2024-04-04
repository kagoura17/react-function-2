import "./DiceReturn.css";

const DiceReturn = ({ value }) => {
  return (
    <>
      <div className="main">
        <h1>Dice Game</h1>
        <div className={`dice dice-${value}`}></div>
      </div>
    </>
  );
};

export default DiceReturn;
