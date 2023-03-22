import { ACTION_SET_COLOR_MODE, ACTION_SET_FULLSCREEN_MODE } from '../actions/displayModeActions';

const displayActionsSetFullMode = (payload) => ({ type: ACTION_SET_FULLSCREEN_MODE, payload });

const displayActionsSetColorMode = (payload) => ({ type: ACTION_SET_COLOR_MODE, payload });

export { displayActionsSetFullMode, displayActionsSetColorMode };
