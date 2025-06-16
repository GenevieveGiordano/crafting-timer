import SideBarStyle from '../styles/SideBar.module.scss'

const SideBar = ({ clearAll, clearReady, clearUnready }) => {
  return (
    <div className={SideBarStyle['sidebar']}>
      <div className={SideBarStyle['icon-container']}>

        <div className={SideBarStyle['icon']}>
          <button onClick={clearAll}>All</button>
        </div>

        <div className={SideBarStyle['icon']}>
          <button onClick={clearReady}>Ready</button>
        </div>

        <div className={SideBarStyle['icon']}>
          <button onClick={clearUnready}>Unready</button>
        </div>

      </div>
    </div>
  );
};

export default SideBar;