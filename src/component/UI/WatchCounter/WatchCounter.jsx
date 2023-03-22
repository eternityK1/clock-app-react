import React from 'react';
import PropTypes from 'prop-types';
import cl from './WatchCounter.module.css';
import WatchNumber from '../WatchNumber/WatchNumber';

function WatchCounter({ thirdNumber, secondNumber, firstNumber, delimiter }) {
  return (
    <div className={cl.main_cnt_watch}>
      <WatchNumber number={thirdNumber} />
      {delimiter ? <div className={cl.delimiter}>delimiter</div> : ''}
      <WatchNumber number={secondNumber} />
      {delimiter ? <div className={cl.delimiter}>delimiter</div> : ''}
      <WatchNumber number={firstNumber} />
    </div>
  );
}

WatchCounter.propTypes = {
  thirdNumber: PropTypes.number.isRequired,
  secondNumber: PropTypes.number.isRequired,
  firstNumber: PropTypes.number.isRequired,
  delimiter: PropTypes.string,
};

WatchCounter.defaultProps = {
  delimiter: '',
};

export default WatchCounter;
