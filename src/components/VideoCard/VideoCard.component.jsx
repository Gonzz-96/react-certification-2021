import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import { CardContainer, Thumbnail, Title, Description } from './styled';

const VideoCard = ({ title, description, thumbnail, onClick, alt = 'Youtube Video' }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <CardContainer onClick={onClick} theme={{ ...theme }}>
      <Thumbnail src={thumbnail} alt={alt} />
      <Title>{title}</Title>
      <Description theme={{ ...theme }}>{description}</Description>
    </CardContainer>
  );
};

export default VideoCard;
