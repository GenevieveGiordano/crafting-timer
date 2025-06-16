import SideBarStyle from '../styles/SideBar.module.scss'
import ButtonStyles from '../styles/Buttons.module.scss';

const SideBar = ({ clearAll, clearReady, clearUnready }) => {
  return (
    <div className={SideBarStyle['sidebar']}>
      <div className={SideBarStyle['icon-container']}>

      <div className={SideBarStyle['sidebar-title']}>Clear Timers</div>

        <div className={SideBarStyle['icon']}>
          <button className={ButtonStyles['btn-sidebar']} onClick={clearAll}>All</button>
        </div>

        <div className={SideBarStyle['icon']}>
          <button className={ButtonStyles['btn-sidebar']} onClick={clearReady}>Ready</button>
        </div>

        <div className={SideBarStyle['icon']}>
          <button className={ButtonStyles['btn-sidebar']} onClick={clearUnready}>Unready</button>
        </div>

      </div>
    </div>
  );
};

export default SideBar;