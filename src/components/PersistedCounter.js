import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(() => {
    return parseInt(localStorage.getItem("count") || 0, 10);
  });

  useEffect(() => {
    localStorage.setItem("count", count);
  });

  return (
    <div>
      <h3>Stored Current count is {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
