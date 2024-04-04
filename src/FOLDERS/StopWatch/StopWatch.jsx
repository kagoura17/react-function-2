import { useEffect, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);
  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };
  const handlereset = () => {
    setTime(0);
    setIsRunning(false);
  };
  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours}:${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };
  return (
    <>
      <div className="stopWatch">
        <h1>Stopwatch</h1>
        <div>{formatTime()}</div>
        <div className="buttons">
          <button onClick={handleStartStop}>
            {isRunning ? "Stop" : "Start"}
          </button>
          <button onClick={handlereset}>reset</button>
        </div>
      </div>
    </>
  );
};

export default StopWatch;




