import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import Clock from '../Utility/Clock/Clock';
import StopWatch from '../Utility/StopWatch/StopWatch';
import Randomizer from '../Utility/Randomizer/Randomizer';
import useTheme from '../../hooks/useTheme';

import cl from './Content.module.css';
import useDelayAnimation from '../../hooks/useDelayAnimation';

function Content({ handleFullScreen }) {
  const [colorMode] = useTheme();
  const fullMode = useDelayAnimation(handleFullScreen.active, 2000);

  return (
    <div
      className={`${cl.content_box} ${colorMode ? cl.content_dark : cl.content_light} ${
        fullMode ? cl.content_fullscreen : ''
      }`}
    >
      <Routes>
        <Route path='/' element={<Clock />} />
        <Route path='/stopwatch' element={<StopWatch />} />
        <Route path='/random' element={<Randomizer />} />
      </Routes>
    </div>
  );
}

Content.propTypes = {
  handleFullScreen: PropTypes.oneOfType([PropTypes.object]).isRequired
};

export default Content;
