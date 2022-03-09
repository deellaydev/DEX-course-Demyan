import React, {FC} from 'react';
import Select, {StylesConfig} from "react-select";

const options = [
  { value: '6', label: '6' },
  { value: '12', label: '12' },
  { value: '24', label: '24' },
]

interface IOptionPage {
  value: string;
  label: string;
}

interface SelectPageProps {
  id: string;
  width?: string;
  value: IOptionPage;
  onChange: any;
}

export const SelectPage: FC<SelectPageProps> = ({width,id, value, onChange}) => {
  return (
    <Select options={options} styles={customStyles} id={id} menuPlacement={'top'} value={value} onChange={onChange}/>
  );
};

const customStyles: StylesConfig<any> = {
  container: (styles,) => ({
    ...styles,
    maxWidth: '88px',
    width: '100%',
  }),
  control: (styles, {isFocused, isMulti}) => ({
    ...styles,
    borderColor: "#D1D1D1",
    cursor: "pointer",
    padding: `1px`,
    border: isFocused ? 0 : 0,
    height: '40px',
    boxShadow: isFocused ? 'none' : 'none',
    ":hover": {
      color: "#FFFFFF",
      boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)'
    },
  }),
  option: (styles, {isSelected}) => ({
    ...styles,
    backgroundColor: isSelected ? "#C60E2E" : '',
    color: isSelected ? "#FFFFFF" : "#9C9C9C",
    cursor: "pointer",
    transition: "all 0.05s linear",
    ":hover": {
      backgroundColor: "#FF5761",
      color: "#FFFFFF",
    },
  }),

  multiValue: (styles) => ({
    ...styles,
    backgroundColor: '#E4163A',
    color: "#FFFFFF",
    borderRadius: 4,
  }),

  multiValueLabel: (styles) => ({
    ...styles,
    color: "#FFFFFF",
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    color: "#FFFFFF",
    transition: "all 0.05s linear",
    ":hover": {
      backgroundColor: "#FF768E",
      color: "#FFFFFF",
    },
  }),
}