import React, {FC, InputHTMLAttributes} from 'react';
import styled from "styled-components";
import eye from '../../../assests/icons/eye.svg'
import closedEye from '../../../assests/icons/closed_eye.svg'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  label: string;
  type?: string
  error?: boolean;
}

export const Input: FC<InputProps> = ({label, type='text', error, ...attr}) => {
  const WrapperInput = styled.div`
  margin-bottom: 24px;
`
  const StyledLabel = styled.label`
  color: ${({theme}) => theme.colors.grey};
  font-size: 14px;
  display: block;
  margin-bottom: 8px;
`
  const ContainerInput = styled.div`
  display: inline;
  position: relative;
`
  const StyledInput = styled.input`
    background-color: ${({theme}) => theme.colors.lightestGrey1};
    height: 40px;
    max-width: 365px;
    width: 100%;
    border: ${({error, theme}: any) => error ? `1px solid ${theme.colors.lightestRed}` : 'none'};
    border-radius: 4px;
    color: ${({theme}) => theme.colors.darkGrey};
    font-family: inherit;
    font-weight: 500;
    padding: 0 25px 0 15px;
    font-size: 14px;

  &:hover {
      background-color:  ${({theme}) => theme.colors.lightestGrey};
  }
  &:focus {
    background-color: ${({theme}) => theme.colors.lightestGrey1};
    box-shadow: 0 0 5px #D9D9D9;
  }
  &:disabled {
    color: ${({theme}) => theme.colors.lightestGrey};
  }
`
  const StyledError = styled.div`
    color: ${({theme}) => theme.colors.lightestRed};
    font-size: 12px;
`
  const StyledInputIcon = styled.img`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  `

  const [typeInput, setTypeInput] = React.useState<string>(type)
  const showPassword = () => {
    setTypeInput(typeInput === "text" ? "password" : "text");
  }

  return (
    <WrapperInput>
      <StyledLabel>{label}</StyledLabel>
      <ContainerInput>
        <StyledInput type={typeInput}/>
        {type === 'password' ? <StyledInputIcon src={typeInput === 'text' ? eye : closedEye} onClick={showPassword}/> : null}
      </ContainerInput>
      {error ? <StyledError>Required</StyledError> : null}
    </WrapperInput>
  );
};
