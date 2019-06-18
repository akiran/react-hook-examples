import React from "react";
import Counter from "./components/Counter";
import PersistedCounter from "./components/PersistedCounter";
import User from "./components/User";
import Timer from "./components/Timer";
import TimerUseInterval from "./components/TimerUseInterval";
import { UserContext } from "./components/context";
import UserName from "./components/UserName";
import Localstorage from "./components/Localstorage";

// import ClassComponent from "./components/old/ClassComponent";

function App() {
  return (
    <div className="container">
      <UserContext.Provider value={{ id: 1, firstName: "Kiran" }}>
        <Counter />
        <PersistedCounter />
        <Timer />
        <User />
        <UserName />
        <Localstorage />
      </UserContext.Provider>
    </div>
  );
}

export default App;
