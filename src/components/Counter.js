import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      Counter
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}
