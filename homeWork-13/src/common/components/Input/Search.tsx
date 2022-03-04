import React, {BaseSyntheticEvent, FC} from 'react';
import styled from "styled-components";
import search from '../../../assests/icons/search.svg'

interface SearchProps {
  width?: string,
  value: string,
  onChange: (e: BaseSyntheticEvent) => void
}

export const Search: FC<SearchProps> = ({width = '',value,onChange, ...attr}) => {

  return (
    <SearchWrapper width={width}>
      <StyledSearch type={'search'} placeholder={'Search...'} value={value} onChange={onChange}/>
      <StyledIconSearch src={search}/>
    </SearchWrapper>
  );
};
const SearchWrapper = styled.div<{ width: string }>`
  position: relative;
  display: inline;
  max-width: ${({width}) => width ? width : '365px'};
  width: 100%;
`
const StyledSearch = styled.input`
  background-color: ${({theme}) => theme.colors.white};
  border: 0.5px solid ${({theme}) => theme.colors.lightestGrey};
  height: 40px;
  max-width: 365px;
  width: 100%;
  border-radius: 4px;
  color: ${({theme}) => theme.colors.darkGrey};
  font-family: inherit;
  font-weight: 500;
  padding: 0 25px 0 15px;
  font-size: 14px;
`

const StyledIconSearch = styled.img`
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`