export const theme = {
  colors: {
    white: '#fff',
    darkGrey: '#303030',
    grey: '#707070',
    lightGrey: '#9C9C9C',
    lightestGrey: '#D1D1D1',
    lightestGrey1: '#F6F6F6',
    darkRed: '#C60E2E',
    red: '#E4163A',
    lightRed: '#FF5761',
    lightestRed: '#FF768E',
    blue: '#344472',
    lightBlue: '#F5FBFF'
  }
}
declare module 'styled-components' {
  export interface ITheme {
    colors: {
      white: string
      darkGrey: string
      grey: string
      lightGrey: string
      lightestGrey: string
      lightestGrey1: string
      darkRed: string
      red: string
      lightRed: string
      lightestRed: string
      blue: string
      lightBlue: string
    }
  }
}