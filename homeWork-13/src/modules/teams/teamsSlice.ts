import {ITeam, ITeams} from "../../api/dto/teams";
import {createSlice} from "@reduxjs/toolkit";
import {addTeamAction, getTeamByIdAction, getTeamsAction} from "./teamsAsyncAction";
import {AuthSlice} from "../auth/authSlice";

interface ITeamsState {
  teams: ITeams | null;
  team: ITeam | null;
  loading: boolean;
  error: boolean;
}

const initialState: ITeamsState = {
  teams: null,
  team: null,
  loading: true,
  error: false
}

export const TeamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getTeamsAction.pending, (state) => {
      state.loading = true
      state.error = false
    });
    builder.addCase(getTeamsAction.fulfilled, (state, action) => {
      state.loading = false
      state.error = false
      state.teams = action.payload
    });
    builder.addCase(getTeamsAction.rejected, (state) => {
      state.loading = false
      state.error = true
    })
    builder.addCase(addTeamAction.pending, (state) => {
      state.loading = true
      state.error = false
    });
    builder.addCase(addTeamAction.fulfilled, (state, action) => {
      state.loading = false
      state.error = false
    });
    builder.addCase(addTeamAction.rejected, (state) => {
      state.loading = false
      state.error = true
    });
    builder.addCase(getTeamByIdAction.pending, (state) => {
      state.loading = true
      state.error = false
    });
    builder.addCase(getTeamByIdAction.fulfilled, (state, action) => {
      state.loading = false
      state.error = false
      state.team = action.payload
    });
    builder.addCase(getTeamByIdAction.rejected, (state) => {
      state.loading = false
      state.error = true
    })
  }
})

export default TeamsSlice.reducer