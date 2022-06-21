import React from "react";
import './VideoCard.css';
import {Avatar} from "@mui/material";


function VideoCard({image, title, channel, views, timestamp, channelImage}) {
    return(
        <div className="videoCard">
            <img className="videoCard-thumbnail" src={image} alt="" />
            <div className="videoCard-info">
                <Avatar className="video-avatar" alt={channel} src={channelImage} />
                <div className="video-text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} • {timestamp}</p>
                </div>
            </div>
        </div>
    )
}
export default VideoCard;