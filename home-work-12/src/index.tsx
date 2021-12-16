import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface IState {
  path: Array<string>;
  error: boolean;
  message: string;
  lastCommands: Array<string>;
  positionCommand: number;
  nextCommand: string;
  prevCommand: string;
}

const initialState: IState = {
  path: ['C:/users>'],
  error: false,
  message: '',
  lastCommands: [],
  positionCommand: 0,
  nextCommand: '',
  prevCommand: ''
};

interface IInputReducer {
    type: string,
    payload?: string
}

const inputReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_DIRECTORY':
      return {
        ...state,
        path: [
          ...state.path,
          state.path[state.path.length - 1].slice(0, -1) +
            '/' +
            action.payload +
            '>',
        ],
        lastCommands: [...state.lastCommands, 'cd ' + action.payload]
      };
    case 'REMOVE_DIRECTORY':
      return {
        ...state,
        path: [
          ...state.path,
          state.path[state.path.length - 1].substring(
            0,
            state.path[state.path.length - 1].lastIndexOf('/')
          ) + '>',
        ],
        lastCommands: [...state.lastCommands, 'cd ' + action.payload]
      };
    case 'ADD_ERROR':
      return {
        ...state,
        error: true,
      };
    case 'REMOVE_ERROR':
      return {
        ...state,
        error: false,
      };
    case 'PRINT_MESSAGE':
      return {
        ...state,
        message: action.payload,
        lastCommands: [...state.lastCommands, 'print ' + action.payload]
      };
    case 'REMOVE_MESSAGE':
      return {
        ...state,
        message: '',
      };
    case 'NEXT_COMMAND':
      if (state.positionCommand === state.lastCommands.length - 1){
        return {
          ...state,
          nextCommand: state.lastCommands[state.positionCommand]
        }
      }
      else {
        return {
          ...state,
          nextCommand: state.lastCommands[state.positionCommand],
          positionCommand: state.positionCommand + 1
        }
      }
    case 'PREV_COMMAND':
      if (state.positionCommand === 0){
        return {
          ...state,
          nextCommand: state.lastCommands[state.positionCommand]
        }
      }
      else {
        return {
          ...state,
          nextCommand: state.lastCommands[state.positionCommand -1],
          positionCommand: state.positionCommand - 1
        }
      }
    default:
      return state;
  }
};

const store = createStore(inputReducer, composeWithDevTools(applyMiddleware()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
