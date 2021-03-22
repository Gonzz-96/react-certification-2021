import React, { useContext, useState } from 'react';

import VideoCard from '../../components/VideoCard';
import { GridContainer, Title } from './styled';

import { useVideosSearch } from '../../hooks/useVideosSearch';
import ThemeContext from '../../context/ThemeContext';

const HomePage = () => {
  const videos = useVideosSearch();
  const { theme } = useContext(ThemeContext);

  const { backgroundColor, color } = theme;

  return (
    <React.Fragment>
      <div style={{ backgroundColor }}>
        <Title theme={{ color }}>Welcome to my minichallenge :)</Title>
        <GridContainer theme={{ color }}>
          {videos.map((i) => {
            const { title, description, thumbnails } = i.snippet;
            return (
              <VideoCard
                id={i.id.videoId}
                title={title}
                description={description}
                thumbnail={thumbnails.high.url}
              />
            );
          })}
        </GridContainer>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
