import { createStore, combineReducers } from 'redux';
import randomizerReducer from './reducers/randomizerReducer';
import stopWatchReducer from './reducers/stopWatchReducer';
import displayReducer from './reducers/displayReducer';

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem('storageRedux');
    if (serialisedState === null) {
      return undefined;
    }
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

async function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('storageRedux', serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

const rootReducer = combineReducers({
  stopWatch: stopWatchReducer,
  randomizer: randomizerReducer,
  display: displayReducer,
});

const store = createStore(rootReducer, loadFromLocalStorage());

store.subscribe(() => {
  console.log('saveInLocalStorage');
  saveToLocalStorage(store.getState());
});

export default store;
