import React from 'react';

const lightTheme = {
  color: '#000000',
  backgroundColor: '#FFFFFF',
};

const darkTheme = {
  color: '#FFFFFF',
  backgroundColor: '#303030',
};

const ThemeContext = React.createContext({});

const reducer = (state, { type }) => {
  switch (type) {
    case 'light':
      return lightTheme;
    case 'dark':
      return darkTheme;
    default:
      throw new Error('Theme not supported!');
  }
};

export default ThemeContext;

export { reducer, lightTheme };
