import React from "react";
import './library.css';
import VideoCard from "./VideoCard";
import Header from "./Header";
import Sidebar from "./Sidebar";
import HistoryIcon from "@mui/icons-material/History";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay"

function Library() {
    return (
        <div className="libraries">
            <Header />
            <div className='library-page'>
                <Sidebar className='library-side' />
                <div className='librariesPage'>
                    <div className='lib'>
                        <HistoryIcon />
                        <h2 id="history">History</h2>
                    </div>
                    <div className="library-history">
                        <VideoCard
                            title="Coke Studio Season 10 | Ranjish Hi Sahi | Ali Sethi"
                            views="21M views"
                            timestamp="4 years ago"
                            channelImage="https://yt3.ggpht.com/EQODiFvb8wmetXJlMzYt5ALY_yVDZyGR6pg9UJ5NQS4uG4QwUWysPtJbReYrkI6tjWLmDcQT=s900-c-k-c0x00ffffff-no-rj"
                            channel="Coke Studio"
                            image="https://i.ytimg.com/vi/pba_YmWDAIU/maxresdefault.jpg"
                        />
                        <VideoCard
                            title="Agar Tum Sath Ho Maahi Ve | T-Series Mix Tape"
                            views="177M views"
                            timestamp="4 years ago"
                            channelImage="https://pixelz.cc/wp-content/uploads/2018/11/t-series-logo-uhd-4k-wallpaper.jpg"
                            channel="T-Series"
                            image="https://i.ytimg.com/vi/Q2S7CDuBTOc/maxresdefault.jpg"
                        />
                        <VideoCard
                            title="Coke Studio Season 12 | Gulon Mein Rang | Ali Sethi"
                            views="6.3M views"
                            timestamp="2 years ago"
                            channelImage="https://yt3.ggpht.com/EQODiFvb8wmetXJlMzYt5ALY_yVDZyGR6pg9UJ5NQS4uG4QwUWysPtJbReYrkI6tjWLmDcQT=s900-c-k-c0x00ffffff-no-rj"
                            channel="Coke Studio"
                            image="https://i.ytimg.com/vi/hR8FEdC6aAs/maxresdefault.jpg"
                        />
                        <VideoCard
                            title="The Punjaaban Song (Video) | Jug Jug Jiyo"
                            views="50M views"
                            timestamp="3 weeks ago"
                            channelImage="https://pixelz.cc/wp-content/uploads/2018/11/t-series-logo-uhd-4k-wallpaper.jpg"
                            channel="T-Series"
                            image="https://i.ytimg.com/vi/c6ri-MFdNLY/maxresdefault.jpg"
                        />
                    </div>
                    <hr />
                    <div className='lib'>
                        <WatchLaterIcon />
                        <h2 id="later">Watch Later</h2>
                    </div>
                    <div className="library-later">
                        <p>Save videos to watch later. Your list shows up right here.</p>
                    </div>
                    <hr />
                    <div className='lib'>
                        <PlaylistPlayIcon />
                        <h2 id="playlist">Playlists</h2>
                    </div>
                    <div className="library-playlists">
                        <p>Playlists you create or save will show up here.</p>
                    </div>
                    <hr />
                    <div className='lib'>
                        <ThumbUpAltOutlinedIcon />
                        <h2 id="liked">Liked Videos</h2>
                    </div>
                    <div className="library-liked">
                        <p>Videos you like will show up here.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Library;