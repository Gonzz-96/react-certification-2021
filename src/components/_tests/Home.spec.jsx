import React from 'react';
import { render, screen } from '@testing-library/react';
import { getVideoCardsFromList } from '../../pages/Home/Home.page';

import { items } from './../../mock/youtube-videos-mock.json';

describe('Test Home page logic', () => {
  it('Check number of items is the same as number of components', () => {
    const result = getVideoCardsFromList(items);

    expect(result.length).toBe(items.length);
  });
});
