import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ThemeContext from '../../context/ThemeContext';

import { Container, Thumbnail } from './styled';

const VideoSuggestion = ({ video, onClick }) => {
  const history = useHistory();
  const { theme } = useContext(ThemeContext);

  return (
    <Container
      onClick={() => {
        history.push({ pathname: `/video/${video.id.videoId}`, state: { video } });
      }}
    >
      <Thumbnail src={video.snippet.thumbnails.high.url} />
      <p style={{ marginRight: '5px', marginLeft: '5px', color: theme.color }}>
        {video.snippet.title}
      </p>
    </Container>
  );
};

export default VideoSuggestion;
