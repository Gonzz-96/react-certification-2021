import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../../context/ThemeContext';
import { CardContainer, Thumbnail, Title, Description } from './styled';

const VideoCard = ({ id, title, description, thumbnail, alt = 'Youtube Video' }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Link to={`/video/${id}`}>
      <CardContainer theme={{ ...theme }}>
        <Thumbnail src={thumbnail} alt={alt} />
        <Title>{title}</Title>
        <Description theme={{ ...theme }}>{description}</Description>
      </CardContainer>
    </Link>
  );
};

export default VideoCard;
