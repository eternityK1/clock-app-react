import { ACTION_SET_MAX_VALUE_GEN, ACTION_SET_MIN_VALUE_GEN, ACTION_SET_GEN_VALUE } from '../actions/randomizerActions';

const randomizerActionsSetMin = (payload) => ({ type: ACTION_SET_MIN_VALUE_GEN, payload });

const randomizerActionsSetMax = (payload) => ({ type: ACTION_SET_MAX_VALUE_GEN, payload });

const randomizerActionsSetResult = (payload) => ({ type: ACTION_SET_GEN_VALUE, payload });

export { randomizerActionsSetMin, randomizerActionsSetMax, randomizerActionsSetResult };
