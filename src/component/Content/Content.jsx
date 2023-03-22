import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Clock from '../Utility/Clock/Clock';
import Timer from '../Utility/StopWatch/StopWatch';
import Randomizer from '../Utility/Randomizer/Randomizer';

import cl from './Content.module.css';
import useDelayAnimation from '../../hooks/useDelayAnimation';

function Content({ handleFullScreen }) {
  const colorMode = useSelector(state => state.display.colorMode);
  const fullMode = useDelayAnimation(handleFullScreen.active, 2000);

  return (
    <div
      className={`${cl.content_box} ${colorMode ? cl.content_dark : cl.content_light} ${
        fullMode ? cl.content_fullscreen : ''
      }`}
    >
      <Routes>
        <Route
          path='/'
          element={
            <div className={cl.cnt_stopwatch}>
              <div className={cl.timer}>
                <Clock />
              </div>
            </div>
          }
        />
        <Route
          path='/stopwatch'
          element={
            <div className={cl.cnt_stopwatch}>
              <div className={cl.timer}>
                <Timer />
              </div>
            </div>
          }
        />
        <Route
          path='/random'
          element={
            <div className={cl.cnt_stopwatch}>
              <div className={cl.timer}>
                <Randomizer />
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

Content.propTypes = {
  handleFullScreen: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Content;
