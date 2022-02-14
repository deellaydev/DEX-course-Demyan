import React from 'react';
import './assests/style/style.css'
import {ThemeProvider} from "styled-components";
import {theme} from './assests/style/theme'
import {Login} from "./modules/auth/Login";
import {Registration} from "./modules/auth/Registration";
import {Checkbox} from "./common/components/Checkbox/Checkbox";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Login/>
        <Registration/>
      </div>
    </ThemeProvider>
  );
}
