import React, { useState } from 'react';

import ItemGroupList from "./ItemGroupList";
import SideBar from "./SideBar";

import CraftingPageStyle from '../styles/CraftingPage.module.scss';

const CraftingPage = ({ 
  itemGroups, loading, 
  activeTimers, toggleTimer, getTimeLeft, openCustomTimer, audioRef, 
  clearAllTimers, clearReadyTimers, clearUnreadyTimers 
}) => {

  const clearAll = () => clearAllTimers();
  const clearReady = () => clearReadyTimers();
  const clearUnready = () => clearUnreadyTimers();

  return (
    <div className={CraftingPageStyle['craft-page']}>

      <SideBar 
        clearAll={clearAll} 
        clearReady={clearReady} 
        clearUnready={clearUnready}
      />

      <div className={CraftingPageStyle['main-content']}>
        <audio ref={audioRef} src="/done.mp3" preload="auto" />
        {loading ? (
          <div className={CraftingPageStyle['loading-screen']}>Loading items...</div>
        ) : (
          <ItemGroupList
            itemGroups={itemGroups}
            activeTimers={activeTimers}
            toggleTimer={toggleTimer}
            getTimeLeft={getTimeLeft}
            openCustomTimer={openCustomTimer}
          />
        )}
      </div>
    </div>
  );
};

export default CraftingPage;
