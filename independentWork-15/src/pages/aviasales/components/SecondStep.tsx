import { FC } from "react";
import styled from "styled-components";
import {IData} from "../../../Interfaces/Data";
import {Input} from "../../../ui/Input/Input";

//Реализовать форму второго шага
//Сделать контейнер для кнопочек

interface SecondStepProps {
  data: IData,
  setData: (data: IData) => void,
  currentStep: number,
  setCurrentStep: any
}

export const SecondStep: FC<SecondStepProps> = ({data, setData, currentStep, setCurrentStep}) => {

  const currentDate = (new Date()).toISOString().slice(0,10)
  const checkDate = (departureDate: string, returnDate: string) => {

  }

  return <form action="#" onSubmit={() => setCurrentStep(++currentStep)}>
    <Input inputType={"date"} name={'departureDate'} id={'departureDate'} label={'Дата отправления'} placeholder={''} value={data.departureDate} handleChange={(e: any) => setData({...data, departureDate: e.target.value})} textError={'required'} min={currentDate}/>
    <Input inputType={"date"} name={'returnDate'} id={'returnDate'} label={'Дата возвращения'} placeholder={''} value={data.returnDate} handleChange={(e: any) => setData({...data, returnDate: e.target.value})} min={data.departureDate}/>
    <ButtonContainer>
      <StyledButton type={'button'} onClick={() => setCurrentStep(--currentStep)}>Назад</StyledButton>
      <StyledButton >Дальше</StyledButton>
    </ButtonContainer>
  </form>;
};
const StyledButton = styled.button`
  width: 50%;
  cursor: pointer;
`
const ButtonContainer = styled.div`
  margin-top: 15px;
`