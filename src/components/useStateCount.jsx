import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function onButtonClick(){
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={onButtonClick}>+</button>
      <div>Count: {count}</div>
    </div>
  );
}

export default App;