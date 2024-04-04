import NewApp from "./NewApp";
import { useState } from 'react';
import Joyride from 'react-joyride';

const App = () => {
  const [steps,] = useState([
    {
      target: '.one',
      content: 'number one!',
    },
    {
      target: '.two',
      content: 'number two!',
    },
    {
      target: '.tree',
      content: 'number tree!',
    },
  ]);
  
  const [run, setRun] = useState(true);

  const handleJoyrideCallback = (data) => {
    const { status } = data;
    if (status === 'finished') {
      setRun(false); // Set run to false to stop the tour
    }
  };
  return (
    <>
    <div>
      <NewApp></NewApp>
      <h1 className="one"> bloc boc 1</h1>
      <h1 className="two"> bloc boc 2</h1>
      <h1 className="tree"> bloc boc 3</h1>
    </div>
    <div className="app">
      <Joyride
        steps={steps}
        run={run}
        continuous={true} // Allow the tour to continue after reaching the last step
        showSkipButton={true} // Show the skip button
        callback={handleJoyrideCallback} // Callback function to handle tour events
        disableOverlayClose={false} // Allow the tour to be closed by clicking the overlay
        disableScrolling={true} // Disable scrolling when the tour is active
        // You can add more props based on your requirements
      />
   
      
    </div></>
  );
};

export default App;
