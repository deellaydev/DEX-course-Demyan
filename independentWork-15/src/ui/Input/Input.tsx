import React, { FC } from "react";
import styled from "styled-components";
import {IData} from "../../Interfaces/Data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

interface InputProps {
  inputType: "text" | "password" | "number" | "date";
  name: string;
  id: string;
  label: string;
  placeholder: string;
  value?: string;
  handleChange?: any;
  pattern?: string;
  textError?: string;
  min?:string;
}
export const Input: FC<InputProps> = ({
  inputType,
  name,
  id,
  label,
  placeholder,
  value,
  handleChange,
  pattern,
  textError,
  min
}) => {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input type={inputType} name={name} id={id} placeholder={placeholder} value={value} onChange={handleChange} pattern={pattern} min={min} required/>
      {textError ? <StyledError>{textError}</StyledError> : null}
    </Container>
  );
};
const StyledError = styled.p`
  color: red;
  margin: 0;
  text-align: right;
`