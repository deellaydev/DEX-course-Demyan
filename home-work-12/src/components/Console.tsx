import React, { useState } from 'react';
import { ConsoleLine } from './ConsoleLine';
import { useDispatch, useSelector } from 'react-redux';
import { log } from 'util';

export const Console = () => {
  const path = useSelector((state: any) => state.path);
  const message = useSelector((state: any) => state.message);
  const dispatch = useDispatch();

  const [lines, setLines] = useState([path]);

  const onKeyPress = (e: any) => {
    if (e.keyCode === 13) {
      setLines([...lines, path]);
    }
  };

  return (
    <div className="console">
      <div className="console__inner">
        <h1 className="console__title">Console app</h1>
        <div onKeyDown={onKeyPress} className="lines__inner">
          {lines.map((line) => (
            <ConsoleLine>{line}</ConsoleLine>
          ))}
        </div>
      </div>
    </div>
  );
};
