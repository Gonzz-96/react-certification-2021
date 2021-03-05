import React from 'react';
import {
  VideoInformationContainer,
  GeneralContainer,
  SuggestionsContainer,
  IFrame,
} from './styled';

const VideoDetail = ({ video }) => {
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
        </VideoInformationContainer>
        <SuggestionsContainer></SuggestionsContainer>
      </GeneralContainer>
    </React.Fragment>
  );
};

export default VideoDetail;
