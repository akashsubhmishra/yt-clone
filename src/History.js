import React from "react";
import Header from './Header'
import Sidebar from './Sidebar'
import VideoRow from './VideoRow'
import './history.css';

function History() {
    return (
        <div className="watchedVideos">
            <Header />
            <div className="watchedVideos-page">
                <Sidebar className='watchedVideos-side' />
                <div className="watchedVideosPage">
                    <h2>Watch History</h2>
                    <h3>Jun 6</h3>
                    <VideoRow
                        views="50M views"
                        subs="218M"
                        description="'Music can change the world'. T-Series is India's largest music-label and movie studio, believes in bringing the world close together..."
                        channel="T-Series"
                        title="The Punjaaban Song (Video) | Jug Jug Jiyo"
                        image="https://i.ytimg.com/vi/c6ri-MFdNLY/maxresdefault.jpg"
                    />
                    <h3>Jun 5</h3>
                    <VideoRow
                        views="177M views"
                        subs="218M"
                        description="'Music can change the world'. T-Series is India's largest music-label and movie studio, believes in bringing the world close together..."
                        channel="T-Series"
                        title="Agar Tum Sath Ho Maahi Ve | T-Series Mix Tape"
                        image="https://i.ytimg.com/vi/Q2S7CDuBTOc/maxresdefault.jpg"
                    />
                    <VideoRow
                        views="50M views"
                        subs="218M"
                        description="'Music can change the world'. T-Series is India's largest music-label and movie studio, believes in bringing the world close together..."
                        channel="T-Series"
                        title="The Punjaaban Song (Video) | Jug Jug Jiyo"
                        image="https://i.ytimg.com/vi/c6ri-MFdNLY/maxresdefault.jpg"
                    />
                    <VideoRow
                        views="177M views"
                        subs="218M"
                        description="'Music can change the world'. T-Series is India's largest music-label and movie studio, believes in bringing the world close together..."
                        channel="T-Series"
                        title="Agar Tum Sath Ho Maahi Ve | T-Series Mix Tape"
                        image="https://i.ytimg.com/vi/Q2S7CDuBTOc/maxresdefault.jpg"
                    />
                </div>
            </div>
        </div>
    )
}
export default History;