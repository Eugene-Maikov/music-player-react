import React from 'react';
import './sidebar.css'
import SidebarButton from "./sidebarButton";

import {MdFavorite} from "react-icons/md"
import {FaGripfire, FaPlay} from "react-icons/fa"
import {FaSignOutAlt} from "react-icons/fa"
import {IoLibrary} from "react-icons/io5"
import {MdSpaceDashboard} from "react-icons/md"

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <img className="profile-img" src="https://media.nexusmods.com/6/0/60ed848e-d899-49d1-8517-7622d8767b2c.jpeg"
           alt="profile"/>
      <div>
        <SidebarButton title="Feed" to="./feed" icon={<MdSpaceDashboard/>}/>
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire/>}/>
        <SidebarButton title="Player" to="/player" icon={<FaPlay/>}/>
        <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite/>}/>
        <SidebarButton title="library" to="/library" icon={<IoLibrary/>}/>
      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt/>}/>
    </div>
  );
};

export default Sidebar;