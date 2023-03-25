import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import WatchNumberAnimated from '../WatchNumberAnimated/WatchNumberAnimated';

import cl from './WatchCounterAnimated.module.css';

function WatchCounterAnimated({ date }) {
  // firstSecond is the time after which the animation starts.
  // This is necessary for the animation to start normally
  const firstSecond = useRef(new Date(date.getTime() - date.getMilliseconds() + 1000));

  const nowTime = {
    sec: date.getSeconds(),
    minutes: date.getMinutes(),
    hour: date.getHours()
  };

  const prevDate = date;
  if (date.getTime() > firstSecond.current.getTime()) {
    prevDate.setSeconds(prevDate.getSeconds() - 1);
  }

  const prevTime = {
    sec: prevDate.getSeconds(),
    minutes: prevDate.getMinutes(),
    hour: prevDate.getHours()
  };

  return (
    <div className={cl.main_cnt_watch}>
      <WatchNumberAnimated className={cl.main_cnt_watch} number={nowTime.hour} prevNumber={prevTime.hour} />
      <WatchNumberAnimated className={cl.main_cnt_watch} number={nowTime.minutes} prevNumber={prevTime.minutes} />
      <WatchNumberAnimated className={cl.main_cnt_watch} number={nowTime.sec} prevNumber={prevTime.sec} />
    </div>
  );
}

WatchCounterAnimated.propTypes = {
  date: PropTypes.oneOfType([PropTypes.object]).isRequired
};

export default WatchCounterAnimated;
