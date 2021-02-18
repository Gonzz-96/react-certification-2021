import React from 'react';
import Header from '../../components/Header';
import VideoCard from '../../components/VideoCard';

import { GridContainer, Title } from './styled';
import { items } from '../../mock/youtube-videos-mock.json';

const HomePage = () => {
  return (
    <>
      <Header />
      <Title>Welcome to my minichallenge :)</Title>
      <GridContainer>
        {items.map((i) => {
          const { snippet } = i;
          const { title, description, thumbnails } = snippet;
          return (
            <VideoCard
              title={title}
              description={description}
              thumbnail={thumbnails.high.url}
            />
          );
        })}
      </GridContainer>
    </>
  );
};

export default HomePage;
