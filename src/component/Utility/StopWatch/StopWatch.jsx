import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { getMinutes, getSeconds, getMilliseconds } from '../../../lib/timeSelector';
import WatchCounter from '../../UI/WatchCounter/WatchCounter';
import { actionStart, actionTimePause, actionTimeStart } from '../../../store/actionsCreators/stopWatchActionCreators';

import cl from './StopWatch.module.css';

function StopWatch() {
  const dispatch = useDispatch();

  const start = useSelector(state => state.stopWatch.start);
  const timeStart = useSelector(state => state.stopWatch.timeStart);
  const timePause = useSelector(state => state.stopWatch.timePause);

  const interval = useRef(null);

  const limitTime = 5999999;

  function getInitValues() {
    if (start && timeStart) {
      let time = Date.now() - timeStart;
      time = time >= limitTime ? limitTime : time;
      return [getMilliseconds(time), getSeconds(time), getMinutes(time), time >= limitTime];
    }

    if (timeStart && !start) {
      let time = timePause - timeStart;
      time = time >= limitTime ? limitTime : time;
      return [getMilliseconds(time), getSeconds(time), getMinutes(time), time >= limitTime];
    }

    return [0, 0, 0, false];
  }

  const initValues = getInitValues();

  const [msTime, setMsTime] = useState(initValues[0]);
  const [secTime, setSecTime] = useState(initValues[1]);
  const [minTime, setMinTime] = useState(initValues[2]);
  const [overflowTimer, setOverflow] = useState(initValues[3]);

  function setSateAllNumbers(time) {
    setMsTime(getMilliseconds(time));
    setSecTime(getSeconds(time));
    setMinTime(getMinutes(time));
  }

  useEffect(() => {
    if (start) {
      interval.current = setInterval(() => {
        const timeFromStart = Date.now() - timeStart;

        if (timeFromStart >= limitTime) {
          dispatch(actionTimePause(Date.now()));
          dispatch(actionStart(false));
          setOverflow(true);
          setSateAllNumbers(limitTime);
        } else {
          setSateAllNumbers(Date.now() - timeStart);
        }
      }, 40);
    } else {
      clearInterval(interval.current);
    }

    return () => {
      clearInterval(interval.current);
    };
  }, [start]);

  function startTimer() {
    if (overflowTimer) {
      return;
    }
    dispatch(actionStart(true));
    dispatch(actionTimeStart(Date.now() - (timePause - timeStart)));
  }

  function stopTimer() {
    const timeNow = Date.now();
    dispatch(actionTimePause(timeNow));
    dispatch(actionStart(false));
    clearInterval(interval.current);
    setSateAllNumbers(timeNow - timeStart);
  }

  function resetTimer() {
    dispatch(actionTimeStart(0));
    dispatch(actionTimePause(0));
    dispatch(actionStart(false));
    setOverflow(false);
    clearInterval(interval.current);

    setSateAllNumbers(0);
  }

  return (
    <div className={cl.main_cnt}>
      <div className={cl.box_non_center}></div>
      <div className={cl.box}>
        <WatchCounter thirdNumber={minTime} secondNumber={secTime} firstNumber={msTime} />
      </div>
      <div className={cl.box_non_center}>
        <div className={cl.box_down}>
          {start ? (
            <Button variant='contained' color='primary' onClick={() => stopTimer()}>
              Стоп
            </Button>
          ) : (
            <Button disableRipple variant='contained' color='primary' onClick={() => startTimer()}>
              {timeStart ? 'Продолжить' : 'Старт'}
            </Button>
          )}
          <Button variant='contained' color='secondary' onClick={() => resetTimer()}>
            Сброс
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StopWatch;
