import React from 'react';

const lightTheme = {
  isDarkMode: false,
  color: '#000000',
  backgroundColor: '#FFFFFF',
  cardTextColor: '#757575',
};

const darkTheme = {
  isDarkMode: true,
  color: '#FFFFFF',
  backgroundColor: '#303030',
  cardBackgroundColor: '#424242',
  cardTextColor: '#C7C7C7',
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
