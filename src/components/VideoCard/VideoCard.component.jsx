import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ThemeContext from '../../context/ThemeContext';
import { CardContainer, Thumbnail, Title, Description } from './styled';

const VideoCard = ({ video }) => {
  const { theme } = useContext(ThemeContext);
  const { title, description, thumbnails } = video.snippet;
  const history = useHistory();

  return (
    <CardContainer
      theme={{ ...theme }}
      onClick={() => {
        history.push({ pathname: `/video/${video.id.videoId}`, state: { video } });
      }}
    >
      <Thumbnail src={thumbnails.high.url} alt={title} />
      <Title>{title}</Title>
      <Description theme={{ ...theme }}>{description}</Description>
    </CardContainer>
  );
};

export default VideoCard;
