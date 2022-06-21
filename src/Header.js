import React, { useState } from "react";
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import Avatar from '@mui/material/Avatar'
import { Link } from "react-router-dom";

function Header() {
    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className="header">
            <div className="header-left">
                <MenuIcon className="header-icon" />
                <Link to={"/"}>
                <img className="header-logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" />
                </Link>
            </div>
            <div className="header-search">
                <input type="text" placeholder="Search" onChange={e => setInputSearch(e.target.value)} value={inputSearch}></input>
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header-searchbtn" />
                </Link>
            </div>
            <div className="header-right">
                <VideoCallIcon className="header-icon" />
                <AppsIcon className="header-icon" />
                <NotificationsIcon className="header-icon" />
                <Avatar src="https://upload.wikimedia.org/wikipedia/commons/e/e0/React.png" />
            </div>
        </div>
    )
}
export default Header;