import {createAsyncThunk} from "@reduxjs/toolkit";
import {IAddPlayer, IGetPlayer, IGetPlayers} from "../../api/dto/players";
import {PlayersService} from "../../api/players/playersService";
import {IGetTeam} from "../../api/dto/teams";
import {TeamsService} from "../../api/teams/teamsService";

export const getPlayersAction = createAsyncThunk(
  "teams/getPlayers",
  async (params?:IGetPlayers) => {
    try{
      const url = params ? `/api/Player/GetPlayers?Name=${params.name}&TeamLds=${params.teamsLds}&Page=${params.page}&PageSize=${params.pageSize}` : '/api/Player/GetPlayers'
      const response = await new PlayersService().playersGet(url)
      if (!response) {
        throw new Error('Unable to get teams')
      }
      return response
    }
    catch (e: any) {
      throw new Error(e.message)
    }
  }
)

export const addPlayerAction = createAsyncThunk(
  "Player/addPlayer",
  async (data: IAddPlayer) => {
    try {
      const response = await new PlayersService().playersAdd(JSON.stringify(data))
      if (!response) {
        throw new Error('Unable to add team')
      }
    }
    catch (e: any) {
      throw new Error(e.message)
    }
  }
)

export const getPlayerByIdAction = createAsyncThunk(
  'teams/getPlayerById',
  async (params: IGetPlayer) => {
    try {
      const url = params ? `/api/Player/Get?id=${params.id}` : '/api/Player/Get'
      const response = await new PlayersService().getPlayerById(url);
      if (!response) {
        throw new Error('Unable to get player by ID');
      }
      return response
    }
    catch (e: any) {
      throw new Error(e.message)
    }
  }
)