import React, {BaseSyntheticEvent, useCallback, useEffect, useState} from 'react';
import {Search} from "../../../common/components/Input/Search";
import styled from "styled-components";
import {Button} from "../../../common/components/Button/Button";
import { useNavigate } from "react-router-dom";
import {Pagination} from "../../../common/components/Pagination/Pagination";
import {TeamCardSmall} from "../../../common/components/Card/TeamCardSmall";
import {TeamsService} from "../../../api/teams/teamsService";
import {SelectTeam} from "../../../common/components/Select/SelectTeam";
import {EmptyPage} from '../../../common/components/Empty/EmptyPage'
import teamsEmpty from '../../../assests/icons/teams_empty.png'
import {useAppDispatch, useAppSelector} from "../../../core/hooks/redux";
import {getTeamsAction} from "../teamsAsyncAction";
import {Loading} from "../../../common/components/Loading/Loading";
import {Notification} from "../../../common/components/Notification/Notification";
import {SelectPage} from "../../../common/components/Select/SelectPage";

interface ITeam{
  id: number
  name: string;
  foundationYear: number;
  division: string;
  conference: string;
  imageUrl: string;
}

interface IOption {
  value: string;
  label: string;
}

export const Teams = () => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const {teams, loading, error} = useAppSelector((state) => state.teamsReducer)

  const [page, setPage] = useState(1)
  const [countPages, setCountPages] = useState(1)
  const [pageSize, setPageSize] = useState({value: '6', label: '6'})
  const [name, setName] = useState('')

  const handlerPageChanger = ({selected}: {selected: number}) : void => {
    setPage(selected + 1)
  }

  const handlerPageSizeChanger = ((option: IOption):void => {
    setPageSize(option);
  });

  useEffect(() => {
    dispatch(getTeamsAction({name: name, page: page, pageSize: Number(pageSize?.value)}))
  }, [name, page, pageSize])

  useEffect(() => {
    setCountPages(Math.ceil((teams?.count || 1) / Number(pageSize?.value)))
  }, [teams?.count, pageSize])

    return (
        <TeamsContainer>
            <TeamsHeader>
                <Search value={name} onChange={(e: BaseSyntheticEvent) => setName(e.target.value)}/>
                <Button width={'100px'} onClick={() => navigate('/teams/addTeam')}>Add +</Button>
            </TeamsHeader>
            {loading ? <Loading/> :
              <>{teams?.data.length !==0 ? <TeamsCardContainer>
                {teams?.data.map((el: ITeam) => {
                  return <TeamCardSmall key={el.id} id={el.id} image={el.imageUrl} name={el.name} foundationYear={String(el.foundationYear)}/>
                })}

              </TeamsCardContainer> : <EmptyPage text={'Add new teams to continue'} title={'Empty here'} image={teamsEmpty}/>}</>
            }
            <TeamsFooter>
                <Pagination countPages={countPages} currentPage={page-1} onChange={handlerPageChanger}/>
              <SelectPage id={'pageSelect'} value={pageSize} onChange={handlerPageSizeChanger}/>
            </TeamsFooter>
          {error ? <Notification>Unable to load teams</Notification> : null}
        </TeamsContainer>
    );
};
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