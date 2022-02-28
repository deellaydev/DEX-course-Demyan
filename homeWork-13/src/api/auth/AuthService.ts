import {baseRequest, post, get, put, remove} from "../baseRequest";

export class AuthService {

  async loginService(data:string) {
    return await post('/api/auth/SignIn', data)
  }

  async registrationService(data:string) {
    return await post('/api/auth/SignUp', data)
  }

}