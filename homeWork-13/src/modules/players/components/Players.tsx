import React, {BaseSyntheticEvent, useEffect, useState} from 'react';
import {Search} from "../../../common/components/Input/Search";
import styled from "styled-components";
import {Button} from "../../../common/components/Button/Button";
import { useNavigate } from "react-router-dom";
import {Pagination} from "../../../common/components/Pagination/Pagination";
import {SelectTeam} from "../../../common/components/Select/SelectTeam";
import {useAppDispatch, useAppSelector} from "../../../core/hooks/redux";
import {EmptyPage} from "../../../common/components/Empty/EmptyPage";
import teamsEmpty from "../../../assests/icons/teams_empty.png";
import {IPlayer} from "../../../api/dto/players";
import {PlayerCardSmall} from "../../../common/components/Card/PlayerCardSmall";
import {getPlayersAction} from "../playersAsyncAction";
import {Loading} from "../../../common/components/Loading/Loading";
import {Notification} from "../../../common/components/Notification/Notification";
import {SelectPage} from "../../../common/components/Select/SelectPage";
import {Controller, useForm} from "react-hook-form";
import {getTeamsAction} from "../../teams/teamsAsyncAction";

interface IOption {
  value: string;
  label: string;
}

export const Players = () => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const {players, loading, error} = useAppSelector((state) => state.playersReducer)
  const {teams} = useAppSelector((state) => state.teamsReducer)

  const [page, setPage] = useState(1)
  const [countPages, setCountPages] = useState(1)
  const [pageSize, setPageSize] = useState({value: '6', label: '6'})
  const [name, setName] = useState('')
  const [teamLds, setTeamLds] = useState('')

  const handlerPageChanger = ({selected}: {selected: number}) : void => {
    setPage(selected + 1)
  }

  const handlerPageSizeChanger = ((option: IOption):void => {
    setPageSize(option);
  });

  const handlerTeamLdsChange = (value: IOption[]) : void => {
    const arr = value.map(el => `&TeamIds=${el.value}`)
    setTeamLds(arr.join(''))
  }

  useEffect(() => {
    dispatch(getTeamsAction({name: name, page: page, pageSize: Number(pageSize?.value)}))
    // @ts-ignore
    dispatch(getPlayersAction({name: name, teamsLds: teamLds, page: page, pageSize: Number(pageSize?.value)}))
  }, [name, page, pageSize, teamLds])

  useEffect(() => {
    setCountPages(Math.ceil((players?.count || 1) / Number(pageSize?.value)))
  }, [players?.count, pageSize])

  return (
    <TeamsContainer>
      <TeamsHeader>
        <Selects>
          <Search value={name} onChange={(e: BaseSyntheticEvent) => setName(e.target.value)}/>
          <SelectTeam isMulti={true} id='TeamLdsSelect' onChange={handlerTeamLdsChange}/>
        </Selects>
        <Button width={'100px'} onClick={() => navigate('/players/addPlayer')}>Add +</Button>
      </TeamsHeader>
        {loading ? <Loading/> :
          <>{players?.data.length !== 0 ? <TeamsCardContainer>
            {players?.data.map((el: IPlayer) => {
              return <PlayerCardSmall image={el.avatarUrl} name={el.name} number={el.number} team={teams?.data.find(team => team.id === el.team)} id={el.id} key={el.id}/>
            })}
          </TeamsCardContainer> : <EmptyPage text={'Add new players to continue'} title={'Empty here'} image={teamsEmpty}/>}</>
        }
      <TeamsFooter>
        <Pagination countPages={countPages} currentPage={page-1} onChange={handlerPageChanger}/>
        <SelectPage id={'pageSelect'} value={pageSize} onChange={handlerPageSizeChanger}/>
      </TeamsFooter>
      {error ? <Notification>Unable to load players</Notification> : null}
    </TeamsContainer>
  );
};
const Selects = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  @media (max-width: 1200px) {
    width: 50%;
  }
  @media (max-width: 700px) {
    display: block;
    width: 100%;
    margin-bottom: 15px;
  }
  
`
const TeamsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 80px;
  justify-content: space-between;
  @media(max-width: 550px) {
    padding: 0 10px;
  }
`
const TeamsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  @media (max-width: 700px) {
    display: block;
    width: 100%;
  }
`
const TeamsCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3,calc((100% - 50px) / 3));
  grid-template-rows: repeat(2, 350px);
  grid-gap: 10px;
  justify-items: center;
  align-items: stretch;
  @media (max-width: 1170px) {
    grid-template-columns: repeat(2,calc((100% - 50px) / 2));
  }
  @media (max-width: 950px) {
    grid-template-columns: repeat(1,calc((100% - 50px) / 1));
    justify-content: center;
  }
`

const TeamsFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`