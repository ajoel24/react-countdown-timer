import React, { useState } from 'react';

export default function Countdown(props) {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const deadline = new Date(props.deadline);

  setTimeout(function () {
    const now = new Date().getTime();
    let timeleft = deadline - now;

    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    setCountdown({
      days,
      hours,
      minutes,
      seconds,
    });
  }, 1000);

  return (
    <div>
      <h1>Days: {countdown.days}</h1>
      <h1>Hours: {countdown.hours}</h1>
      <h1>Minutes: {countdown.minutes}</h1>
      <h1>Seconds: {countdown.seconds}</h1>
    </div>
  );
}
