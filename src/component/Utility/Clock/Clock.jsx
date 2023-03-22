import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import WatchCounterAnimated from '../../UI/WatchCounterAnimated/WatchCounterAnimated';

import cl from './Clock.module.css';

function Clock() {
  function getDataStrFormat(dateParam) {
    const day = dateParam.getDate().toString().padStart(2, '0');
    const month = dateParam.getMonth().toString().padStart(2, '0');
    const year = dateParam.getFullYear();

    return `${day}. ${month}. ${year}`;
  }

  const [date, setDate] = useState(new Date());
  const colorMode = useSelector(state => state.display.colorMode);
  const [dateNowStr, setDateNowStr] = useState(getDataStrFormat(new Date()));

  useEffect(() => {
    setDate(new Date());
    setDateNowStr(getDataStrFormat(new Date()));

    const interval = setInterval(() => {
      setDate(new Date());
      setDateNowStr(getDataStrFormat(new Date()));
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <WatchCounterAnimated date={date} />
      <div className={`${colorMode ? cl.date_dark : cl.date_light} ${cl.date}`}>{dateNowStr}</div>
    </div>
  );
}

export default Clock;
