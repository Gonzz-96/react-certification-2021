import React from 'react';
import { Container, Thumbnail } from './styled';

const VideoSuggestion = ({ video }) => {
  return (
    <Container>
      <Thumbnail src={video.snippet.thumbnails.high.url} />
      <p style={{ marginRight: '5px', marginLeft: '5px' }}>{video.snippet.title}</p>
    </Container>
  );
};

export default VideoSuggestion;
