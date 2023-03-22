import { ACTION_TIME_START, ACTION_START, ACTION_TIME_PAUSE } from '../actions/stopWatchActions';

const actionStart = state => ({ type: ACTION_START, payload: state });

const actionTimeStart = state => ({ type: ACTION_TIME_START, payload: state });

const actionTimePause = state => ({ type: ACTION_TIME_PAUSE, payload: state });

export { actionStart, actionTimeStart, actionTimePause };
