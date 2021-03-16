import React, { useState } from 'react';
import Header from '../../components/Header';
import VideoCard from '../../components/VideoCard';
import VideoDetail from '../VideoDetail';
import { GridContainer, Title } from './styled';

import { useVideosSearch } from '../../hooks/useVideosSearch';

const HomePage = () => {
  const [selectedVideo, setSelectedVideo] = useState();
  const videos = useVideosSearch();

  let content;
  if (!selectedVideo) {
    content = (
      <React.Fragment>
        <Header />
        <Title>Welcome to my minichallenge :)</Title>
        <GridContainer>
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
