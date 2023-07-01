import { useState } from "react";
//import "./Counter.scss";
import cl from "../styles/Counter.module.scss";

const Counter = () => {
  const [state, setState] = useState(0);

  const increment = () => {
    setState(state + 1);
  };

  return (
    <div>
      <h1>{state}</h1>
      <button className={cl.btn} onClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
