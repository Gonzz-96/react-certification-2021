import React from 'react';
import Header from '../../components/Header';
import VideoCard from '../../components/VideoCard';

import { GridContainer, Title } from './styled';
import { items } from '../../mock/youtube-videos-mock.json';

const getVideoCardsFromList = (list) => {
  return list.map((i) => {
    const { snippet } = i;
    const { title, description, thumbnails } = snippet;
    return (
      <VideoCard
        title={title}
        description={description}
        thumbnail={thumbnails.high.url}
      />
    );
  });
};

const HomePage = () => {
  return (
    <>
      <Header />
      <Title>Welcome to my minichallenge :)</Title>
      <GridContainer>{getVideoCardsFromList(items)}</GridContainer>
    </>
  );
};

export { getVideoCardsFromList };

export default HomePage;
