import React from 'react';
import { CardContainer, Thumbnail, Title, Description } from './styled';

const VideoCard = ({ title, description, thumbnail, onClick, alt = 'Youtube Video' }) => {
  return (
    <CardContainer onClick={onClick}>
      <Thumbnail src={thumbnail} alt={alt} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
};

export default VideoCard;
