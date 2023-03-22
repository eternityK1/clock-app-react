import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { memo } from 'react';
import cl from './WatchNumberAnimated.module.css';

function WatchNumberAnimated({ number, prevNumber }) {
  const colorMode = useSelector(state => state.display.colorMode);

  const numberString = number.toString().padStart(2, '0');
  const prevNumberString = prevNumber.toString().padStart(2, '0');

  function getNumberComponent(firstNumber, secondNumber, position) {
    const positionStyle = position ? cl.left : cl.right;

    if (firstNumber === secondNumber) {
      return (
        <div className={`${cl.number} ${positionStyle} ${cl.number_not_animation_center}`} key={secondNumber}>
          {secondNumber}
        </div>
      );
    }
    return (
      <>
        <div className={`${cl.number} ${positionStyle} ${cl.number_animation_top}`} key={firstNumber}>
          {firstNumber}
        </div>
        <div className={`${cl.number} ${positionStyle} ${cl.number_animation_center}`} key={secondNumber}>
          {secondNumber}
        </div>
      </>
    );
  }

  const leftNumber = getNumberComponent(numberString[0], prevNumberString[0], true);
  const rightNumber = getNumberComponent(numberString[1], prevNumberString[1], false);

  return (
    <div className={`${cl.cnt_time} ${colorMode ? cl.cnt_time_dark : cl.cnt_time_light}`}>
      <div key='first'>{leftNumber}</div>
      <div key='second'>{rightNumber}</div>
    </div>
  );
}

WatchNumberAnimated.propTypes = {
  number: PropTypes.number.isRequired,
  prevNumber: PropTypes.number,
};

WatchNumberAnimated.defaultProps = {
  prevNumber: 0,
};

export default memo(WatchNumberAnimated);
