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

type AddTeamForm = {
  name: string;
  foundationYear: string;
  division: string;
  conference: string;
  imageUrl: FileList;
}

export const TeamAdd = () => {

  const { register, setValue, handleSubmit, formState: {errors}, reset} = useForm<AddTeamForm>({mode: "onBlur"})
  const navigate = useNavigate()

  const handleCancelClick = () => {
    navigate(-1)
  }

  const onSubmit = ({name, foundationYear, division, conference, imageUrl}: AddTeamForm) => {
    const Team = {
      name: name,
      foundationYear: Number(foundationYear),
      division: division,
      conference: conference,
      imageUrl: imageUrl[0].name,
    }
    reset()
    const request = new TeamsService().teamsAdd(JSON.stringify(Team)).then(() => navigate(-1))
  }

  return (
    <CardInner>
      <CardHeader>
        <BreadCrumbs>
          Teams
          <BreadCrumbsSeparator>
            /
          </BreadCrumbsSeparator>
          Add new team
        </BreadCrumbs>
      </CardHeader>
      <CardBody>
        <CardForm onSubmit={handleSubmit(onSubmit)}>
          <InputFile>
            <Input type={'file'} id={'File'} register={register} name={'imageUrl'}/>
          </InputFile>
          <MainForm>
            <Input label={'Name'} id={'Name'} register={register} name={'name'}/>
            <Input label={'Division'} id={'Division'} register={register} name={'division'}/>
            <Input label={'Conference'} id={'Conference'} register={register} name={'conference'}/>
            <Input label={'Year of foundation'} type={'Year of foundation'} id={'Name'} register={register} name={'foundationYear'}/>
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
  display: flex;
  width: 500px;
`
const MainForm = styled.div`
  max-width: 350px;
  width: 100%;
`
const FormButtons = styled.div`
  display: flex;
  justify-content: space-between;
`