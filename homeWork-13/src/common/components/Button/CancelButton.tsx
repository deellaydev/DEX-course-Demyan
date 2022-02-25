import React, {ButtonHTMLAttributes, FC} from 'react';
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export const CancelButton: FC<ButtonProps> = ({children, ...attr}) => {

  return (
      <StyledCancelButton {...attr}>{children}</StyledCancelButton>
  );
};
const StyledCancelButton = styled.button`
      background-color: ${({theme}) => theme.colors.white};
      border: 1px solid ${({theme}) => theme.colors.lightGrey};
      border-radius: 4px;
      height: 40px;
      max-width: 171px;
      width: 100%;
      font-size: 15px;
      color: ${({theme}) => theme.colors.lightGrey};
      cursor: pointer;
      
      &:hover {
        background-color: ${({theme}) => theme.colors.lightestGrey};
        border: 1px solid ${({theme}) => theme.colors.lightGrey};
      }
      
      &:active {
        background-color: ${({theme}) => theme.colors.lightGrey};
        color: ${({theme}) => theme.colors.grey};
        border: 1px solid ${({theme}) => theme.colors.grey};
      }
      
      &:disabled {
        background-color: ${({theme}) => theme.colors.lightestGrey1};
        color: ${({theme}) => theme.colors.lightestGrey};
        cursor: default;
      }
    `