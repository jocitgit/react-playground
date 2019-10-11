import React, { useState, useEffect } from 'react';

function HookClock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log('HookClock useEffect');
    const timerId = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerId);
    }
  }, []); // only run useEffect once on mount/unmount

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h1>The time is {date.toLocaleTimeString()}</h1>
    </div>
  );

}

export default HookClock;
