import { ACTION_SET_COLOR_MODE, ACTION_SET_FULLSCREEN_MODE } from '../actions/displayModeActions';

const defaultState = {
  colorMode: true,
  fullScreen: false,
};

const displayReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case ACTION_SET_FULLSCREEN_MODE:
      return { ...state, fullScreen: action.payload };
    case ACTION_SET_COLOR_MODE:
      return { ...state, colorMode: action.payload };
    default:
      return state;
  }
};

export default displayReducer;
