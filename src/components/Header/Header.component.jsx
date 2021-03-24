import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import AuthContext from '../../context/AuthContext';
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
  const { auth } = useContext(AuthContext);
  const [text, setText] = useState(keyword);
  const history = useHistory();

  const userUrl = auth.avatarUrl || `${process.env.PUBLIC_URL}/user_icon.png`;

  return (
    <HeaderContainer>
      <LeftContent>
        <MenuIcon
          src={`${process.env.PUBLIC_URL}/menu_icon.png`}
          alt="Menu Icon"
          onClick={() => {
            history.push('/favorites');
          }}
        />
        <form
          style={{ height: '30px' }}
          onSubmit={(e) => {
            dispatchKeyword({ type: 'NEW_WORD', payload: text });
            e.preventDefault();
          }}
        >
          <SearchBar
            onClick={() => {
              history.push('/');
            }}
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

        <UserIcon
          src={userUrl}
          alt="User Icon"
          onClick={() => {
            history.push('/login');
          }}
        />
      </RightContent>
    </HeaderContainer>
  );
};

export default Header;
