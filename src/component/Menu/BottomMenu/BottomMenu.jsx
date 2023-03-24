import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import useDelayAnimation from '../../../hooks/useDelayAnimation';

import SvgMenuIconClock from '../../../uploads/img/icon_menu/clock.svg';
import SvgMenuIconSec from '../../../uploads/img/icon_menu/history.svg';
import SvgMenuCube from '../../../uploads/img/icon_menu/menu__cube.svg';
import style from './BottomMenu.module.css';
import useTheme from '../../../hooks/useTheme';

function BottomMenu({ handleFullScreen }) {
  const [colorMode] = useTheme();
  const fullMode = useDelayAnimation(handleFullScreen.active, 2000);

  function getClassLink({ isActive }) {
    return isActive ? `${style.menu_item} ${style.menu_item_active}` : `${style.menu_item}`;
  }

  return (
    <>
      <div className={style.trigger_menu} />

      <nav
        className={`${style.menu} ${colorMode ? style.menu_dark : style.menu_light} ${
          fullMode ? style.menu_full_mode : ''
        }`}
      >
        <NavLink className={getClassLink} to='/'>
          <div className={style.link_item_menu}>
            <ReactSVG className={style.img_item_menu} src={SvgMenuIconClock} />
            <div className={style.text_item_menu}>Clock</div>
          </div>
        </NavLink>
        <NavLink className={getClassLink} to='/stopwatch'>
          <div className={style.link_item_menu}>
            <ReactSVG className={style.img_item_menu} src={SvgMenuIconSec} />
            <div className={style.text_item_menu}>Stopwatch</div>
          </div>
        </NavLink>
        <NavLink className={getClassLink} to='/random'>
          <div className={style.link_item_menu}>
            <ReactSVG className={style.img_item_menu} src={SvgMenuCube} />
            <div className={style.text_item_menu}>Randomizer</div>
          </div>
        </NavLink>
      </nav>
    </>
  );
}

BottomMenu.propTypes = {
  handleFullScreen: PropTypes.oneOfType([PropTypes.object]).isRequired
};

export default BottomMenu;
