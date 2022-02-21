import React, {FC} from 'react';
import styled from "styled-components";

interface SelectProps {
  value: string,
  handleChange: (value: any) => void
}

export const Select: FC<SelectProps> = ({value, handleChange}) => {
  return (
    <SelectContainer>
      <p>Класс</p>
      <select name={'selectClass'} value={value} onChange={handleChange}>
        <option value={'>Супер эконом'}>Супер эконом (стоячий)</option>
        <option value={'Эконом'}>Эконом (табурет)</option>
        <option value={'Бизнес'}>Бизнес (кресло dxRacer)</option>
      </select>
    </SelectContainer>
  );
};
const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`