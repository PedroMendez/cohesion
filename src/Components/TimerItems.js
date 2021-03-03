import React, { useEffect, useRef } from "react";

const MaxTime = {
  Seconds: 60,
  Minutes: 60,
  Hours: 24,
};

const TimerItems = ({ timeLabel, timeValue }) => {
  const beforeCard = useRef(null);
  const afterCard = useRef(null);

  useEffect(() => {
    const { classList: beforeList } = beforeCard.current;
    const { classList: afterList } = afterCard.current;

    const onBeforeCardHidden = () => {
      beforeList.remove("card-before-animate");
      beforeList.add("card-before-faded");
      afterList.remove("card-after-faded");
      afterList.add("card-after-animate");
    };

    afterList.remove("card-after-animate");
    afterList.add("card-after-faded");
    beforeList.remove("card-before-faded");
    beforeList.add("card-before-animate");

    let beforeCardCurrent = beforeCard.current
    beforeCardCurrent.addEventListener("animationend", onBeforeCardHidden);

    return () => {
      beforeCardCurrent.removeEventListener(
        "animationend",
        onBeforeCardHidden
      );
    };
  }, [timeValue]);

  const prependZero = (value) => {
    if (value < 10) return `0${value}`;
    return value;
  };

  return (
    <div className="ti">
      <div
        ref={beforeCard}
        className="ti-card"
      >
        <div className="card-crease"></div>
        <p className="card-text">
          {prependZero(
            MaxTime[timeLabel]
              ? (timeValue + 1) % MaxTime[timeLabel]
              : timeValue + 1
          )}
        </p>
      </div>
      <div
        ref={afterCard}
        className="ti-card card-after-faded"
      >
        <div className="card-crease"></div>
        <p className="card-text">{prependZero(timeValue)}</p>
      </div>
      <p className="ti-label">{timeLabel}</p>
    </div>
  );
};

export default TimerItems;
