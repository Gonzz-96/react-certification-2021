import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: 8vh;
  width: 100%;
  padding: 0 20px 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1c5476;
`;

const LeftContent = styled.div`
  height: 50%;
  width: 50%;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const RightContent = styled.div`
  height: 50%;
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 900px) {
    width: 0%;
    display: none;
  }
`;

const MenuIcon = styled.img`
  border-radius: 30px;
  cursor: pointer;
`;

const SearchBar = styled.input`
  width: 240px;
  height: 100%;
  font-size: 1rem;
  margin-left: 50px;
  border: none;
  border-radius: 30px;
  padding: 0 5px 0 5px;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const UserIcon = styled(MenuIcon)`
  height: 50px;
  margin-left: 20px;
  background-color: white;
`;

export { HeaderContainer, LeftContent, RightContent, MenuIcon, UserIcon, SearchBar };
