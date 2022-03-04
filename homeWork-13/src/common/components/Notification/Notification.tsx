import React, {FC} from 'react';
import styled, {keyframes} from "styled-components";

interface NotificationProps {
  children?: string
}

export const Notification: FC<NotificationProps> = ({children, ...attr}) => {
  return (
    <StyledNotification>{children}</StyledNotification>
  );
};

const animateNotification = keyframes`
  0%{
    transform: translateX(100%);
  }
  40% {
    transform: translateX(-10%);
  }
  100% {
    transform: translateX(0%);
  }
`

const StyledNotification = styled.div`
  position: absolute;
  height: 40px;
  padding: 8px 16px;
  background-color: ${({theme}) => theme.colors.lightRed};
  border-radius: 4px;
  display: flex;
  align-items: center;
  color: ${({theme}) => theme.colors.white};
  top: 15px;
  right: 15px;
  animation: ${animateNotification} 1s ease forwards;
`


