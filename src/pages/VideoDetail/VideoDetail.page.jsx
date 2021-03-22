import React, { useContext, useState } from 'react';
import ThemeContext from '../../context/ThemeContext';
import Suggestions from '../../components/Suggestions';
import { VideoInformationContainer, GeneralContainer, IFrame } from './styled';
import { useParams } from 'react-router';

const VideoDetail = ({ video, restOfVideos }) => {
  const { theme } = useContext(ThemeContext);

  const { id } = useParams();

  const onSelectedVideo = (video) => {};

  return (
    <React.Fragment>
      <GeneralContainer theme={{ ...theme }}>
        <VideoInformationContainer>
          <IFrame
            id="ytplayer"
            type="text/html"
            src={`https://www.youtube.com/embed/${id}`}
            frameborder="0"
          ></IFrame>
          <div style={{ margin: '0px 0px 0px 20px' }}>
            <h1>{'snippet.title'}</h1>
            <h2>{'snippet.channelTitle'}</h2>
            <p>{'snippet.description'}</p>
          </div>
        </VideoInformationContainer>
        <Suggestions videos={restOfVideos} onSelectedVideo={onSelectedVideo} />
      </GeneralContainer>
    </React.Fragment>
  );
};

export default VideoDetail;
