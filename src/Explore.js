import React from "react";
import Header from './Header'
import Sidebar from './Sidebar'
import VideoRow from './VideoRow'
import './explore.css';

function Explore() {
    return (
        <div className="trendingVideos">
            <Header />
            <div className="trendingVideos-page">
                <Sidebar className='trendingVideos-side' />
                <div className="trendingVideosPage">
                    <h2>Trending Videos</h2>
                    <VideoRow
                        views="50M views"
                        subs="218M"
                        description="'Music can change the world'. T-Series is India's largest music-label and movie studio, believes in bringing the world close together..."
                        timestamp="3 weeks ago"
                        channel="T-Series"
                        title="The Punjaaban Song (Video) | Jug Jug Jiyo"
                        image="https://i.ytimg.com/vi/c6ri-MFdNLY/maxresdefault.jpg"
                    />
                    <VideoRow
                        views="177M views"
                        subs="218M"
                        description="'Music can change the world'. T-Series is India's largest music-label and movie studio, believes in bringing the world close together..."
                        timestamp="4 years ago"
                        channel="T-Series"
                        title="Agar Tum Sath Ho Maahi Ve | T-Series Mix Tape"
                        image="https://i.ytimg.com/vi/Q2S7CDuBTOc/maxresdefault.jpg"
                    />
                    <VideoRow
                        views="50M views"
                        subs="218M"
                        description="'Music can change the world'. T-Series is India's largest music-label and movie studio, believes in bringing the world close together..."
                        timestamp="3 weeks ago"
                        channel="T-Series"
                        title="The Punjaaban Song (Video) | Jug Jug Jiyo"
                        image="https://i.ytimg.com/vi/c6ri-MFdNLY/maxresdefault.jpg"
                    />
                    <VideoRow
                        views="177M views"
                        subs="218M"
                        description="'Music can change the world'. T-Series is India's largest music-label and movie studio, believes in bringing the world close together..."
                        timestamp="4 years ago"
                        channel="T-Series"
                        title="Agar Tum Sath Ho Maahi Ve | T-Series Mix Tape"
                        image="https://i.ytimg.com/vi/Q2S7CDuBTOc/maxresdefault.jpg"
                    />
                </div>
            </div>
        </div>
    )
}
export default Explore;