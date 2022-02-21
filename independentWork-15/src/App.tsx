import React, {FC, useState} from "react";
import "./styles.css";
import { Aviasales } from "./pages/aviasales/Aviasales";
import styled, {ThemeProvider} from "styled-components";
import {theme} from './assets/theme'
import {Input} from "./ui/Input/Input";
import {Switch} from "./ui/Switch";
import {FirstStep} from "./pages/aviasales/components/FirstStep";
import {StepIndicator} from "./pages/aviasales/components/StepsIndicator";
import {IData} from "./Interfaces/Data";

export const App: FC = () => {

  const defaultData: IData = {
    whence: '',
    where: '',
    departureDate: '',
    returnDate: '',
    ticketNumbers: '',
    ticketClass: '',
    soberPilot: false,
    secondChecked: false,
    photo: ''
  }

  const [data, setData] = useState<IData>(defaultData)

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppContainer>
          <Title>Авиасейлс курильщика</Title>
          <Aviasales data={data} setData={setData}/>
        </AppContainer>

      </div>
    </ThemeProvider>
  );
};
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  width: 100%;
`
const Title = styled.h1`
  text-align: center;
`
const ProviderButton = styled.div`
  width: 90px;
  height: 60px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 30px;
  border: 1px solid black;
  margin: 0 30px;
  cursor: pointer;
  &:hover {
    background-color: ${({theme}) => theme.colors.secondary};
  }
`
const ProviderButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`