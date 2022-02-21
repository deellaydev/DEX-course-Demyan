import { FC } from "react";
import {IData} from "../../Interfaces/Data";
import styled from "styled-components";

interface InputFileProps{
  data: IData;
  setData:(data: IData) => void;
}

export const InputFile: FC<InputFileProps> = ({data, setData}) => {
  return (
    <StyledInputFile value={data.photo} onChange={(e) => setData({...data, photo:e.target.value})} type="file" accept="image/*,image/jpeg"/>
  );
};


const StyledInputFile = styled.input`
  max-width:150px;
  ::-webkit-file-upload-button {
    visibility: hidden;
  }
  ::before {
    content: "Загрузить фото";
    color: white;
    background: #000;
    border-radius: 50px;
    padding: 10px 15px;
    cursor: pointer;
  }
`