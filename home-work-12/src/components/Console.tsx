import React, { useState } from 'react';
import { ConsoleLine } from './ConsoleLine';
import { useDispatch, useSelector } from 'react-redux';
import { log } from 'util';

export const Console = () => {
  const path = useSelector((state: any) => state.path);
  const message = useSelector((state: any) => state.message);
  const error = useSelector((state: any) => state.error);
  const dispatch = useDispatch();

  const [lines, setLines] = useState([{ type: 'path', content: path }]);

  const onKeyPress = (e: any) => {
    if (e.keyCode === 13) {
      if (message !== '') {
        setLines([...lines, { type: 'message', content: message }]);
        dispatch({ type: 'REMOVE_MESSAGE' });
      } 
      if (error){
          setLines([...lines, {type: 'error', content: 'ERROR'}])
          dispatch({type: 'REMOVE_ERROR'})
      }
      else {
        setLines([...lines, { type: 'path', content: path }]);
      }
    }
  };

  return (
    <div className="console">
      <div className="console__inner">
        <h1 className="console__title">Console app</h1>
        <div onKeyDown={onKeyPress} className="lines__inner">
          {lines.map((line) => (
            <ConsoleLine type={line.type}>{line.content}</ConsoleLine>
          ))}
        </div>
      </div>
    </div>
  );
};
