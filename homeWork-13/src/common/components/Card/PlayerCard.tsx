import React, {useEffect} from 'react';
import create from "../../../assests/icons/create.svg";
import deleteimg from "../../../assests/icons/deleteimg.svg";
import player from "../../../assests/icons/player.png";
import styled from "styled-components";
import {CardHeader} from "./CardHeader";
import {CardBody} from "./CardBody";
import {useAppDispatch, useAppSelector} from "../../../core/hooks/redux";
import {useParams} from "react-router-dom";
import {getTeamByIdAction} from "../../../modules/teams/teamsAsyncAction";
import {getPlayerByIdAction} from "../../../modules/players/playersAsyncAction";

export const PlayerCard = () => {

  const dispatch = useAppDispatch()

  const {playerId} = useParams()

  const {player, error, loading} = useAppSelector((state) => state.playersReducer)

  useEffect(() => {
    dispatch(getPlayerByIdAction({id: Number(playerId)}));
  }, [playerId])

  return (
    <CardWrapper>
      <CardHeader name={player?.name} to={'players'} from={'Players'}/>
      <CardBody cardType={'player'} player={player}/>
    </CardWrapper>
  );
};
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1140px;
  width: 100%;
`
