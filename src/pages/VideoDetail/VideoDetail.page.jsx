import React from 'react';
import {
  VideoInformationContainer,
  GeneralContainer,
  SuggestionsContainer,
  IFrame,
} from './styled';

const VideoDetail = ({ video }) => {
  const { id, snippet } = video;
  return (
    <React.Fragment>
      <GeneralContainer>
        <VideoInformationContainer>
          <IFrame
            id="ytplayer"
            type="text/html"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            frameborder="0"
          ></IFrame>
          <div style={{ margin: '0px 0px 0px 20px' }}>
            <h1>{snippet.title}</h1>
            <h2>{snippet.channelTitle}</h2>
            <p>{snippet.description}</p>
          </div>
        </VideoInformationContainer>
        <SuggestionsContainer></SuggestionsContainer>
      </GeneralContainer>
    </React.Fragment>
  );
};

export default VideoDetail;
