import {FC, useState} from "react";
import {Input} from "../../../ui/Input/Input";
import styled from "styled-components";
import {Switch} from "../../../ui/Switch";
import {IData} from "../../../Interfaces/Data";
import {Select} from "../../../ui/Select";
import {Checkbox} from "../../../ui/Checkbox";
import {InputFile} from "../../../ui/Input/InputFile";

//Реализовать форму третьего шага

interface ThirdStepProps {
  data: IData,
  setData: (data: IData) => void,
  currentStep: number,
  setCurrentStep: any
}

export const ThirdStep: FC<ThirdStepProps> = ({data, setData, currentStep, setCurrentStep}) => {

  return <form action="#">
    <StyledFieldset>
      <legend>Параметр</legend>
      <Input inputType={'number'} name={'ticketsNumber'} id={'ticketsNumber'} label={'Количество билетов'} placeholder={''} value={data.ticketNumbers} handleChange={(e: any) => setData({...data, ticketNumbers: e.target.value})} textError={'required'}/>
      <Select value={data.ticketClass} handleChange={(e: any) => setData({...data, ticketClass: e.target.value})}/>
      <SelectContainer>
        <p>Трезвый пилот</p>
        <Switch name={'pilot'} value={data.soberPilot} handleChange={(e: any) => setData({...data, soberPilot: e})}/>
      </SelectContainer>
    </StyledFieldset>
    {data.ticketClass === 'Бизнес' ?
      <StyledFieldset>
        <p>В бизнес классе летают только красивые люди</p>
        <Checkbox value={data.secondChecked} checked={setData} data={data}/>
        {data.secondChecked ?
          <SelectContainer>
            <p>Докажите</p>
            <InputFile data={data} setData={setData}/>
          </SelectContainer> : null}
      </StyledFieldset> : null}
    <ButtonContainer>
      <StyledButton type={'button'} onClick={() => setCurrentStep(--currentStep)}>Назад</StyledButton>
      <StyledButtonOrder type={'button'} onClick={() => console.log(data)}>Заказать</StyledButtonOrder>
    </ButtonContainer>
  </form>;
};
const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyledButton = styled.button`
  width: 50%;
  cursor: pointer;
`
const StyledButtonOrder = styled.button`
  border: none;
  width: 40%;
  height: 20px;
  background: aqua;
  border-radius: 5px;
  cursor: pointer;
`
const ButtonContainer = styled.div`
  margin-top: 15px;
  justify-content: space-between;
  display: flex;
`
const StyledFieldset = styled.fieldset`
  margin-bottom: 15px;
`