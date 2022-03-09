import React, {FC, useEffect, useState} from 'react';
import Select, {StylesConfig} from "react-select";
import {TeamsService} from "../../../api/teams/teamsService";
import {useAppDispatch, useAppSelector} from "../../../core/hooks/redux";
import {RootState} from "../../../core/redux/store";
import {getTeamsAction} from "../../../modules/teams/teamsAsyncAction";
import styled from "styled-components";

interface SelectPlayerProps {
  id: string;
  label?: string
  isMulti?: boolean
  width?: string
  onChange: any
}

export const SelectTeam: FC<SelectPlayerProps> = ({id, label, isMulti, width, onChange}) => {

  const {teams, loading} = useAppSelector((store: RootState) => store.teamsReducer)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (loading) {
      dispatch(getTeamsAction({name: '', page: 0, pageSize: 0}))
    }
  })

  const options = teams?.data.map(el => ({value: el.id, label: el.name}))

  return (
    <SelectWrapper width={width} isMulti={isMulti}>
      {label ? <StyledLabel htmlFor={id}>{label}</StyledLabel> : null}
      <Select options={options} isMulti={isMulti} id={id} styles={customStyles} onChange={onChange}/>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div<{width?: string, isMulti?:boolean}>`
  margin-bottom: ${({isMulti}) => isMulti ? '0px' : '24px'};
  max-width: ${({width}) => width ? width : '365px'};
  width: 100%;
  @media (max-width: 700px) {
    max-width: 100%;
  }
`

const StyledLabel = styled.label`
  color: ${({theme}) => theme.colors.grey};
  font-size: 14px;
  display: block;
  margin-bottom: 8px;
`

export const customStyles: StylesConfig<any> = {
  container: (styles,) => ({
    ...styles,
    maxWidth: '768px',
    width: '100%',
  }),
  control: (styles, {isFocused, isMulti}) => ({
    ...styles,
    backgroundColor: isMulti ? "white" : '#F6F6F6',
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