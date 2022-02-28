import React, {useCallback, useEffect, useState} from 'react';
import {Search} from "../../../common/components/Input/Search";
import styled from "styled-components";
import {Button} from "../../../common/components/Button/Button";
import { useNavigate } from "react-router-dom";
import {Pagination} from "../../../common/components/Pagination/Pagination";
import {TeamCardSmall} from "../../../common/components/Card/TeamCardSmall";
import {TeamsService} from "../../../api/teams/TeamsService";
import {SelectComponent} from "../../../common/components/Select/SelectComponent";
import {EmptyPage} from '../../../common/components/Empty/EmptyPage'
import teamsEmpty from '../../../assests/icons/teams_empty.png'
import {useAppDispatch, useAppSelector} from "../../../core/hooks/redux";
import {getTeamsAction} from "../teamsAsyncAction";

interface ITeam{
  id: number
  name: string;
  foundationYear: number;
  division: string;
  conference: string;
  imageUrl: string;
}

export const Teams = () => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const {teams, loading, error} = useAppSelector((state) => state.teamsReducer)

  const [page, setPage] = useState(1)
  const [countPages, setCountPages] = useState(1)
  const [pageSize, setPageSize] = useState(6)
  const [name, setName] = useState('')

  const handlerPageChanger = ({selected}: {selected: number}) : void => {
    setPage(selected + 1)
  }

  useEffect(() => {
    dispatch(getTeamsAction({name: name, page: page, pageSize: pageSize}))
  }, [name, page, pageSize])

  useEffect(() => {
    setCountPages(Math.ceil((teams?.count || 1) / pageSize))
  }, [teams?.count, pageSize])

    return (
        <TeamsContainer>
            <TeamsHeader>
                <Search/>
                <Button width={'100px'} onClick={() => navigate('/teams/addTeam')}>Add +</Button>
            </TeamsHeader>
            {loading ? <div>Loading...</div> :
              <>{teams?.data.length !==0 ? <TeamsCardContainer>
                {teams?.data.map((el: ITeam) => {
                  return <TeamCardSmall key={el.id} id={el.id} image={el.imageUrl} name={el.name} foundationYear={String(el.foundationYear)}/>
                })}

              </TeamsCardContainer> : <EmptyPage text={'Add new teams to continue'} title={'Empty here'} image={teamsEmpty}/>}</>
            }
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
  display: grid;
  grid-template-columns: repeat(3,calc((100% - 48px) / 3));
  grid-gap: 24px;
  justify-items: stretch;
  align-items: stretch;
`

const TeamsFooter = styled.div`
  display: flex;
  justify-content: space-between;
`