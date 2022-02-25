import React from 'react';
import {Header} from "../common/components/Header/Header";
import {Hamburger} from "../common/components/Hamburger/Hamburger";
import {Outlet} from "react-router-dom";
import styled from "styled-components";

export const Layout = () => {
  return (
    <div>
      <Header/>
      <Hamburger/>
      <OutletContainer>
        <Outlet/>
      </OutletContainer>
    </div>
  );
};
const OutletContainer = styled.div`
  position: absolute;
  width: calc(100% - 140px);
  height: calc(100% - 80px);
  right: 0;
  bottom: 0;
  padding: 15px 20px;
  display: flex;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.lightestGrey1};
`
