import React, { useContext, useState } from 'react';
import KeywordContext from '../../context/SearchContext';
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
  const { dispatch } = useContext(KeywordContext);

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
        <p style={{ color: 'white' }}>Dark Mode</p>
        <UserIcon src={`${process.env.PUBLIC_URL}/user_icon.png`} alt="User Icon" />
      </RightContent>
    </HeaderContainer>
  );
};

export default Header;
