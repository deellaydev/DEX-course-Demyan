import {createSlice} from "@reduxjs/toolkit";
import {IAuthResponse} from "../../api/dto/Auth";
import {loginAction, registrationAction} from "./authAsyncAction";
import {useNavigate} from "react-router-dom";

interface IAuthState {
  user: IAuthResponse | null;
  loading: boolean;
  error: boolean;
}

const initialState: IAuthState = {
  user: null,
  loading: false,
  error: false,
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signOut(state): void {
      state.user = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(registrationAction.pending, (state) => {
      state.loading = true
      state.error = false
    });
    builder.addCase(registrationAction.fulfilled, (state, action) => {
      state.loading = false
      state.error = false
      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('name', action.payload.name)
      localStorage.setItem('avatarUrl', action.payload.avatarUrl)
      state.user = action.payload
    });
    builder.addCase(registrationAction.rejected, (state) => {
      state.loading = false
      state.error = true
    });
    builder.addCase(loginAction.pending, (state) => {
      state.loading = true
      state.error = false
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.loading = false
      state.error = false
      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('name', action.payload.name)
      localStorage.setItem('avatarUrl', action.payload.avatarUrl)
      state.user = action.payload
    })
    builder.addCase(loginAction.rejected, (state) => {
      state.loading = false
      state.error = true
    })
  }
})

export default AuthSlice.reducer