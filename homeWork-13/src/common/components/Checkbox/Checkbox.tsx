import React, {FC} from 'react';
import styled from "styled-components";

interface CheckboxProps {
  children?:string
  disabled?: boolean
}

export const Checkbox: FC<CheckboxProps> = ({disabled, children, ...attr}) => {

  return (
    <CheckboxWrapper>
      <StyledLabelCheckbox>
        <StyledCheckbox disabled={disabled} type={'checkbox'}/>
        <StyledCheckboxShow/>
        <StyledCheckboxText>{children}</StyledCheckboxText>
      </StyledLabelCheckbox>
    </CheckboxWrapper>
  );
};
const CheckboxWrapper = styled.div`
    margin-bottom: 10px;
  `
const StyledLabelCheckbox = styled.label`
    padding-left: 7px;
    cursor: pointer;
    &:hover > span:nth-child(2) {
      border: 1px solid ${({theme}) => theme.colors.red};
    }
  `
const StyledCheckbox = styled.input`
    appearance: none;
    &:checked + span {
      background-color: ${({theme}) => theme.colors.red};
    }
    &:checked + span:after {
      content: '';
      background-image: url("../../../assests/icons/checkbox.svg");
      background-size: 7px 6px;
      background-color: #000;
      width: 7px;
      height: 7px;
    }
    &:disabled + span:nth-child(2) {
      border: 1px solid ${({theme}) => theme.colors.lightestGrey1};
    }
    &:disabled ~ span {
      color: ${({theme}) => theme.colors.lightestGrey};
    }
  `
const StyledCheckboxText = styled.span`
    color: ${({theme}) => theme.colors.grey};
    font-weight: 500;
  `
const StyledCheckboxShow = styled.span`
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 4px;
    border: 1px solid ${({theme}) => theme.colors.grey};
    margin-left: -15px;
    margin-top: 3px;
  `