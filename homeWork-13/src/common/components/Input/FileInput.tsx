import React, {FC} from 'react';
import addPhoto from "../../../assests/icons/add_photo.svg";
import styled from "styled-components";

interface FileInputProps {
  register: any;
  name: string;
  id: string
  onChange: any
  value?: string
}

export const FileInput: FC<FileInputProps> = ({register, name, id, onChange, value}) => {
  return (
    <InputFileLabel htmlFor={id}>
      {value ? <AddedPhoto src={value}/> : null}
      <StyledFileInput type={'file'} {...register(name)} id={id} accept={'image/x-png,image/jpeg'} onChange={onChange}/>
      <FileInputStyled/>
      <FileImg src={addPhoto}/>
    </InputFileLabel>
  );
};

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
  position: relative;
`
const FileInputStyled = styled.div`
  
`
const FileImg = styled.img`
  
`
const AddedPhoto = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain; 
`