import React, { useState, useEffect } from "react";
import TimerItems from "./TimerItems";

const Timer = ({ timeUntil }) => {
  const [rawDate, setRawDate] = useState(new Date());
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timeout = setTimeout(() => setRawDate(new Date()), 1000);

    const difference = Math.floor((timeUntil - rawDate) / 1000);
    if (difference <= 0) {
      return;
    }

    const minutes = Math.floor(difference / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    setTimeLeft({
      seconds: difference % 60,
      minutes: minutes % 60,
      hours: hours % 24,
      days,
    });
    
    return () => clearTimeout(timeout);
  }, [timeUntil, rawDate]);

  return (
    <div className="timer">
      <TimerItems timeLabel="Days" timeValue={timeLeft.days} />
      <TimerItems timeLabel="Hours" timeValue={timeLeft.hours} />
      <TimerItems timeLabel="Minutes" timeValue={timeLeft.minutes} />
      <TimerItems timeLabel="Seconds" timeValue={timeLeft.seconds} />
    </div>
  );
};

export default Timer;