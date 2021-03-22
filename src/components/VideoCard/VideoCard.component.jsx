import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../../context/ThemeContext';
import { CardContainer, Thumbnail, Title, Description } from './styled';

const VideoCard = ({ video }) => {
  const { theme } = useContext(ThemeContext);
  const { title, description, thumbnails } = video.snippet;

  return (
    <Link to={{ pathname: `/video/${video.id.videoId}`, state: { video } }}>
      <CardContainer theme={{ ...theme }}>
        <Thumbnail src={thumbnails.high.url} alt={title} />
        <Title>{title}</Title>
        <Description theme={{ ...theme }}>{description}</Description>
      </CardContainer>
    </Link>
  );
};

export default VideoCard;
