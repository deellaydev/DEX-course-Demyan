import { FC } from "react";
import styled from "styled-components";
import {Input} from "../../../ui/Input/Input";
import {IData} from "../../../Interfaces/Data";

//Реализовать форму первого шага

interface FirstStepProps {
  data: IData,
  setData: (data: IData) => void,
  currentStep: number,
  setCurrentStep: any
}

export const FirstStep: FC<FirstStepProps> = ({data, setData, currentStep, setCurrentStep}) => {

  return (
    <FormContainer action="#" onSubmit={() => setCurrentStep(++currentStep)}>
      <Input inputType={"text"} name={'from'} id={'from'} label={'Откуда'} placeholder={''} value={data.where} handleChange={(e: any) => setData({...data, where: e.target.value})} pattern={'^[A-ZА-ЯЁ]{1}[a-zа-яё]+$'} textError={'required'}/>
      <Input inputType={"text"} name={'to'} id={'to'} label={'Куда'} placeholder={''} value={data.whence} handleChange={(e: any) => setData({...data, whence: e.target.value})} pattern={'^[A-ZА-ЯЁ]{1}[a-zа-яё]+$'}/>
      <StyledButton>Дальше</StyledButton>
    </FormContainer>
  )
};
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
`
const StyledButton = styled.button`
  margin-top: 15px;
  cursor: pointer;
`