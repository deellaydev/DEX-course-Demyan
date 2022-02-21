import {BaseSyntheticEvent, FC} from "react";
import styled from "styled-components";
import {Input} from "./Input/Input";

interface switchProps {
  name: string
  value: boolean
  handleChange: (value: boolean) => void
}

export const Switch: FC<switchProps> = ({name, value, handleChange, ...attr}) => {

  const changeValue = (event: BaseSyntheticEvent) => {
    handleChange(event.target.checked)
  }

  return (
    <SwitchLabel>
      <HiddenCheckbox type={'checkbox'} checked={value} onChange={changeValue}/>
      <StyledCheckbox checked={value}>
        <CheckboxPoint checked={value}/>
      </StyledCheckbox>
    </SwitchLabel>
  );
};

const SwitchLabel = styled.label`
  cursor: pointer;
  display: flex;
`
const HiddenCheckbox = styled.input`
  appearance: none;
`
const StyledCheckbox = styled.div<{checked: boolean}>`
  width: 50px;
  height: 30px;
  border-radius: 20px;
  position: relative;
  background-color: ${({checked}) => checked ? '#e54f4f' : '#ef1515'};
`
const CheckboxPoint = styled.div<{checked: boolean}>`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 50%;
  left: ${({checked}) => checked ? '23px' : '2px'};
  transform: translateY(-50%);
  background: #eacfcf;
  border-radius: 50%;
  transition: .5s ;
`