import React, {FC} from 'react';
import logo from "../../../assests/icons/logo.png";
import user from "../../../assests/icons/user.png";
import styled from "styled-components";

interface HeaderProps {
  handleMenu: () => void;
}

export const Header: FC<HeaderProps> = ({handleMenu}) => {

  return (
    <NavigationWrapper>
      <NavigationInner>
        <HamburgerMenu onClick={handleMenu}>
          <HamburgerLine/>
          <HamburgerLine/>
          <HamburgerLine/>
        </HamburgerMenu>
        <StyledLogo src={logo}/>
        <UserWrapper>
          <UserInner>
            <UserText>{localStorage.getItem('name')}</UserText>
            <UserLogo src={user}/>
          </UserInner>
        </UserWrapper>
      </NavigationInner>
    </NavigationWrapper>
  );
};
const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  background: #fffff;
  display: none;
  @media (max-width: 950px) {
    display: flex;
    cursor: pointer;
  }
`
const HamburgerLine = styled.div`
  display: block;
  width: 27px;
  margin: 4px;
  height: 3px;
  background: #000000;
`
const NavigationWrapper = styled.div`
  width: 100%;
  box-shadow: 0 1px 10px rgba(209, 209, 209, 0.5);
`
const NavigationInner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
`
const UserWrapper = styled.div`
  margin: 10px;
  @media (max-width: 950px) {
    display: none;
  }
`
const UserInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const UserText = styled.p`
  margin-right: 16px;
  color: ${({theme}) => theme.colors.darkGrey};
`
const UserLogo = styled.img`
  width: 30px;
  height: 30px;
`
const StyledLogo = styled.img`
  max-width: 191px;
  height: 48px;
  width: 100%;
  @media (max-width: 450px) {
    width: 135px;
    height: 35px;
  }
`