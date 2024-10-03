import React, { useEffect, useState } from 'react';

function Example(){
  //useEffect that starts a timer which runs every second
  useEffect(() => {
    const timerId = setInterval (() => {
      console.log('Timer is running');
    }, 1000);

    //This is the cleanup function that stops the timer from running
    //When the button is clicked.
    return () => {
      clearInterval(timerId);
    };

  }, []);

  return <div>Example is showing</div>;
}

function App(){
  const [showComponent, setShowComponent] = useState(true);

  function onButtonClick(){
    setShowComponent(false);
  }

  return (
    <div>
      {showComponent ? <Example /> : null}
      <button onClick={onButtonClick}>Hide component</button>
    </div>
  );
}

export default App;