import React, {ButtonHTMLAttributes, FC} from 'react';
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: string;
  width?: string;
}

export const Button: FC<ButtonProps> = ({children, width, ...attr}) => {

  return (
      <StyledButton width={width} {...attr}>{children}</StyledButton>
  );
};
const StyledButton = styled.button<{addButton?: boolean, width?: string}>`
      background-color: ${({theme}) => theme.colors.red};
      border: none;
      border-radius: 4px;
      cursor: pointer;
      max-width: ${({width}) => width ? width : '365px'};
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