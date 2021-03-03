import React from "react";
import { useLocalStorage } from "./Helper";
import Timer from "./Components/Timer";
import TimerIcons from "./Components/TimerIcons";
import "./App.css";

const App = () => {
  const [targetDate] = useLocalStorage(
    "target-date",
    new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toString()
  );

  return (
    <main className="main">
      <div className="main-container">
        <h1 className="main-heading">We're Launching Soon</h1>
        <Timer
          timeUntil={
            isNaN(Date.parse(targetDate)) === false
              ? new Date(targetDate)
              : new Date(`12-25-${new Date().getFullYear()} 12:00 AM`)
          }
        />
        <TimerIcons />
      </div>
    </main>
  );
};


export default App;
