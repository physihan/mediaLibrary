import React, {PropTypes} from 'react';

const VideoPage = ({videos,onHandleSelectVideo,selectedVideo}) => {
    return (
        <div className="col-md-6">
            <h2>videos</h2>
            <div className="select-video">
                <div id={selectedVideo.id}>
                    <h6 className="title">{selectedVideo.description}</h6>
                    <video controls src={selectedVideo.mediaUrl} alt={selectedVideo.title}/>
                </div>
            </div>
            <div className="video-thumbnail">
                {videos.map((video, i) => (
                    <div key={i} onClick={onHandleSelectVideo.bind(this, video)}>
                    <video controls src={video.mediaUrl} alt={video.description} />
                    </div>
                ))}
            </div>
            
        </div>
    );
};

VideoPage.propTypes = {
    videos: PropTypes.array.isRequired,
  selectedVideo: PropTypes.object.isRequired,
  onHandleSelectVideo: PropTypes.func.isRequired

};

export default VideoPage;