import React from 'react';
import { CardContainer, Thumbnail, Title, Description } from './styled';

const VideoCard = ({ title, description, thumbnail, url }) => {
  return (
    <CardContainer>
      <Thumbnail src={thumbnail} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
};

export default VideoCard;
