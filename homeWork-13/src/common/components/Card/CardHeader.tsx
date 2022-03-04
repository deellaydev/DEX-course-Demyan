import React, {FC, useState} from 'react';
import styled from "styled-components";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import create from "../../../assests/icons/create.svg";
import deleteimg from "../../../assests/icons/deleteimg.svg";
import {TeamsService} from "../../../api/teams/teamsService";
import {PlayersService} from "../../../api/players/playersService";

interface CardHeaderProps {
  to: string
  name: string | undefined
  from: string
}

export const CardHeader: FC<CardHeaderProps> = ({name, to, from}) => {

  const navigate = useNavigate()
  const {teamId, playerId} = useParams()

  const handleUpdate = () => {
    if (to === 'teams' && teamId) {
      navigate(`/teams/${teamId}/Update`)
    } else if (to === 'players' && playerId) {
      navigate(`/players/${playerId}/Update`)
    }
  }

  const handleDelete = () => {
    if (to === 'teams' && teamId) {
      try {
        const response = new TeamsService().deleteTeamById(Number(teamId)).then(() => navigate('/teams'))
      } catch (e) {
        console.log(e)
      }
    } else if (to === 'players' && playerId) {
      try {
        const response = new PlayersService().deletePlayerById(Number(playerId)).then(() => navigate('/players'))
      } catch (e) {
        console.log(e)
      }
    }
  }

  return (
    <CardHeaderWrapper>
      <BreadCrumbs>
        <BreadCrumbsItem onClick={() => navigate(`/${to}`)}>
          {from}
        </BreadCrumbsItem>
        <BreadCrumbsSeparator>
          /
        </BreadCrumbsSeparator>
        <BreadCrumbsItem>
          {name}
        </BreadCrumbsItem>
      </BreadCrumbs>
      <CardHeaderButtons>
        <CardButton src={create} onClick={handleUpdate}/>
        <CardButton src={deleteimg} onClick={handleDelete}/>
      </CardHeaderButtons>
    </CardHeaderWrapper>
  );
};

const CardHeaderWrapper = styled.div`
  max-width: 1140px;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px;
  background: ${({theme}) => theme.colors.white};
  border: 0.5px solid ${({theme}) => theme.colors.lightGrey};
  border-radius: 10px 10px 0 0;
`
const BreadCrumbs = styled.div`
  color: ${({theme}) => theme.colors.red};
  font-weight: 500;
`
const BreadCrumbsSeparator = styled.span`
  color: ${({theme}) => theme.colors.lightRed};
  margin: 0 5px;
`
const BreadCrumbsItem = styled.a`
  cursor: pointer;
`
const CardHeaderButtons = styled.div`
  display: flex;
`
const CardButton = styled.img`
  cursor: pointer;
  margin: 0 16px;
`