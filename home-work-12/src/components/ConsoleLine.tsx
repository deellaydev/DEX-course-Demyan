import React, {useEffect, useRef, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {IState} from "../index";

export const ConsoleLine = (props: any) => {

  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const nextCommand = useSelector((state: IState) => state.nextCommand)
  const prevCommand = useSelector((state: IState) => state.prevCommand)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  })

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
      } else if (inputText.slice(0, 6) === 'print ') {
        dispatch({
          type: 'PRINT_MESSAGE',
          payload: inputText.slice(6).replace(/\s+/g, ''),
        });
      } else {
        dispatch({
          type: 'ADD_ERROR',
        });
      }
    }
    if (e.keyCode === 38){
      dispatch({type: 'NEXT_COMMAND'})
      if (inputRef.current) {
        inputRef.current.value = nextCommand
      }
    }
    if (e.keyCode === 40){
      dispatch({type: 'PREV_COMMAND'})
      if (inputRef.current) {
        inputRef.current.value = prevCommand
      }
    }
  };

  if (props.type === 'path') {
    return (
      <div className="console__line">
        {props.children}
        <input ref={inputRef} onInput={showInput} onKeyDown={onKeyPress} autoFocus={true} />
      </div>
    );
  } if (props.type === 'message') {
    return (
        <div className="console__line">
            {props.children}
        </div>);
  } else {
    return (
      <div className="console__line" style={{ color: 'red' }}>
        {props.children}
      </div>
    );
  }
};
