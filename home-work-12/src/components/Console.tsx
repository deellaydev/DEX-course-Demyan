import React, { useState } from 'react';
import { ConsoleLine } from './ConsoleLine';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '..';
import { log } from 'util';

export const Console = () => {

  const path = useSelector((state: IState) => state.path);
  const message = useSelector((state: IState) => state.message);
  const error = useSelector((state: IState) => state.error);
  const dispatch = useDispatch();

  const [lines, setLines] = useState([{ type: 'path', content: path[path.length - 1] }]);

  function onKeyPress(e: any) {
    if (e.keyCode === 13) {
      if (message) {
        setLines([...lines, { type: 'message', content: message }, { type: 'path', content: path[path.length - 1] }]);
        dispatch({ type: 'REMOVE_MESSAGE' });
      }
      else if (error) {
        setLines([...lines, { type: 'error', content: 'ERROR' }, { type: 'path', content: path[path.length - 1] }]);
        dispatch({ type: 'REMOVE_ERROR' });
      } else {
        setLines([...lines, { type: 'path', content: path[path.length - 1] }]);
      }
    }
  };


  return (
    <div className="console">
      <div className="console__inner">
        <h1 className="console__title">Console app</h1>
        <div onKeyDown={onKeyPress} className="lines__inner">
          {lines.map((line, i) => (
            <ConsoleLine key={i} type={line.type}>{line.content}</ConsoleLine>
          ))}
        </div>
      </div>
    </div>
  );
};
