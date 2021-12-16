import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lastCommands } from '../index';

export const ConsoleLine = (props: any) => {
  const dispatch = useDispatch();

  // const getText = () => {
  //     dispatch({type: 'INPUT', payload: 'asd'})
  // }

  let inputText = '';

  const showInput = (event: any) => {
    inputText = event.target.value;
  };

  const onKeyPress = (e: any) => {
    if (e.keyCode === 13) {
      if (inputText.slice(0, 3) === 'cd ' && inputText.slice(3, 5) !== '..') {
        dispatch({
          type: 'ADD_DIRECTORY',
          payload: inputText.slice(3).replace(/\s+/g, ''),
        });
      } else if (
        inputText.slice(0, 3) === 'cd ' &&
        inputText.slice(3).replace(/\s+/g, '') === '..'
      ) {
        dispatch({ type: 'REMOVE_DIRECTORY' });
      } else if (
        inputText.slice(0, 6) === 'print ' 
      ) {
          dispatch({ type: 'PRINT_MESSAGE',
          payload: inputText.slice(6).replace(/\s+/g, '')
        });
      }
    }
  };

  return (
    <div className="console__line">
      {props.children}
      <input onInput={showInput} onKeyDown={onKeyPress} autoFocus={true} />
    </div>
  );
};
