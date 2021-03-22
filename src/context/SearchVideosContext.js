import React from 'react';

const SearchVideosContext = React.createContext([]);

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'NEW_VIDEOS':
      return [...payload];
    case 'APPEND':
      return [...state, ...payload];
    case 'RESET':
      return [];
    default:
      throw new Error('Ups, action not supported');
  }
};

export default SearchVideosContext;

export { reducer };
