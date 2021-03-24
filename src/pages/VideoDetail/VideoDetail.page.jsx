import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../../context/ThemeContext';
import Suggestions from '../../components/Suggestions';
import { VideoInformationContainer, GeneralContainer, IFrame } from './styled';
import { useHistory, useLocation, useParams } from 'react-router';
import { storage } from '../../utils/storage';
import AuthContext from '../../context/AuthContext';

const VideoDetail = () => {
  const { id } = useParams();
  const { theme } = useContext(ThemeContext);
  const { auth } = useContext(AuthContext);
  const history = useHistory();
  const video = useLocation().state.video;
  const { snippet } = video;
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = storage?.get('favorites') || [];
    const isThisVideoFavorite =
      favorites.filter((i) => {
        return i.id.videoId === id;
      }).length === 1;

    setIsFavorite(isThisVideoFavorite);
  }, [id]);

  return (
    <React.Fragment>
      <GeneralContainer theme={{ ...theme }}>
        <VideoInformationContainer>
          <IFrame
            id="ytplayer"
            type="text/html"
            src={`https://www.youtube.com/embed/${id}`}
            frameborder="0"
          ></IFrame>
          <div style={{ margin: '0px 0px 0px 20px' }}>
            <h1>{snippet.title}</h1>
            <button
              type="button"
              onClick={() => {
                if (!auth) {
                  history.push('/login');
                  return;
                }
                const favorites = storage.get('favorites') || [];
                if (isFavorite) {
                  storage.set(
                    'favorites',
                    favorites.filter((i) => {
                      return i.id.videoId !== video.id.videoId;
                    })
                  );
                } else {
                  storage.set('favorites', [...favorites, video]);
                }
                setIsFavorite(!isFavorite);
              }}
            >
              {isFavorite ? 'Favorite! ✅' : 'Add To Favorite'}
            </button>
            <h2>{snippet.channelTitle}</h2>
            <p>{snippet.description}</p>
          </div>
        </VideoInformationContainer>
        <Suggestions />
      </GeneralContainer>
    </React.Fragment>
  );
};

export default VideoDetail;
