import {baseRequest} from "./baseRequest";

export const AuthService = {
  login: async (login: string, password: string) => {
    try {
      const res = await baseRequest({
        url: "api/Auth/SignIn",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ login, password }),
      })
      if (res.status === 401) {
        throw new Error('Неправильный логин или пароль')
      }
      if (!res.ok) {
        throw new Error(res.status.toString())
      }

      return res.json()

    } catch (error : any) {
      console.error(error)
    }

  },

  registration: async (userName: string, login: string, password: string) => {
    try {
      const res = await baseRequest({
        url: "api/Auth/SignUp",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, login, password }),
      })
      if (res.status === 409) {
        throw new Error('Пользователь уже зарегестрирован')
      }
      if (!res.ok) {
        throw new Error(res.status.toString())
      }
      return res.json()

    } catch (error : any) {
      console.error(error)
    }
  },
}