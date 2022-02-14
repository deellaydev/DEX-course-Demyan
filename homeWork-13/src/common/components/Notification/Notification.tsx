import React, {FC} from 'react';
import styled from "styled-components";

interface NotificationProps {
  children?: string
}

export const Notification: FC<NotificationProps> = ({ children, ...attr}) => {
  const StyledNotification = styled.div`
    position: absolute;
    height: 40px;
    padding: 8px 16px;
    background-color: ${({theme}) => theme.colors.lightRed};
    border-radius: 4px;
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.colors.white};
  `
  return (
    <StyledNotification>{children}</StyledNotification>
  );
};
