import React from 'react';

const KeywordContext = React.createContext('');

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'NEW_WORD':
      return payload;
    case 'RESET':
      return 'wizeline';
    default:
      throw new Error('Ups, action not supported');
  }
};

export default KeywordContext;

export { reducer };
