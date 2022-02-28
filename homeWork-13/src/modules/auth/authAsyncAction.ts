import {createAsyncThunk} from "@reduxjs/toolkit";
import {ISignIn, ISignUp} from "../../api/dto/Auth";
import {AuthService} from "../../api/auth/AuthService";


export const registrationAction = createAsyncThunk(
  "auth/signUp",
  async (data:ISignUp) => {
    try {
      const response = await new AuthService().registrationService(JSON.stringify(data))
      if (!response) {
        throw new Error('Unable to SignUp')
      }
      return response
    }
    catch (e: any) {
      throw new Error(e.message)
    }
  }
);

export const loginAction = createAsyncThunk(
  "auth/signIn",
  async (data:ISignIn) => {
    try{
      const response = await new AuthService().loginService(JSON.stringify(data))
      if (!response) {
        throw new Error('Unable to SignIn')
      }
      return response
    }
    catch (e: any) {
      throw new Error(e.message)
    }
  }
)