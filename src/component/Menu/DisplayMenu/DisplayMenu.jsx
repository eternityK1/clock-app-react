import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';

import style from './DisplayMenu.module.css';
import SvgFullScreenIcon from '../../../uploads/img/icon_menu/fullscreen.svg';
import SvgColorMode from '../../../uploads/img/icon_menu/colorMode.svg';
import useDelayAnimation from '../../../hooks/useDelayAnimation';
import useTheme from '../../../hooks/useTheme';

function DisplayMenu({ handleFullScreen }) {
  const [colorMode, setColorMode] = useTheme();
  const fullMode = useDelayAnimation(handleFullScreen.active, 2000);

  return (
    <div className={style.cnt_menu}>
      <div
        className={`${style.colum_menu} ${fullMode ? style.colum_menu_full_mode : ''} ${
          colorMode ? style.colum_menu_dark : style.colum_menu_light
        }`}
      >
        <button
          type='button'
          className={`${style.btn_switch}`}
          onClick={() => {
            setColorMode(!colorMode);
          }}
        >
          <ReactSVG className={`${style.svg_icon} ${colorMode ? style.svg_icon_light : ''}`} src={SvgColorMode} />
        </button>

        <button
          type='button'
          className={`${style.btn_switch} ${style.fullScreen}`}
          onClick={() => (handleFullScreen.active ? handleFullScreen.exit() : handleFullScreen.enter())}
        >
          <ReactSVG className={style.svg_icon} src={SvgFullScreenIcon} />
        </button>
      </div>
    </div>
  );
}

DisplayMenu.propTypes = {
  handleFullScreen: PropTypes.oneOfType([PropTypes.object]).isRequired
};

export default DisplayMenu;
