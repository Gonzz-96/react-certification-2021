import React from 'react';

import mockResponse from '../../mock/youtube-videos-mock.json';
import { UList } from './styled';

const Suggestions = ({ videos = mockResponse.items }) => {
  return (
    <UList>
      {videos.map((video) => {
        return (
          <li>
            <div>Helloo</div>
          </li>
        );
      })}
    </UList>
  );
};

export default Suggestions;
