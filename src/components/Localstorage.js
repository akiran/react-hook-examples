import React from "react";
import useLocalStorage from "react-use-localstorage";

export default function Counter() {
  const [count, setCount] = useLocalStorage("counter1", 0);
  return (
    <div>
      <h3>localstorage count is {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
