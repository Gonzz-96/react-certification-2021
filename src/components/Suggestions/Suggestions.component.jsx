import React from 'react';

import mockResponse from '../../mock/youtube-videos-mock.json';
import VideoSuggestion from '../VideoSuggestion';
import { UList } from './styled';

const Suggestions = ({ videos = mockResponse.items, onSelectedVideo }) => {
  return (
    <UList>
      {videos
        .filter((item) => item.id.kind !== 'youtube#channel')
        .map((video) => (
          <VideoSuggestion
            video={video}
            onClick={(e) => {
              onSelectedVideo(video);
              console.log('video changed');
            }}
          />
        ))}
    </UList>
  );
};

export default Suggestions;
