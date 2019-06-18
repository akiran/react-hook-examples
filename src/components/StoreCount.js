import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("count", count);
  });

  return (
    <div>
      Stored Current count is {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
