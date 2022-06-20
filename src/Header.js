import React from "react";
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import Avatar from '@mui/material/Avatar'

function Header() {
    return(
        <div className="header">
            <div className="header-left">
            <MenuIcon />
            <img className="header-logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" />
            </div>
            <div className="header-search">
            <input type="text" placeholder="Search"></input>
            <SearchIcon className="header-searchbtn" />
            </div>
            <div className="header-right">
            <VideoCallIcon className="header-icon" />
            <AppsIcon className="header-icon" />
            <NotificationsIcon className="header-icon" />
            <Avatar src="https://icons.veryicon.com/png/o/miscellaneous/youyinzhibo/guest.png" />
            </div>
        </div>
    )
}
export default Header;