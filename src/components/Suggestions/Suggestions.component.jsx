import React from 'react';

import mockResponse from '../../mock/youtube-videos-mock.json';
import VideoSuggestion from '../VideoSuggestion';
import { UList } from './styled';

const Suggestions = ({ videos = mockResponse.items }) => {
  return (
    <UList>
      {videos
        .filter((item) => item.id.kind !== 'youtube#channel')
        .map((video) => (
          <VideoSuggestion video={video} />
        ))}
    </UList>
  );
};

export default Suggestions;
