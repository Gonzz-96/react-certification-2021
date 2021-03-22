import React, { useContext } from 'react';
import SearchVideosContext from '../../context/SearchVideosContext';

import VideoSuggestion from '../VideoSuggestion';
import { VideoList } from './styled';

const Suggestions = () => {
  const { searchVideos: videos } = useContext(SearchVideosContext);

  return (
    <VideoList>
      {videos
        .filter((item) => item.id.kind !== 'youtube#channel')
        .map((video) => (
          <VideoSuggestion video={video} />
        ))}
    </VideoList>
  );
};

export default Suggestions;
