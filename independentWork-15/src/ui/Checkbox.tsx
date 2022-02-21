import React, {FC} from 'react';
import {IData} from "../Interfaces/Data";

interface CheckboxProps {
  value: boolean,
  checked: (value: any) => void,
  data: IData
}

export const Checkbox: FC<CheckboxProps> = ({value, checked, data}) => {
  return (
    <div>
      <input type={'checkbox'} checked={value} onChange={() => checked({...data, secondChecked: !data.secondChecked})}/>
      <label>Я красавчик!</label>
    </div>
  );
};
