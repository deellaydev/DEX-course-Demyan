import React, { FC } from "react";
import Select, { StylesConfig } from "react-select";

const options = [
  { value: "6", label: "6" },
  { value: "12", label: "12" },
  { value: "24", label: "24" },
];

const customStyles: StylesConfig = {
  control:(styles) =>({
    ...styles,
    ":focus":{
      border:'none'
    },
    ":active":{
      border:'yellow',
    }
  }),
  option: (styles) => ({
    ...styles,
    background: 'transparent',
    ":hover": {
      backgroundColor: "#FF768E",
      color: "#FFFFFF",
    },
    ":active":{
      backgroundColor:"#FF768E",
      color: "#FFFFFF"
    },
    ":pressed":{
      backgroundColor:"#C60E2E"
    }
  }),
  container: (styles) => ({
    ...styles,
    maxWidth: "90px",
    width: "100%",
    height: "40px",
  }),
  menu: (styles) => ({
    ...styles,
    maxWidth: "90px",
    width: "100%",
    color: "#9C9C9C",
  }),
  multiValue: (styles) => ({
    ...styles,
  }),
};

export const SelectComponent: FC = () => {
  return (
      <Select
        menuPosition="fixed"
        menuPlacement="top"
        styles={customStyles}
        options={options}
        defaultValue={options[0]}
      />
  );
};