import Greeting from './Greeting'
import React, { useEffect, useState } from 'react'

export default function App() {
  // let age = 22
  let[name, setName] = useState("Aishwarya")
  const[count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count])

  const update = () => {
    setName("Chandhan");
  }
  const Inc = () => {
    setCount(count + 1);
  };
  const Dec = () => {
    setCount(count - 1);
  };
  const Zero = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Welcome to {name}</h1>
      <button onClick={update}>change Name</button>
      <h1>The count value is {count}</h1>
      <br></br>
      <button onClick={Inc}>Count is {count} - Increment</button>
      <button onClick={Dec}>Decrement</button>
      <butoon onClick={Zero}>Reset</butoon>
    </div>
  );
}
