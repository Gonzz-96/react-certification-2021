import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import VideoCard from '../../components/VideoCard';
import VideoDetail from '../VideoDetail';
import { GridContainer, Title } from './styled';

import { useVideosSearch } from '../../hooks/useVideosSearch';

const HomePage = () => {
  const [videoCards, setVideoCards] = useState([]);
  const [keyword, setKeyword] = useState('wizeline');
  const [selectedVideo, setSelectedVideo] = useState();
  const videos = useVideosSearch(keyword);

  useEffect(() => {
    videos.then((result) => {
      const newVideoCards = result.map((i) => {
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
      });
      setVideoCards(newVideoCards);
    });
    console.log(keyword);
  }, [keyword]);

  const onSubmit = (newKeyword) => {
    console.log(newKeyword);
    setKeyword(newKeyword);
  };

  let content;
  if (!selectedVideo) {
    content = (
      <React.Fragment>
        <Header onSubmit={onSubmit} />
        <Title>Welcome to my minichallenge :)</Title>
        <GridContainer>{videoCards}</GridContainer>
      </React.Fragment>
    );
  } else {
    content = (
      <React.Fragment>
        <Header onSubmit={onSubmit} />
        <VideoDetail video={selectedVideo} />
      </React.Fragment>
    );
  }

  return content;
};

export default HomePage;
