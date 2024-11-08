import React from 'react';
import './VideoList.css'
const VideoList = ({ videos }) => {
  return (
    <div className="video-thumbnails">
      {videos.map((video) => (
        <div key={video.id} className="thumbnail">
            <img 
            src={video.thumbnail} 
            alt={video.title} 
          />
          <p>{video.title}</p>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
