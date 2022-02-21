import React, { FC } from "react";
import styled, { css } from "styled-components";

//Сделать три кнопки, с индикацией выбранного шага в данный момент,
//Добавить колбэки для перехода по шагам по клику

interface IProps {
  currentStep: number;
  changeStep: (step: number) => void;
}

export const StepIndicator: FC<IProps> = ({ currentStep, changeStep }) => {

  return (
    <StepsContainer>
      <StepButton selected={currentStep === 1} onClick={() => changeStep(1)}>Куда</StepButton>
      <StepButton selected={currentStep === 2} onClick={() => changeStep(2)}>Когда</StepButton>
      <StepButton selected={currentStep === 3} onClick={() => changeStep(3)}>Как</StepButton>
    </StepsContainer>
  )
};

const StepButton = styled.div<{selected:boolean}>`
  margin: 0 10px;
  border: 1px solid black;
  padding: 15px 30px;
  border-radius: 10px;
  background: ${({selected}) => selected ? 'black' : 'transparent'};
  color: ${({selected}) => selected ? 'white' : 'black'};
  cursor: pointer;
`
const StepsContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
`
