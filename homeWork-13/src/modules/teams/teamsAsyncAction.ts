import {createAsyncThunk} from "@reduxjs/toolkit";
import {TeamsService} from "../../api/teams/TeamsService";
import {IAddTeam, IGetTeam, IGetTeams} from "../../api/dto/Teams";

export const getTeamsAction = createAsyncThunk(
  "teams/getTeams",
  async (params?:IGetTeams) => {
    try{
      const url = params ? `/api/Team/GetTeams?Name=${params.name}&Page=${params.page}&PageSize=${params.pageSize}` : '/api/Team/GetTeams'
      const response = await new TeamsService().teamsGet(url)
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

export const addTeamAction = createAsyncThunk(
  "teams/addTeam",
  async (data: IAddTeam) => {
    try {
      const response = await new TeamsService().teamsAdd(JSON.stringify(data))
      if (!response) {
        throw new Error('Unable to add team')
      }
    }
    catch (e: any) {
      throw new Error(e.message)
    }
  }
)

export const getTeamByIdAction = createAsyncThunk(
  'teams/getTeamById',
  async (params: IGetTeam) => {
    try {
      const url = params ? `/api/Team/Get?id=${params.id}` : '/api/Team/Get'
      const response = await new TeamsService().getTeamById(url);
      if (!response) {
        throw new Error('Unable to get team by ID');
      }
      return response
    }
    catch (e: any) {
      throw new Error(e.message)
    }
  }
)