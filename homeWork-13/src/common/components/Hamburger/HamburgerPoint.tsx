import React, {FC} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import styled from "styled-components";

interface HamburgerPointProps {
  navigateLink: string
  text: string
  children: any
  activeLinks: Array<string>
}

export const HamburgerPoint: FC<HamburgerPointProps> = ({navigateLink, text, activeLinks, children}) => {

  const navigate = useNavigate()
  let { pathname } = useLocation();
  if (pathname.split("/").indexOf("dashboard")) {
    pathname = pathname.split("/")[1];
  }

  return (
    <HamburgerPointWrapper onClick={() => navigate(`${navigateLink}`)} activeLinks={activeLinks} pathname={pathname}>
      <HamburgerImg width="30" height="30" viewBox="0 0 16 16" fill="#9C9C9C" xmlns="http://www.w3.org/2000/svg">
        {children}
      </HamburgerImg>
      <HamburgerText>{text}</HamburgerText>
    </HamburgerPointWrapper>
  );
};
const HamburgerPointWrapper = styled.div<{activeLinks: Array<string>, pathname: string}>`
    margin-bottom: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    svg, p {
      fill: ${({activeLinks, pathname, theme}) => activeLinks.includes(pathname) ? `${theme.colors.red}` : ''};
      color: ${({activeLinks, pathname, theme}) => activeLinks.includes(pathname) ? `${theme.colors.red}` : ''}
    }
    &:hover{
      svg {
        fill: ${({theme}) => theme.colors.red};
      }
      p {
        color: ${({theme}) => theme.colors.red};;
      }
    }
  `
const HamburgerImg = styled.svg`
width: 100%;
`
const HamburgerText = styled.p`
    font-size: 12px;
    color: ${({theme}) => theme.colors.lightGrey};
  `