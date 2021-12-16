import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

interface IState {
  path: string;
  error: boolean;
  message: string;
}

const initialState: IState = {
  path: 'C:/users>',
  error: false,
  message: '',
};

export let lastCommands: Array<string> = [];

const inputReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_DIRECTORY':
      lastCommands.push('cd');
      return {
        ...state,
        path: state.path.slice(0, -1) + '/' + action.payload + '>',
      };
    case 'REMOVE_DIRECTORY':
      lastCommands.push('cd');
      return {
        ...state,
        path: state.path.substring(0, state.path.lastIndexOf('/')) + '>',
      };
    case 'PRINT_MESSAGE':
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(inputReducer, composeWithDevTools(applyMiddleware()));

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
