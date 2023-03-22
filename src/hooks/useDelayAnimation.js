import { useEffect, useState } from 'react';

function useDelayAnimation(isActive, delay) {
  const [startAnimation, setStartAnimation] = useState(isActive);

  useEffect(() => {
    let delayDelayAnimation = null;
    if (isActive) {
      delayDelayAnimation = setTimeout(() => {
        setStartAnimation(true);
      }, delay);
    } else {
      setStartAnimation(false);
    }
    return () => {
      clearTimeout(delayDelayAnimation);
    };
  }, [isActive]);

  return startAnimation;
}

export default useDelayAnimation;
