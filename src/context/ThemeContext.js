import React from 'react';

const lightTheme = {
  color: 'black',
  backgroundColor: 'white',
};

const darkTheme = {
  color: 'white',
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
