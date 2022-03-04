import React, {FC, useEffect, useState} from 'react';
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../core/hooks/redux";
import {getTeamByIdAction} from "../../../modules/teams/teamsAsyncAction";
import {CardHeader} from "./CardHeader";
import {CardBody} from "./CardBody";

export const TeamCard: FC = () => {

  const dispatch = useAppDispatch()

  const {teamId} = useParams()

  const {team, error, loading} = useAppSelector((state) => state.teamsReducer)

  useEffect(() => {
    dispatch(getTeamByIdAction({id: Number(teamId)}));
  }, [teamId])

  return (
    <CardWrapper>
      <CardHeader name={team?.name} to={'teams'} from={'Teams'}/>
      <CardBody cardType={'team'} team={team}/>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1140px;
  width: 100%;
`
