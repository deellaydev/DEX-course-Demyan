import React, {FC, InputHTMLAttributes} from 'react';
import styled from "styled-components";
import eye from '../../../assests/icons/eye.svg'
import closedEye from '../../../assests/icons/closed_eye.svg'
import addPhoto from '../../../assests/icons/add_photo.svg'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  label?: string;
  id: string;
  type?: string
  errorMessage?: string;
  register?: any;
  name?:string;
  width?:string
}

export const Input: FC<InputProps> = ({label, id, type='text', errorMessage, register, name, width, ...attr}) => {


  const [typeInput, setTypeInput] = React.useState<string>(type)
  const showPassword = () => {
    setTypeInput(typeInput === "text" ? "password" : "text");
  }

  return (
    <WrapperInput>
      {label ? <StyledLabel htmlFor={id}>{label}</StyledLabel> : null}
      <ContainerInput inputType={type}>
        {type === 'file' ? <InputFileLabel>
            <StyledFileInput type={type} {...register(name)} {...attr}/>
            <FileInput/>
            <FileImg src={addPhoto}/>
          </InputFileLabel>
        :  <>
            <StyledInput width={width} type={typeInput} id={id} {...register(name)} {...attr}/>
            {type === 'password' ? <StyledInputIcon src={typeInput === 'text' ? eye : closedEye} onClick={showPassword}/> : null}
           </>
        }
      </ContainerInput>
      {errorMessage ? <StyledError>{errorMessage}</StyledError> : null}
    </WrapperInput>
  );
};

const WrapperInput = styled.div`
  margin-bottom: 24px;
`
const StyledLabel = styled.label`
  color: ${({theme}) => theme.colors.grey};
  font-size: 14px;
  display: block;
  margin-bottom: 8px;
`
const ContainerInput = styled.div<{inputType: string}>`
  display: flex;
  width: ${({inputType}) => (inputType === 'file') ? '335px' : '100%'};
  position: relative;
`
const StyledInput = styled.input<{width: string}>`
    background-color: ${({theme}) => theme.colors.lightestGrey1};
    height: 40px;
    max-width: ${({width}) => width ? width : '365px'};
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
const StyledFileInput = styled.input`
  display: none;
`
const InputFileLabel = styled.label`
  max-width: 335px;
  width: 100%;
  height: 260px;
  background: ${({theme}) => theme.colors.lightGrey};
  opacity: .6;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`
const FileInput = styled.div`
  
`
const FileImg = styled.img`
  
`