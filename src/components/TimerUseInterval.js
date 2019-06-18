import React, { useState, useEffect, useRef } from "react";

//https://overreacted.io/making-setinterval-declarative-with-react-hooks/

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default function Timer() {
  const [count, setCount] = useState(0);
  useInterval(() => setCount(c => c + 1), 1000);

  return <h1>Timer: {count}</h1>;
}
