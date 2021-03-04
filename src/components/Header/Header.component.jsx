import React, { useState } from 'react';
import {
  HeaderContainer,
  LeftContent,
  RightContent,
  MenuIcon,
  SearchBar,
  UserIcon,
} from './styled';

const Header = ({ onSubmit }) => {
  const [text, setText] = useState('');

  return (
    <HeaderContainer>
      <LeftContent>
        <MenuIcon src={`${process.env.PUBLIC_URL}/menu_icon.png`} alt="Menu Icon" />
        <form
          style={{ height: '30px' }}
          onSubmit={(e) => {
            onSubmit(text);
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
