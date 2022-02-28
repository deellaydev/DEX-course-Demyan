import React, {FC} from 'react';
import logo from "../../../assests/icons/logo.png";
import user from "../../../assests/icons/user.png";
import styled from "styled-components";

interface HeaderProps{

}

export const Header: FC<HeaderProps> = ({ ...attr}) => {

  return (
    <NavigationWrapper>
      <NavigationInner>
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
const NavigationWrapper = styled.div`
    width: 100%;
    box-shadow: 0 1px 10px rgba(209, 209, 209, 0.5);
  `
const NavigationInner = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 50px;
  `
const UserWrapper = styled.div`
    margin: 10px;
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
    `