import React from 'react';
import { CardContainer, Thumbnail, Title, Description } from './styled';

const VideoCard = ({ title, description, thumbnail, alt = 'Youtube Video' }) => {
  return (
    <CardContainer>
      <Thumbnail src={thumbnail} alt={alt} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
};

export default VideoCard;
