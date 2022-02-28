import {combineReducers} from "@reduxjs/toolkit";
import authReducer from '../../modules/auth/authSlice'
import teamsReducer from '../../modules/teams/teamsSlice'
import playersReducer from '../../modules/players/playersSlice'


export const rootReducer = combineReducers({
  authReducer,
  teamsReducer,
  playersReducer,
})