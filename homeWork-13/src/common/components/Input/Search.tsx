import React, {FC} from 'react';
import styled from "styled-components";
import search from '../../../assests/icons/search.svg'

export const Search: FC = ({...attr}) => {

  const SearchWrapper = styled.div`
    position: relative;
    display: inline;
  `
  const StyledSearch = styled.input`
    background-color: ${({theme}) => theme.colors.lightestGrey1};
    height: 40px;
    max-width: 365px;
    width: 100%;
    border: none;
    border-radius: 4px;
    color: ${({theme}) => theme.colors.darkGrey};
    font-family: inherit;
    font-weight: 500;
    padding: 0 25px 0 15px;
    font-size: 14px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  `

  const StyledIconSearch = styled.img`
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  `
  return (
    <SearchWrapper>
      <StyledSearch type={'search'} placeholder={'Search...'}/>
      <StyledIconSearch src={search}/>
    </SearchWrapper>
  );
};