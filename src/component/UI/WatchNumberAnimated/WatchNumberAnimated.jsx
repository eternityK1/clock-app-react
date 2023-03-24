import PropTypes from 'prop-types';
import { memo } from 'react';
import useTheme from '../../../hooks/useTheme';

import cl from './WatchNumberAnimated.module.css';

function NumberComponent({ firstNumber, secondNumber }) {
  if (firstNumber === secondNumber) {
    return (
      <div className={`${cl.number}`} key={secondNumber}>
        {secondNumber}
      </div>
    );
  }
  return (
    <div className={cl.number_animation_top} key={firstNumber + secondNumber}>
      <div className={`${cl.cell_animation_number}`}>{firstNumber}</div>
      <div className={`${cl.cell_animation_number}`}>{secondNumber}</div>
    </div>
  );
}

NumberComponent.propTypes = {
  firstNumber: PropTypes.string.isRequired,
  secondNumber: PropTypes.string.isRequired
};

function WatchNumberAnimated({ number, prevNumber }) {
  const [colorMode] = useTheme();

  const numberString = number.toString().padStart(2, '0');
  const prevNumberString = prevNumber.toString().padStart(2, '0');

  return (
    <div className={`${cl.cnt_time} ${colorMode ? cl.cnt_time_dark : cl.cnt_time_light}`}>
      <NumberComponent firstNumber={numberString[0]} secondNumber={prevNumberString[0]} />
      <NumberComponent firstNumber={numberString[1]} secondNumber={prevNumberString[1]} />
    </div>
  );
}

WatchNumberAnimated.propTypes = {
  number: PropTypes.number.isRequired,
  prevNumber: PropTypes.number
};

WatchNumberAnimated.defaultProps = {
  prevNumber: 0
};

export default memo(WatchNumberAnimated);
