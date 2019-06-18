import React from "react";
import Counter from "./components/Counter";
import StoreCount from "./components/StoreCount";
import CounterReducer from "./components/User";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="container">
      <Counter />
      <StoreCount />
      <Timer />
      <CounterReducer />
    </div>
  );
}

export default App;
