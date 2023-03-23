import { ACTION_START, ACTION_TIME_START, ACTION_TIME_PAUSE } from '../actions/stopWatchActions';

const defaultState = {
  start: false,
  timeStart: 0,
  timePause: 0,
  circleData: []
};

const stopWatchReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case ACTION_START:
      return { ...state, start: action.payload };
    case ACTION_TIME_START:
      return { ...state, timeStart: action.payload };
    case ACTION_TIME_PAUSE:
      return { ...state, timePause: action.payload };
    default:
      return state;
  }
};

export default stopWatchReducer;
