import {createSlice} from "@reduxjs/toolkit";
import {IPlayer, IPlayers} from "../../api/dto/players";
import {addPlayerAction, getPlayerByIdAction, getPlayersAction} from "./playersAsyncAction";
import {getTeamByIdAction} from "../teams/teamsAsyncAction";

interface IPlayersState {
  players: IPlayers | null;
  player: IPlayer | null;
  loading: boolean;
  error: boolean;
}

const initialState: IPlayersState = {
  players: null,
  player: null,
  loading: true,
  error: false
}

export const PlayersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getPlayersAction.pending, (state) => {
      state.loading = true
      state.error = false
    });
    builder.addCase(getPlayersAction.fulfilled, (state, action) => {
      state.loading = false
      state.error = false
      state.players = action.payload
    });
    builder.addCase(getPlayersAction.rejected, (state) => {
      state.loading = false
      state.error = true
    })
    builder.addCase(addPlayerAction.pending, (state) => {
      state.loading = true
      state.error = false
    });
    builder.addCase(addPlayerAction.fulfilled, (state, action) => {
      state.loading = false
      state.error = false
    });
    builder.addCase(addPlayerAction.rejected, (state) => {
      state.loading = false
      state.error = true
    })
    builder.addCase(getPlayerByIdAction.pending, (state) => {
      state.loading = true
      state.error = false
    });
    builder.addCase(getPlayerByIdAction.fulfilled, (state, action) => {
      state.loading = false
      state.error = false
      state.player = action.payload
    });
    builder.addCase(getPlayerByIdAction.rejected, (state) => {
      state.loading = false
      state.error = true
    })
  }
})

export default PlayersSlice.reducer