import React from 'react';
import Header from '../../components/Header';
import VideoCard from '../../components/VideoCard';

import { GridContainer, Title } from './styled';
import { items } from '../../mock/youtube-videos-mock.json';

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <Title>Welcome to my minichallenge :)</Title>
      <GridContainer>
        {items.map((i) => {
          const { title, description, thumbnails } = i.snippet;
          return (
            <VideoCard
              title={title}
              description={description}
              thumbnail={thumbnails.high.url}
            />
          );
        })}
      </GridContainer>
    </React.Fragment>
  );
};

export default HomePage;
