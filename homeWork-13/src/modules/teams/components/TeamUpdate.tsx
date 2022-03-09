import React, {BaseSyntheticEvent, useState} from 'react';
import {FileInput} from "../../../common/components/Input/FileInput";
import {Input} from "../../../common/components/Input/Input";
import {CancelButton} from "../../../common/components/Button/CancelButton";
import {Button} from "../../../common/components/Button/Button";
import {Notification} from "../../../common/components/Notification/Notification";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../core/hooks/redux";
import {useForm} from "react-hook-form";
import {imageService} from "../../../api/images/imagesService";
import {BASE_URL} from "../../../api/baseRequest";
import {addTeamAction} from "../teamsAsyncAction";
import {TeamsService} from "../../../api/teams/teamsService";


type AddTeamForm = {
  name: string;
  foundationYear: number;
  division: string;
  conference: string;
  imageUrl: string;
}

export const TeamUpdate = () => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const {team, loading, error} = useAppSelector((state) => state.teamsReducer)
  const {register, setValue, handleSubmit, formState: {errors}, reset} = useForm<AddTeamForm>({mode: "onBlur",
    defaultValues :{
      name: team?.name,
      foundationYear: team?.foundationYear,
      division: team?.division,
      conference: team?.conference,
      imageUrl: team?.imageUrl,
    }})
  const [photo, setPhoto] = useState(team?.imageUrl)

  const handleSetPhoto = async (e: BaseSyntheticEvent) => {
    try {
      if (e.target && e.target.files) {
        const fileImg = e.target.files[0]
        const formData = new FormData()
        formData.append('file', fileImg)
        const img = await new imageService().downloadImage(formData)
        setPhoto(BASE_URL+img)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleCancelClick = () => {
    navigate(-1)
  }

  const onSubmit = ({name, foundationYear, division, conference, imageUrl}: AddTeamForm) => {
    const Team = {
      name: name,
      foundationYear: Number(foundationYear),
      division: division,
      conference: conference,
      imageUrl: photo,
      id: team?.id
    }
    // @ts-ignore
    const response = new TeamsService().updateTeam(JSON.stringify(Team)).then(() => navigate(-1))
  }

  return (
    <CardInner>
      <CardHeader>
        <BreadCrumbs>
          <BreadCrumbsItem onClick={() => navigate(`/teams`)}>
            Teams
          </BreadCrumbsItem>
          <BreadCrumbsSeparator>
            /
          </BreadCrumbsSeparator>
          <BreadCrumbsItem>
            Add new team
          </BreadCrumbsItem>
        </BreadCrumbs>
      </CardHeader>
      <CardBody>
        <CardForm onSubmit={handleSubmit(onSubmit)}>
          <InputFile>
            <FileInput register={register} name={'imageUrl'} id={'teamImg'} value={photo} onChange={handleSetPhoto}/>
          </InputFile>
          <MainForm>
            <Input label={'Name'} id={'Name'} register={register} name={'name'}/>
            <Input label={'Division'} id={'Division'} register={register} name={'division'}/>
            <Input label={'Conference'} id={'Conference'} register={register} name={'conference'}/>
            <Input label={'Year of foundation'} type={'Year of foundation'} id={'Name'} register={register}
                   name={'foundationYear'}/>
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
  border-radius: 10px 10px 0 0;
  background: ${({theme}) => theme.colors.white};
`
const BreadCrumbs = styled.p`
  color: ${({theme}) => theme.colors.red};
`
const BreadCrumbsSeparator = styled.span`
  color: ${({theme}) => theme.colors.lightRed};
  margin: 0 5px;
`
const CardBody = styled.div`
  background: ${({theme}) => theme.colors.white};
  height: 493px;
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: space-between;
  padding: 20px 115px;
  align-items: center;
  @media (max-width: 1150px) {
    flex-direction: column;
    height: 750px;
    padding: 20px 20px;
  }
`
const CardForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
  }
`
const InputFile = styled.div`
  display: flex;
  width: 500px;
  @media (max-width: 1150px) {
    width: 350px;
  }
`
const MainForm = styled.div`
  max-width: 350px;
  width: 100%;
`
const FormButtons = styled.div`
  display: flex;
  justify-content: space-between;
`
const BreadCrumbsItem = styled.a`
  cursor: pointer;
`
