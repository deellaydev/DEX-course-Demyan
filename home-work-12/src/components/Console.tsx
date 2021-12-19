import React, {useEffect, useRef, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '..';
import { log } from 'util';

export const Console = () => {

  const path = useSelector((state: IState) => state.path);
  const history = useSelector((state: IState) => state.history);
  const lastCommands = useSelector((state: IState) => state.lastCommands);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  let commandNumber = lastCommands.length - 1

  const [inputText, setInputText] = useState('')

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  })

  const clearInputText = () => {
    if (inputRef.current){
      inputRef.current.value = ''
    }
  }

  function nextCommand() {
    if (commandNumber > 0){
     return lastCommands[commandNumber--]
    }
    return lastCommands[0] || ''
  }
  function prevCommand() {
    if (lastCommands.length - 1 === commandNumber) return '';
    return lastCommands[++commandNumber]
  }

  function onKeyPress(e: any) {
    if (e.keyCode === 13) {
      if (inputText.split(' ')[0] === 'cd'){
        dispatch({type: 'CHANGE_DIRECTORY', payload: inputText})
        clearInputText()
      }
      else if (inputText.split(' ')[0] === 'print'){
        dispatch({type: 'PRINT_MESSAGE', payload: inputText})
        clearInputText()
      } else {
        dispatch({type: 'ERROR', payload: `Команды '${inputText}' не существует. Доступные команды - 'cd' и 'print'`})
        clearInputText()
      }
    } else if (e.keyCode === 38) {
      // @ts-ignore
      inputRef.current.value = nextCommand()
    } else if (e.keyCode === 40) {
      // @ts-ignore
      inputRef.current.value = prevCommand()
    }
  };


  return (
    <div className="console">
      <div className="console__inner">
        <h1 className="console__title">Console app</h1>
        <ul>
          {history.map((line, index) => <li key={index}>{line}</li>)}
        </ul>
        <div style={{display: "flex"}}>
          <div>{path}</div>
          <input
            ref={inputRef}
            onKeyDown={onKeyPress}
            onChange={e => setInputText(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
