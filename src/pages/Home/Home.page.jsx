import React, { useContext, useState } from 'react';
import Header from '../../components/Header';
import VideoCard from '../../components/VideoCard';
import VideoDetail from '../VideoDetail';
import { GridContainer, Title } from './styled';

import { useVideosSearch } from '../../hooks/useVideosSearch';
import ThemeContext from '../../context/ThemeContext';

const HomePage = () => {
  const [selectedVideo, setSelectedVideo] = useState();
  const videos = useVideosSearch();
  const { theme, dispatch } = useContext(ThemeContext);

  const { backgroundColor, color } = theme;

  setTimeout(() => {
    dispatch({ type: 'dark' });
  }, 5000);

  let content;
  if (!selectedVideo) {
    content = (
      <React.Fragment>
        <div style={{ backgroundColor }}>
          <Header />
          <Title theme={{ color }}>Welcome to my minichallenge :)</Title>
          <GridContainer theme={{ color }}>
            {videos.map((i) => {
              const { title, description, thumbnails } = i.snippet;
              return (
                <VideoCard
                  title={title}
                  onClick={() => {
                    setSelectedVideo(i);
                  }}
                  description={description}
                  thumbnail={thumbnails.high.url}
                />
              );
            })}
          </GridContainer>
        </div>
      </React.Fragment>
    );
  } else {
    content = (
      <React.Fragment>
        <Header />
        <VideoDetail video={selectedVideo} restOfVideos={videos} />
      </React.Fragment>
    );
  }

  return content;
};

export default HomePage;
