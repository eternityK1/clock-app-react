import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import displayActionsSetColorMode from '../store/actionsCreators/displayModeActionsCreater';

function setBodyColor(mode) {
  const color = mode ? '#202124' : '#ffffff';
  document.documentElement.style.setProperty('--bodyColor', color);
}

export default function useTheme() {
  const dispatch = useDispatch();

  function setTheme(mode) {
    dispatch(displayActionsSetColorMode(mode));
    setBodyColor(mode);
  }

  const mode = useSelector(state => state.display.colorMode);

  useMemo(() => {
    setBodyColor(mode);
  }, [mode]);

  return [mode, setTheme];
}
