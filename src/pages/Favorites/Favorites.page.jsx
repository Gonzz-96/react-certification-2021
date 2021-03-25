import React, { useContext, useEffect, useState } from 'react';
import VideoCard from '../../components/VideoCard';
import { Title, GridContainer } from './styled';
import ThemeContext from '../../context/ThemeContext';
import SearchVideosContext from '../../context/SearchVideosContext';
import { storage } from '../../utils/storage';

const Favorites = () => {
  const { theme } = useContext(ThemeContext);
  const { backgroundColor, color } = theme;

  const [favorites, setFavorites] = useState([]);
  const { dispatch: searchVideosDispatch } = useContext(SearchVideosContext);

  useEffect(() => {
    const favorites = storage.get('favorites') || [];
    setFavorites(favorites);
    searchVideosDispatch({ type: 'NEW_VIDEOS', payload: favorites });
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      <div style={{ backgroundColor }}>
        <Title theme={{ color }}>Favorites</Title>
        <GridContainer theme={{ color }}>
          {favorites.map((i) => {
            return <VideoCard video={i} />;
          })}
        </GridContainer>
      </div>
    </React.Fragment>
  );
};

export default Favorites;
