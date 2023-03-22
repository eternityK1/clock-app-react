import { ACTION_SET_MAX_VALUE_GEN, ACTION_SET_MIN_VALUE_GEN, ACTION_SET_GEN_VALUE } from '../actions/randomizerActions';

const defaultState = {
  maxGen: 100,
  minGen: 0,
  genInt: 0,
};

const randomizerReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case ACTION_SET_MAX_VALUE_GEN:
      return { ...state, maxGen: action.payload };
    case ACTION_SET_MIN_VALUE_GEN:
      return { ...state, minGen: action.payload };
    case ACTION_SET_GEN_VALUE:
      return { ...state, genInt: action.payload };
    default:
      return state;
  }
};

export default randomizerReducer;
