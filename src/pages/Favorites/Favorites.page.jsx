import React, { useContext, useEffect, useState } from 'react';
import VideoCard from '../../components/VideoCard';
import { Title, GridContainer } from './styled';
import ThemeContext from '../../context/ThemeContext';
import { storage } from '../../utils/storage';

const Favorites = ({ videos = [] }) => {
  const { theme } = useContext(ThemeContext);
  const { backgroundColor, color } = theme;

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(storage.get('favorites') || []);
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
