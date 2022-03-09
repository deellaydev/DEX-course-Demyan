import React from 'react';
import './assests/style/style.css'
import {ThemeProvider} from "styled-components";
import {theme} from './assests/theme/theme'
import { Routes, Route, Navigate } from "react-router-dom";
import {Layout} from "./pages/Layout";
import {Login} from "./modules/auth/Components/Login";
import {Registration} from "./modules/auth/Components/Registration";
import {TeamAdd} from "./modules/teams/components/TeamAdd";
import {Teams} from "./modules/teams/components/Teams";
import {PlayerAdd} from "./modules/players/components/playerAdd";
import {Players} from "./modules/players/components/Players";
import {ProtectedRoute} from "./common/components/ProtectedRoute/ProtectedRoute";
import {TeamCard} from "./common/components/Card/TeamCard";
import {PlayerCard} from "./common/components/Card/PlayerCard";
import {CardHeader} from "./common/components/Card/CardHeader";
import {TeamUpdate} from "./modules/teams/components/TeamUpdate";
import {PlayerUpdate} from "./modules/players/components/PlayerUpdate";
import {SelectTeam} from "./common/components/Select/SelectTeam";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<ProtectedRoute><Layout/></ProtectedRoute>}>
            <Route index element={<Teams/>}/>
            <Route path='teams' element={<Teams/>}/>
            <Route path='teams/:teamId' element={<TeamCard/>}/>
            <Route path='teams/addTeam' element={<TeamAdd/>}/>
            <Route path='teams/:teamId/Update' element={<TeamUpdate/>}/>
            <Route path='players' element={<Players/>}/>
            <Route path='players/:playerId' element={<PlayerCard/>}/>
            <Route path='players/addPlayer' element={<PlayerAdd/>}/>
            <Route path='players/:playerId/Update' element={<PlayerUpdate/>}/>
          </Route>
          <Route path='login' element={<Login/>}/>
          <Route path='/registration' element={<Registration/>}/>
        </Routes>
    </ThemeProvider>
  );
}