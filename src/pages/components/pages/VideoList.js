import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
        // eslint-disable-next-line no-unreachable
    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default VideoList;