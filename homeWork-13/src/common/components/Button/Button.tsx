import React, {ButtonHTMLAttributes, FC} from 'react';
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: string;
  addButton?: boolean;
}

export const Button: FC<ButtonProps> = ({children, addButton, ...attr}) => {
  const StyledButton = styled.button`
      background-color: ${({theme}) => theme.colors.red};
      border: none;
      border-radius: 4px;
      cursor: pointer;
      max-width: ${addButton ? '105px' : '365px'};
      width: 100%;
      height: 40px;
      font-size: 15px;
      line-height: 24px;
      color: #fff;
      
      &:hover{
        background: ${({theme}) => theme.colors.lightRed};
      }
      
      &:active{
        background: ${({theme}) => theme.colors.darkRed};
      }
      
      &:disabled{
        background: ${({theme}) => theme.colors.lightestGrey1};
        cursor: default;
        color: ${({theme}) => theme.colors.lightestGrey};
      }
    `

  return (
      <StyledButton {...attr}>{children}</StyledButton>
  );
};
