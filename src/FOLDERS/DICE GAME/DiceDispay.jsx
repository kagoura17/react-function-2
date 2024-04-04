import "./DiceReturn.css";
const DiceDispay = ({value}) => {
  return (
    <>
      <div className="main">
        <h1>ROLL THE DICE</h1>
        <div className={`dice dice-${value}`}></div>
      </div>
    </>
  );
};

export default DiceDispay;
