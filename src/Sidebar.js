import React, { useState } from "react";
import "./Sidebar.css"
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import SidebarRow from './SidebarRow'
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"

function Sidebar() {
    return (
        <div className="sidebar">
            <Link to={"/"} style={{ textDecoration: 'none' }}>
                <SidebarRow selected Icon={HomeIcon} title="Home" />
            </Link>
            <Link to={"/explore"} style={{ textDecoration: 'none' }}>
                <SidebarRow Icon={ExploreIcon} title="Explore" />
            </Link>
            <Link to={"/subscriptions"} style={{ textDecoration: 'none' }}>
                <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
            </Link>
            <hr />
            <Link to={"/library/#history"} style={{ textDecoration: 'none' }}>
                <SidebarRow Icon={VideoLibraryIcon} title="Library" />
            </Link>
            <Link to={"/history"} style={{ textDecoration: 'none' }}>
                <SidebarRow Icon={HistoryIcon} title="History" />
            </Link>
            <Link to={"*"} style={{ textDecoration: 'none' }}>
            <SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
            </Link>
            <HashLink smooth to={"/library/#later"} style={{ textDecoration: 'none' }}>
                <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
            </HashLink>
            <HashLink smooth to={"/library/#liked"} style={{ textDecoration: 'none' }}>
                <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos" />
            </HashLink>
            <Link to={"*"} style={{ textDecoration: 'none' }}>
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show More" />
            </Link>
        </div>

    )
}
export default Sidebar;