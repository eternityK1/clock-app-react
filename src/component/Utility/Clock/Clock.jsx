import React, { useState, useEffect } from 'react';
import WatchCounterAnimated from '../../UI/WatchCounterAnimated/WatchCounterAnimated';
import useTheme from '../../../hooks/useTheme';
import cl from './Clock.module.css';

function Clock() {
  function getDataStrFormat(dateParam) {
    const day = dateParam.getDate().toString().padStart(2, '0');
    const month = dateParam.getMonth().toString().padStart(2, '0');
    const year = dateParam.getFullYear();

    return `${day}. ${month}. ${year}`;
  }

  const [date, setDate] = useState(new Date());
  const [colorMode] = useTheme();
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
    <div className={cl.main_cnt}>
      <div className={cl.box_center}>
        <WatchCounterAnimated date={date} />
      </div>

      <div className={`${cl.box_down} ${colorMode ? cl.date_dark : cl.date_light} ${cl.date}`}>{dateNowStr}</div>
    </div>
  );
}

export default Clock;
