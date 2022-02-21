import React, {FC, useState} from "react";
import { FirstStep } from "./components/FirstStep";
import { SecondStep } from "./components/SecondStep";
import { ThirdStep } from "./components/ThirdStep";
import {StepIndicator} from "./components/StepsIndicator";
import styled from "styled-components";
import {IData} from "../../Interfaces/Data";

//Создать компонент stepsIndicator
//Добавить формы с переходом по шагам

interface AviasalesProps {
  data: IData;
  setData: (data: IData) => void
}

export const Aviasales: FC<AviasalesProps> = ({data, setData}) => {

  const [currentStep, setCurrentStep] = useState<number>(1)


  return (
    <div>
      <StepIndicator currentStep={currentStep} changeStep={setCurrentStep}/>
      {currentStep === 1 ? <FirstStep data={data} setData={setData} currentStep={currentStep} setCurrentStep={setCurrentStep}/>
        : currentStep === 2 ? <SecondStep data={data} setData={setData} currentStep={currentStep} setCurrentStep={setCurrentStep}/>
        : <ThirdStep data={data} setData={setData} currentStep={currentStep} setCurrentStep={setCurrentStep}/>}
    </div>
  );
};

const Title = styled.h1`
  text-align: center;
`