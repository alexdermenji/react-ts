import { useState } from "react";
import styles from "./style.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return (
    <div>
      <p className={styles.p}>count: {count}</p>
      <button className={styles.btn} onClick={increment}>
        increment
      </button>
    </div>
  );
};
