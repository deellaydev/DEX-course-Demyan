import React, {useEffect, useState} from 'react';
import {Search} from "../../../common/components/Input/Search";
import styled from "styled-components";
import {Button} from "../../../common/components/Button/Button";
import { useNavigate } from "react-router-dom";
import {Pagination} from "../../../common/components/Pagination/Pagination";
import {SelectComponent} from "../../../common/components/Select/SelectComponent";
import {useAppDispatch, useAppSelector} from "../../../core/hooks/redux";
import {EmptyPage} from "../../../common/components/Empty/EmptyPage";
import teamsEmpty from "../../../assests/icons/teams_empty.png";
import {IPlayer} from "../../../api/dto/Players";
import {PlayerCardSmall} from "../../../common/components/Card/PlayerCardSmall";
import {getPlayersAction} from "../playersAsyncAction";

export const Players = () => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const {players, loading, error} = useAppSelector((state) => state.playersReducer)

  const [page, setPage] = useState(1)
  const [countPages, setCountPages] = useState(1)
  const [pageSize, setPageSize] = useState(6)
  const [name, setName] = useState('')

  const handlerPageChanger = ({selected}: {selected: number}) : void => {
    setPage(selected + 1)
  }

  useEffect(() => {
    dispatch(getPlayersAction({name: name, teamsLds: [], page: page, pageSize: pageSize}))
  }, [name, page, pageSize])

  useEffect(() => {
    setCountPages(Math.ceil((players?.count || 1) / pageSize))
  }, [players?.count, pageSize])

  return (
    <TeamsContainer>
      <TeamsHeader>
        <Search/>
        <Button width={'100px'} onClick={() => navigate('/players/addPlayer')}>Add +</Button>
      </TeamsHeader>
      <TeamsCardContainer>
        {loading ? <div>Loading...</div> :
          <>{players?.data.length !== 0 ? <TeamsCardContainer>
            {players?.data.map((el: IPlayer) => {
              return <PlayerCardSmall key={el.id} id={el.id} name={el.name} number={el.number} team={el.team}/>
            })}
          </TeamsCardContainer> : <EmptyPage text={'Add new players to continue'} title={'Empty here'} image={teamsEmpty}/>}</>
        }
      </TeamsCardContainer>
      <TeamsFooter>
        <Pagination countPages={countPages} currentPage={page-1} onChange={handlerPageChanger}/>
        <SelectComponent/>
      </TeamsFooter>
    </TeamsContainer>
  );
};
const TeamsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 80px;
  justify-content: space-between;
`
const TeamsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`
const TeamsCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const TeamsFooter = styled.div`
  display: flex;
  justify-content: space-between;
`