import React, {FC} from 'react';
import Select from "react-select";
import {customStyles} from "./SelectTeam";
import styled from "styled-components";

const options = [
  { value: 'Center Forward', label: 'Center Forward' },
  { value: 'Guard Forward', label: 'Guard Forward' },
  { value: 'Forward', label: 'Forward' },
  { value: 'Center', label: 'Center' },
  { value: 'Guard', label: 'Guard' },
]


interface IOption {
  value: string;
  label: string;
}

interface SelectPositionProps {
  id: string;
  label?: string
  width?: string
  defaultValue?: IOption
  onChange: any
}

export const SelectPosition: FC<SelectPositionProps> = ({id, label, width, onChange, defaultValue}) => {
  return (
    <SelectWrapper width={width}>
      {label ? <StyledLabel htmlFor={id}>{label}</StyledLabel> : null}
      <Select defaultValue={defaultValue} options={options} id={id} styles={customStyles} onChange={onChange}/>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div<{width?: string}>`
  margin-bottom: 24px;
  max-width: ${({width}) => width ? width : '365px'}
`

const StyledLabel = styled.label`
  color: ${({theme}) => theme.colors.grey};
  font-size: 14px;
  display: block;
  margin-bottom: 8px;
`