import React, { FC } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import leftArrow from '../../../assests/icons/left_arrow.svg'
import rightArrow from '../../../assests/icons/right-arrow.svg'



export interface PaginationProps {
  countPages: number;
}

export const Pagination: FC<PaginationProps> = ({countPages}) => {
  const StyledPagination = styled(ReactPaginate)`
  display: flex;
  & > li {
    margin: 0 5px;
    width: 40px;
    height: 40px;
  }
  & > li > a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    color:${({theme}) => theme.colors.grey};
    cursor: pointer;
    &:hover {
      background-color: ${({theme}) => theme.colors.lightestGrey};
    }
  }
  & > .active__page > a {
    background-color: ${({theme}) => theme.colors.red};
    color: ${({theme}) => theme.colors.white};
    &:hover {
      background-color: ${({theme}) => theme.colors.red};
    }
  }
  & > .disabled > a {
    cursor: default;
    &:hover {
      background-color: transparent;
    }
  }
`
  return (
    <StyledPagination pageCount={countPages} activeClassName="active__page" previousLabel={<img src={leftArrow}/>} nextLabel={<img src={rightArrow}/>}/>
  )
};