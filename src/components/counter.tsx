import { useState } from "react";
import "./style.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={increment}>increment</button>
    </div>
  );
};
