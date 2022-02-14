import React, {FC} from 'react';
import styled from "styled-components";

interface LinkProps {
  children?: string
}

export const Link: FC<LinkProps> = ({children, ...attr}) => {
  const StyledLink = styled.p`
    text-decoration-line: underline;
    color: ${({theme}) => theme.colors.red};
    padding-left: 5px;
    cursor: pointer;
  `
  return (
    <StyledLink>{children}</StyledLink>
  );
};
