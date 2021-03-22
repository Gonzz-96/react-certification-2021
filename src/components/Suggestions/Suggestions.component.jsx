import React from 'react';

import mockResponse from '../../mock/youtube-videos-mock.json';
import VideoSuggestion from '../VideoSuggestion';
import { VideoList } from './styled';

const Suggestions = ({ videos = mockResponse.items }) => {
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
