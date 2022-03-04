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
import {addPlayerAction} from "../playersAsyncAction";
import {PlayersService} from "../../../api/players/playersService";


type AddPlayerForm = {
  name: string;
  position: string;
  team: number;
  birthday: string;
  height: number;
  weight: number;
  number: number;
  avatarUrl: string;
}

export const PlayerUpdate = () => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const {player, loading, error} = useAppSelector((state) => state.playersReducer)
  const {register, setValue, handleSubmit, formState: {errors}, reset} = useForm<AddPlayerForm>({
    mode: "onBlur",
    defaultValues: {
      name: player?.name,
      position: player?.position,
      team: player?.team,
      birthday: player?.birthday,
      height: player?.height,
      weight: player?.weight,
      number: player?.number,
      avatarUrl: player?.avatarUrl,
    }
  })
  const [photo, setPhoto] = useState(player?.avatarUrl)

  const handleSetPhoto = async (e: BaseSyntheticEvent) => {
    try {
      if (e.target && e.target.files) {
        const fileImg = e.target.files[0]
        const formData = new FormData()
        formData.append('file', fileImg)
        const img = await new imageService().downloadImage(formData)
        setPhoto(BASE_URL + img)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleCancelClick = () => {
    navigate(-1)
  }

  const onSubmit = ({name, birthday, height, weight, number, position, team}: AddPlayerForm) => {
    const Player = {
      name: name,
      position: position,
      team: team,
      birthday: birthday,
      height: Number(height),
      weight: Number(weight),
      number: Number(number),
      avatarUrl: photo,
      id: player?.id
    }
    const response = new PlayersService().updatePlayer(JSON.stringify(Player)).then(() => navigate(-1))
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
            <FileInput register={register} name={'avatarUrl'} id={'avatarUrl'} value={photo} onChange={handleSetPhoto}/>
          </InputFile>
          <MainForm>
            <Input label={'Name'} id={'Name'} register={register} name={'name'}/>
            <Input label={'Position'} id={'Position'} register={register} name={'position'}/>
            <Input label={'Team'} id={'Team'} register={register} name={'team'}/>
            <InputFlex>
              <Input type={'number'} label={'Height (cm)'} id={'height'} register={register} name={'height'}
                     width={'170px'}/>
              <Input type={'number'} label={'Weight (kg)'} id={'weight'} register={register} name={'weight'}
                     width={'170px'}/>
            </InputFlex>
            <InputFlex>
              <Input type={'date'} label={'Birthday'} id={'Birthday'} register={register} name={'birthday'}
                     width={'170px'}/>
              <Input type={'number'} label={'Number'} id={'number'} register={register} name={'number'}
                     width={'170px'}/>
            </InputFlex>
            <FormButtons>
              <CancelButton type={'button'} onClick={handleCancelClick}>Cancel</CancelButton>
              <Button width={'171px'}>Save</Button>
            </FormButtons>
          </MainForm>
        </CardForm>
      </CardBody>
      {error ? <Notification>Unable to add player</Notification> : null}
    </CardInner>
  );
};
const CardInner = styled.div`
  max-width: 1140px;
  width: 100%;
  height: 620px;
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
  height: 550px;
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: space-between;
  padding: 20px 120px;
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
const InputFlex = styled.div`
  display: flex;
  justify-content: space-between;
`