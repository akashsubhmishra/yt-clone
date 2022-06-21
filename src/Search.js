import React from "react";
import Header from './Header'
import Sidebar from './Sidebar'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined"
import './search.css'

function Search() {
    return (
        <div className="search">
        <Header />
      <div className='search-page'>
        <Sidebar className='search-side' />
        <div className='searchPage'>
            <div className='searchPage-filter'>
            <TuneOutlinedIcon />
            <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
              image="https://yt3.ggpht.com/hTPDN-Yr7vQCEJ-YxDyH6OiSAMUcPd0gW40Dxy4299GFFBPh3lumCXIZhMQnOVGV6n3a1GL4BQ=s176-c-k-c0x00ffffff-no-rj-mo"
              channel="T-Series"
              verified
              subs="218M"
              noOfVideos="17K"
              description="'Music can change the world'. T-Series is India's largest music-label and movie studio, believes in bringing the world close together..."
            />
            <hr />
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

export default Search;