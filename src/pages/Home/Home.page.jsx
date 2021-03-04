import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import VideoCard from '../../components/VideoCard';

import { GridContainer, Title } from './styled';

import { useVideos } from '../../client/useVideos';

const HomePage = () => {
  const videos = useVideos();
  const [videoCards, setVideoCards] = useState([]);

  useEffect(() => {
    videos.then((result) => {
      const newVideoCards = result.map((i) => {
        const { title, description, thumbnails } = i.snippet;
        return (
          <VideoCard
            title={title}
            description={description}
            thumbnail={thumbnails.high.url}
          />
        );
      });
      setVideoCards(newVideoCards);
    });
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Title>Welcome to my minichallenge :)</Title>
      <GridContainer>{videoCards}</GridContainer>
    </React.Fragment>
  );
};

export default HomePage;
