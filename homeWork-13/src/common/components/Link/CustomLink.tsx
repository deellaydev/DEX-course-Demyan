import React, {FC} from 'react';
import styled from "styled-components";

interface LinkProps {
  children?: string;
  onClick?: () => void;
}

export const CustomLink: FC<LinkProps> = ({children, onClick}) => {
  return (
    <StyledLink onClick={onClick}>{children}</StyledLink>
  );
};

const StyledLink = styled.a`
    padding-left: 5px;
    cursor: pointer;
    color: inherit;
    &:hover{
      color : ${({theme}) => theme.colors.red};
      text-decoration-line: underline;
    }
  `