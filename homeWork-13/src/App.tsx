import React from 'react';
import './assests/style/style.css'
import {ThemeProvider} from "styled-components";
import {theme} from './assests/style/theme'
import { Routes, Route, Navigate } from "react-router-dom";
import {Layout} from "./pages/Layout";
import {Login} from "./modules/auth/Login";
import {Registration} from "./modules/auth/Registration";
import {TeamAdd} from "./modules/teams/components/TeamAdd";
import {Teams} from "./modules/teams/components/Teams";
import {PlayerAdd} from "./modules/players/components/playerAdd";
import {Players} from "./modules/players/components/Players";


export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path='/' element={<RequireAuth><Layout/></RequireAuth>}>
            <Route index element={<Teams/>}/>
            <Route path='teams' element={<Teams/>}/>
            <Route path='teams/addTeam' element={<TeamAdd/>}/>
            <Route path='players' element={<Players/>}/>
            <Route path='players/addPlayer' element={<PlayerAdd/>}/>
          </Route>
          <Route path='login' element={<Login/>}/>
          <Route path='/registration' element={<Registration/>}/>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

function RequireAuth({children} : {children: JSX.Element}) {
  let auth = localStorage.getItem('token')
  if (!auth) {
    return <Navigate to='login' replace/>
  }
  return children
}