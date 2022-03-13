import React, {useState} from 'react';
import {Header} from "../common/components/Header/Header";
import {Hamburger} from "../common/components/Hamburger/Hamburger";
import {Outlet, useLocation} from "react-router-dom";
import styled from "styled-components";

export const Layout = () => {

  const [menuState, setMenuState] = useState(false)
  const handleMenuSetState = () => {
    setMenuState(!menuState)
  }

  return (
    <div>
      <Header handleMenu={handleMenuSetState}/>
      <ContentContainer>
        <Hamburger adaptiveState={menuState}/>
        <OutletContainer>
          <Outlet/>
        </OutletContainer>
      </ContentContainer>
    </div>
  );
};
const OutletContainer = styled.div`
  width: calc(100% - 140px);
  right: 0;
  bottom: 0;
  padding: 15px 20px;
  display: flex;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.lightestGrey1};
  @media (max-width: 950px) {
    width: 100%;
  }
`
const ContentContainer = styled.div`
  display: flex;
  min-height: calc(100vh - 80px);
`