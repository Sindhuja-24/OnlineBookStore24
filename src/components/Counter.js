import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    // Ensure the counter cannot go below 0
    setCounter(counter > 0 ? counter - 1 : 0);
  };

  return (
    <div className="counter-container">
      <h2>Counter: {counter}</h2>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
};

export default Counter;