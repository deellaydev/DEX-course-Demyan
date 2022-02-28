export interface ISignIn {
  login: string;
  password: string;
};

export interface ISignUp {
  userName: string;
  login: string;
  password: string;
};

export interface IAuthResponse {
  name: string;
  avatarUrl: string;
  token: string;
};