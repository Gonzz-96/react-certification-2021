import React, { useContext } from 'react';
import VideoCard from '../../components/VideoCard';
import { Title, GridContainer } from './styled';
import ThemeContext from '../../context/ThemeContext';

const Favorites = ({ videos = [] }) => {
  const { theme } = useContext(ThemeContext);
  const { backgroundColor, color } = theme;

  return (
    <React.Fragment>
      <div style={{ backgroundColor }}>
        <Title theme={{ color }}>Favorites</Title>
        <GridContainer theme={{ color }}>
          {videos.map((i) => {
            return <VideoCard video={i} />;
          })}
        </GridContainer>
      </div>
    </React.Fragment>
  );
};

export default Favorites;
