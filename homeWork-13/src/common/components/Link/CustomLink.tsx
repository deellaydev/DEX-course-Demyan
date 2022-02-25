import React, {FC} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

interface LinkProps {
  children?: string
  link: string
}

export const CustomLink: FC<LinkProps> = ({children, link, ...attr}) => {
  return (
    <StyledLink to={link}>{children}</StyledLink>
  );
};

const StyledLink = styled(Link)`
    padding-left: 5px;
    cursor: pointer;
    color: inherit;
    &:hover{
      color : ${({theme}) => theme.colors.red};
      text-decoration-line: underline;
    }
  `