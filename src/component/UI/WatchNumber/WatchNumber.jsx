import PropTypes from 'prop-types';
import { memo } from 'react';
import { useSelector } from 'react-redux';

import cl from './WatchNumber.module.css';

function WatchNumber({ number }) {
  const stringValue = number.toString().padStart(2, '0');

  const colorMode = useSelector(state => state.display.colorMode);

  return (
    <div className={`${cl.cnt_time} ${colorMode ? cl.cnt_time_dark : cl.cnt_time_light}`}>
      <div className={`${cl.number} ${cl.left} `}>{stringValue[0]}</div>
      <div className={`${cl.number} ${cl.right}`}>{stringValue[1]}</div>
    </div>
  );
}

WatchNumber.propTypes = {
  number: PropTypes.number.isRequired,
};

export default memo(WatchNumber);
