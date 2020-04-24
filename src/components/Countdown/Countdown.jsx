import React, { useState } from 'react';
import './Countdown.css';

export default function Countdown(props) {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [countdownTitle, setCountdownTitle] = useState(
    `Countdown till ${props.deadline}`
  );

  const deadline = new Date(props.deadline);

  const timer = setTimeout(function () {
    const now = new Date().getTime();
    let timeleft = deadline - now;

    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    if (timeleft < 0) {
      clearInterval(timer);
      setCountdown({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      setCountdownTitle('Countdown over');
    } else {
      setCountdown({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  }, 1000);

  return (
    <section className="countdown">
      <h2>{countdownTitle}</h2>
      <div className="clockdiv">
        <div>
          <span className="days">{countdown.days}</span>
          <div className="smalltext">Days</div>
        </div>
        <div>
          <span className="hours">{countdown.hours}</span>
          <div className="smalltext">Hours</div>
        </div>
        <div>
          <span className="minutes">{countdown.minutes}</span>
          <div className="smalltext">Minutes</div>
        </div>
        <div>
          <span className="seconds">{countdown.seconds}</span>
          <div className="smalltext">Seconds</div>
        </div>
      </div>
    </section>
  );
}
