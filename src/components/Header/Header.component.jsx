import React, { useContext, useState } from 'react';
import KeywordContext from '../../context/SearchContext';
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
  const { theme, dispatch: dispatchTheme } = useContext(ThemeContext);
  const { keyword, dispatch: dispatchKeyword } = useContext(KeywordContext);
  const [text, setText] = useState(keyword);

  return (
    <HeaderContainer>
      <LeftContent>
        <MenuIcon src={`${process.env.PUBLIC_URL}/menu_icon.png`} alt="Menu Icon" />
        <form
          style={{ height: '30px' }}
          onSubmit={(e) => {
            dispatchKeyword({ type: 'NEW_WORD', payload: text });
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
          checked={theme.isDarkMode}
          onChange={(e) => {
            dispatchTheme({ type: theme.isDarkMode ? 'light' : 'dark' });
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
