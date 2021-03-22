import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Thumbnail } from './styled';

const VideoSuggestion = ({ video, onClick }) => {
  return (
    <Link to={{ pathname: `/video/${video.id.videoId}`, state: { video } }}>
      <Container onClick={onClick}>
        <Thumbnail src={video.snippet.thumbnails.high.url} />
        <p style={{ marginRight: '5px', marginLeft: '5px', color: 'black' }}>
          {video.snippet.title}
        </p>
      </Container>
    </Link>
  );
};

export default VideoSuggestion;
