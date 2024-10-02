import { useState } from 'react';

function App (){
  const [isActive, setIsActive] = useState(true);

  function onButtonClick(){
    setIsActive(!isActive);
  }

  return (
    <div>
      {isActive ? <div>I am active</div> : <div>I am not active</div>}
      <button onClick={onButtonClick}>Change state</button>
    </div>
  );
}

export default App;