import React from "react";
import IconFacebook from "./IconFacebook";
import IconInstagram from "./IconInstagram";
import IconPinterest from "./IconPinterest";

const TimerIcons = () => (
  <footer className="timer-icons">
    <button
      className="social-button facebook"
      aria-label="Facebook"
      title="Facebook"
    >
      <IconFacebook className="social-icon" />
    </button>
    <button
      className="social-button instagram"
      aria-label="Instagram"
      title="Instagram"
    >
      <IconInstagram className="social-icon" />
    </button>
    <button
      className="social-button pinterest"
      aria-label="Pinterest"
      title="Pinterest"
    >
      <IconPinterest className="social-icon" />
    </button>
  </footer>
);

export default TimerIcons;