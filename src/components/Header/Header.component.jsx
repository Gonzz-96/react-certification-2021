import React, { useContext, useState } from 'react';
import ThemeContext from '../../context/ThemeContext';
import {
  HeaderContainer,
  LeftContent,
  RightContent,
  MenuIcon,
  SearchBar,
  UserIcon,
} from './styled';

const Header = () => {
  const [text, setText] = useState('');
  const { theme, dispatch } = useContext(ThemeContext);

  return (
    <HeaderContainer>
      <LeftContent>
        <MenuIcon src={`${process.env.PUBLIC_URL}/menu_icon.png`} alt="Menu Icon" />
        <form
          style={{ height: '30px' }}
          onSubmit={(e) => {
            dispatch({ type: 'NEW_WORD', payload: text });
            e.preventDefault();
          }}
        >
          <SearchBar
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </form>
      </LeftContent>
      <RightContent>
        <input
          type="checkbox"
          id="dark-mode"
          name="dark-mode"
          value={theme.isDarkMode}
          onChange={(e) => {
            dispatch({ type: theme.isDarkMode ? 'light' : 'dark' });
          }}
        />
        <label for="dark-mode" style={{ color: 'white' }}>
          Dark Mode
        </label>

        <UserIcon src={`${process.env.PUBLIC_URL}/user_icon.png`} alt="User Icon" />
      </RightContent>
    </HeaderContainer>
  );
};

export default Header;
