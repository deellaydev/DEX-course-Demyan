import React from 'react';
import create from "../../../assests/icons/create.svg";
import deleteimg from "../../../assests/icons/deleteimg.svg";
import player from "../../../assests/icons/player.png";
import styled from "styled-components";
import {Input} from "../../../common/components/Input/Input";
import {useForm} from "react-hook-form";
import {CancelButton} from "../../../common/components/Button/CancelButton";
import {Button} from "../../../common/components/Button/Button";
import {useNavigate} from "react-router-dom";
import {TeamsService} from "../../../api/teams/TeamsService";
import {PlayersService} from "../../../api/players/PlayersService";
import {addTeamAction} from "../../teams/teamsAsyncAction";
import {useAppDispatch, useAppSelector} from "../../../core/hooks/redux";
import {addPlayerAction} from "../playersAsyncAction";

type AddPlayerForm = {
  name: string;
  position?: string;
  team?: string;
  birthday: string;
  height: string;
  weight: string;
  number: string
  avatarUrl:FileList;
}

export const PlayerAdd = () => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { register, setValue, handleSubmit, formState: {errors}, reset} = useForm<AddPlayerForm>({mode: "onBlur"})
  const { loading, error } = useAppSelector((state) => state.teamsReducer)

  const handleCancelClick = () => {
    navigate(-1)
  }

  const onSubmit = ({name, birthday, height, weight, number, avatarUrl}: AddPlayerForm) => {
     const Player = {
       name: name,
       position: 'testPos',
       team: 5,
       birthday: birthday,
       height: Number(height),
       weight: Number(weight),
       number: Number(number),
       avatarUrl: avatarUrl[0].name
     }
     reset()
    dispatch(addPlayerAction(Player))
    // navigate(-1)
  }

  return (
    <CardInner>
      <CardHeader>
        <BreadCrumbs>
          Players
          <BreadCrumbsSeparator>
            /
          </BreadCrumbsSeparator>
          Add new player
        </BreadCrumbs>
      </CardHeader>
      <CardBody>
        <CardForm onSubmit={handleSubmit(onSubmit)}>
          <InputFile>
            <Input type={'file'} id={'File'} register={register} name={'avatarUrl'}/>
          </InputFile>
          <MainForm>
            <Input label={'Name'} id={'Name'} register={register} name={'name'}/>
            <InputFlex>
              <Input type={'number'} label={'Height (cm)'} id={'height'} register={register} name={'height'} width={'170px'}/>
              <Input type={'number'} label={'Weight (kg)'} id={'weight'} register={register} name={'weight'} width={'170px'}/>
            </InputFlex>
            <InputFlex>
              <Input type={'date'} label={'Birthday'} id={'Birthday'} register={register} name={'birthday'} width={'170px'}/>
              <Input type={'number'} label={'Number'} id={'number'} register={register} name={'number'} width={'170px'}/>
            </InputFlex>
            <FormButtons>
              <CancelButton type={'button'} onClick={handleCancelClick}>Cancel</CancelButton>
              <Button width={'171px'}>Save</Button>
            </FormButtons>
          </MainForm>
        </CardForm>
      </CardBody>
    </CardInner>
  );
};
const CardInner = styled.div`
    max-width: 1140px;
    width: 100%;
    height: 565px;
    border-radius: 4px;
    margin: 10px;
  `

const CardHeader = styled.div`
    padding: 24px 35px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    border-radius: 10px 10px 0px 0px;
    background: ${({theme}) => theme.colors.white};
  `
const BreadCrumbs = styled.p`
    color:  ${({theme}) => theme.colors.red};
  `
const BreadCrumbsSeparator = styled.span`
    color:  ${({theme}) => theme.colors.lightRed};
    margin: 0 5px;
  `
const CardBody = styled.div`
    background: ${({theme}) => theme.colors.white};
    height: 493px;
    border-radius: 0px 0px 10px 10px;
    display: flex;
    justify-content: space-between;
    padding: 65px 150px;
    align-items: center;
  `
const CardForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const InputFile = styled.div`

`
const MainForm = styled.div`
  max-width: 350px;
  width: 100%;
`
const FormButtons = styled.div`
  display: flex;
  justify-content: space-between;
`
const InputFlex = styled.div`
  display: flex;
  justify-content: space-between;
`