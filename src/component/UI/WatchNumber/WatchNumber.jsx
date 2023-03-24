import PropTypes from 'prop-types';
import { memo } from 'react';
import useTheme from '../../../hooks/useTheme';

import cl from './WatchNumber.module.css';

function WatchNumber({ number }) {
  const stringValue = number.toString().padStart(2, '0');
  const [colorMode] = useTheme();

  return (
    <div className={`${cl.cnt_time} ${colorMode ? cl.cnt_time_dark : cl.cnt_time_light}`}>
      <div className={`${cl.number}`}>{stringValue[0]}</div>
      <div className={`${cl.number}`}>{stringValue[1]}</div>
    </div>
  );
}

WatchNumber.propTypes = {
  number: PropTypes.number.isRequired
};

export default memo(WatchNumber);
