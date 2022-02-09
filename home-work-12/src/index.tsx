import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {stat} from "fs";

export interface IState {
  path: string;
  lastCommands: Array<string>;
  history: Array<string>
}

const initialState: IState = {
  path: 'C:/users>',
  lastCommands: [],
  history: []
};

const inputReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'CHANGE_DIRECTORY':
      if (action.payload === 'cd') {
        return {
          ...state,
          history: [...state.history, state.path + ' ' + action.payload],
          path: state.path,
          lastCommands: [...state.lastCommands, action.payload],
        }
      } else if (action.payload.split(' ')[1] === '..'){
        return {
          ...state,
          history: [...state.history, state.path + ' ' + action.payload],
          path: state.path.substring(0, state.path.lastIndexOf('/')) + '>',
          lastCommands: [...state.lastCommands, action.payload],
        }
      } else {
        if (state.path === ">") {
          return {
            ...state,
            history: [...state.history, state.path + ' ' + action.payload],
            path: state.path.slice(0, -1) + action.payload.slice(3) + ':>',
            lastCommands: [...state.lastCommands, action.payload],
          }
        } else {
          return {
            ...state,
            history: [...state.history, state.path + ' ' + action.payload],
            path: state.path.slice(0, -1) + '/' + action.payload.slice(3) + '>',
            lastCommands: [...state.lastCommands, action.payload],
          }
        }
      }
    case 'PRINT_MESSAGE':
      return {
        ...state,
        history: [...state.history, action.payload.slice(5)],
        lastCommands: [...state.lastCommands, action.payload],
      }
    case 'ERROR':
      return {
        ...state,
        history: [...state.history, action.payload],
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
