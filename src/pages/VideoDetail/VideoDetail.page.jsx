import React, { useState } from 'react';
import Suggestions from '../../components/Suggestions';
import { VideoInformationContainer, GeneralContainer, IFrame } from './styled';

const VideoDetail = ({ video, restOfVideos }) => {
  const [stateVideo, setVideo] = useState(video);
  const { id, snippet } = stateVideo;

  const onSelectedVideo = (video) => {
    setVideo(video);
  };

  return (
    <React.Fragment>
      <GeneralContainer>
        <VideoInformationContainer>
          <IFrame
            id="ytplayer"
            type="text/html"
            src={`https://www.youtube.com/embed/${id.videoId}`}
            frameborder="0"
          ></IFrame>
          <div style={{ margin: '0px 0px 0px 20px' }}>
            <h1>{snippet.title}</h1>
            <h2>{snippet.channelTitle}</h2>
            <p>{snippet.description}</p>
          </div>
        </VideoInformationContainer>
        <Suggestions videos={restOfVideos} onSelectedVideo={onSelectedVideo} />
      </GeneralContainer>
    </React.Fragment>
  );
};

export default VideoDetail;
