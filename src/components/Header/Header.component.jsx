import React from 'react';
import {
  HeaderContainer,
  LeftContent,
  RightContent,
  MenuIcon,
  SearchBar,
  UserIcon,
} from './styled';

const Header = () => {
  return (
    <HeaderContainer>
      <LeftContent>
        <MenuIcon src={`${process.env.PUBLIC_URL}/menu_icon.png`} />
        <SearchBar />
      </LeftContent>
      <RightContent>
        <p style={{ color: 'white' }}>Dark Mode</p>
        <UserIcon src={`${process.env.PUBLIC_URL}/user_icon.png`} />
      </RightContent>
    </HeaderContainer>
  );
};

export default Header;
