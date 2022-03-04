import React from 'react';
import styled, {keyframes} from "styled-components";

export const Loading = () => {
  return (
    <Loader/>
  );
};

const animateLoader = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Loader = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid;
    border-color: ${({theme}) => theme.colors.red} transparent  ${({theme}) => theme.colors.red} transparent;
    animation: ${animateLoader} 1.2s linear infinite;
  }
`