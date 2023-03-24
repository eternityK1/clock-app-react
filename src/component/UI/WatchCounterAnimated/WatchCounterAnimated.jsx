import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import WatchNumberAnimated from '../WatchNumberAnimated/WatchNumberAnimated';

import cl from './WatchCounterAnimated.module.css';

function WatchCounterAnimated({ date }) {
  // refDate is Time after which the animation starts.
  // This is necessary for the normal start of the animation.
  const refDate = new Date(date.getTime() - date.getMilliseconds() + 1000);
  const firstSecond = useRef(refDate);

  const nowTime = {};
  const prevTime = {};

  if (date.getTime() < firstSecond.current.getTime()) {
    // First props no animation
    nowTime.sec = date.getSeconds();
    nowTime.minutes = date.getMinutes();
    nowTime.hour = date.getHours();

    prevTime.sec = date.getSeconds();
    prevTime.minutes = date.getMinutes();
    prevTime.hour = date.getHours();
  } else {
    // Subsequent props

    nowTime.sec = date.getSeconds();
    nowTime.minutes = date.getMinutes();
    nowTime.hour = date.getHours();

    const startDate = new Date(date.getTime());
    startDate.setSeconds(startDate.getSeconds() - 1);
    prevTime.sec = startDate.getSeconds();
    prevTime.minutes = startDate.getMinutes();
    prevTime.hour = startDate.getHours();
  }

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
