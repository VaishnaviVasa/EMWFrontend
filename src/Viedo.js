import React, { useState } from 'react';
import SearchBar from "./SearchBar";
import FilterButtons from "./FilterButton";
import VideoList from "./VideoList";
const VideoRecommendations = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [videos, setVideos] = useState([
      { id: 1, title: 'How Chronic Stress Affects Your Brain', thumbnail: 'v1.png' },
      { id: 2, title: 'How Stress affects your body', thumbnail: 'v2.png' },
      { id: 3, title: 'How Stress Can Make You Sick', thumbnail: 'v1.png' },
    ]);
  
    const handleSearch = (term) => {
      setSearchTerm(term);
      // Fetch and update videos based on searchTerm
      console.log('Searching for:', term);
    };
  
    const handleFilter = (filter) => {
      // Fetch and update videos based on filter
      console.log('Filter:', filter);
    };
  
    return (
      <div className="video-recommendations">
        <h1>Video Recommendations</h1>
        <SearchBar onSearch={handleSearch} />
        <FilterButtons onFilter={handleFilter} />
        <VideoList videos={videos} />
      </div>
    );
  };
  
  export default VideoRecommendations;