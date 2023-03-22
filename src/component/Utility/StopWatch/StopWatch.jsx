import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import cl from './StopWatch.module.css';
import WatchCounter from '../../UI/WatchCounter/WatchCounter';
import { actionStart, actionTimePause, actionTimeStart } from '../../../store/actionsCreators/stopWatchActionCreators';

// import {
//   actionContinueTimer,
//   actionPauseTimer,
//   actionResetTimer,
//   actionSetTimeNow,
//   actionStartTimer,
// } from '../../../store/actionsCreators/stopWatchActionCreators';

function StopWatch() {
  const dispatch = useDispatch();

  const start = useSelector(state => state.stopWatch.start);
  const timeStart = useSelector(state => state.stopWatch.timeStart);
  const timePause = useSelector(state => state.stopWatch.timePause);

  const interval = useRef(null);

  function getMilliseconds(time) {
    return Math.trunc((time % 1000) / 10);
  }

  function getSeconds(time) {
    return Math.trunc(time / 1000) % 60;
  }

  function getMinutes(time) {
    return Math.trunc(Math.trunc(time / 1000) / 60);
  }

  function getInitValues() {
    if (start && timeStart) {
      const time = Date.now() - timeStart;
      return [getMilliseconds(time), getSeconds(time), getMinutes(time)];
    }

    if (timeStart && !start) {
      const time = timePause - timeStart;
      return [getMilliseconds(time), getSeconds(time), getMinutes(time)];
    }

    return [0, 0, 0];
  }

  const initValues = getInitValues();

  const [msTime, setMsTime] = useState(initValues[0]);
  const [secTime, setSecTime] = useState(initValues[1]);
  const [minTime, setMinTime] = useState(initValues[2]);

  function setSateAllNumbers(time) {
    setMsTime(getMilliseconds(time));
    setSecTime(getSeconds(time));
    setMinTime(getMinutes(time));
  }

  useEffect(() => {
    if (start) {
      interval.current = setInterval(() => {
        const timeFromStart = Date.now() - timeStart;

        if (timeFromStart > 5999999) {
          dispatch(actionTimePause(Date.now()));
          dispatch(actionStart(false));
        }

        setSateAllNumbers(Date.now() - timeStart);
      }, 40);
    } else {
      clearInterval(interval.current);
    }

    return () => {
      clearInterval(interval.current);
    };
  }, [start]);

  function startTimer() {
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
    clearInterval(interval.current);
    setSateAllNumbers(0);
  }

  return (
    <div className={cl.main_cnt}>
      <WatchCounter thirdNumber={minTime} secondNumber={secTime} firstNumber={msTime} />
      <div className={cl.root}>
        {start ? (
          <Button variant='contained' color='primary' onClick={() => stopTimer()}>
            Стоп
          </Button>
        ) : (
          <Button variant='contained' color='primary' onClick={() => startTimer()}>
            {timeStart ? 'Продолжить' : 'Старт'}
          </Button>
        )}
        <Button variant='contained' color='secondary' onClick={() => resetTimer()}>
          Сброс
        </Button>
      </div>
    </div>
  );
}

export default StopWatch;
