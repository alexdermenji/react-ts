import { useState } from "react";
import { btn, p } from "./style.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return (
    <div>
      <p className={p}>count: {count}</p>
      <button className={btn} onClick={increment}>
        increment
      </button>
    </div>
  );
};
