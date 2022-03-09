import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {IPlayer, IPlayers} from "../../api/dto/players";
import {addPlayerAction, getPlayerByIdAction, getPlayersAction} from "./playersAsyncAction";
import {getTeamByIdAction} from "../teams/teamsAsyncAction";
import {RootState} from "../../core/redux/store";

interface IPlayersState {
  players: IPlayers | null,
  player: IPlayer | null,
  loading: boolean,
  error: boolean
}

/* interface IPlayersState {
  loading: boolean;
  count: number;
  page: number;
  size: number;
  error: boolean;
}

const playersAdapter = createEntityAdapter();

export const playersSelectors = playersAdapter.getSelectors((state:RootState) => state.playersReducer);

const initialState:IPlayersState = playersAdapter.getInitialState({
  loading: false,
  count:6,
  page:1,
  size:6,
  error: false,
});

export const PlayersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    addPlayerReducer(state,action){
      playersAdapter.addOne(state,action);
    },
    changePlayerReducer(state,action){
      playersAdapter.updateOne(state,action);
    },
    removePlayerReducer: playersAdapter.removeOne
  },
  extraReducers: {

  }
}) */

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