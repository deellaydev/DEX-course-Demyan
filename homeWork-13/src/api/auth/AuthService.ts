import {baseRequest} from "../baseRequest";

export class AuthService {

  async loginService(data:string) {
    return await baseRequest('/api/Auth/SignIn', 'POST', data)
  }

  async registrationService(data:string) {
    return await baseRequest('/api/Auth/SignUp', 'POST', data)
  }

}