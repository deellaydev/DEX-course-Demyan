import {ITheme} from 'styled-components'

export const theme : ITheme = {
  colors: {
    primary: "grey",
    secondary: "red"
  }
}
declare module 'styled-components' {
  export interface ITheme {
    colors: {
      primary: string;
      secondary: string;
    }
  }
}