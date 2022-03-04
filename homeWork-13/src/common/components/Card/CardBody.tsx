import React, {FC} from 'react';
import styled from "styled-components";
import {ITeam} from "../../../api/dto/teams";
import {IPlayer} from "../../../api/dto/players";

interface CardBodyProps {
  cardType: string
  team?: ITeam | null
  player?: IPlayer | null
}

export const CardBody: FC<CardBodyProps> = ({cardType, team, player}) => {

  let age
  if (player) {
    age = (new Date(player.birthday).getFullYear() - new Date().getFullYear())
  }

  return (
    <CardBodyWrapper cardType={cardType}>
      {cardType === 'team' ?
        <>
          <CardBodyImage src={team?.imageUrl}/>
          <CardBodyBox>
            <CardBodyTitle>{team?.name}</CardBodyTitle>
            <CardBodyInfo>
              <CardBodyCouple>
                <CardCoupleTitle>Year of foundation</CardCoupleTitle>
                <CardCoupleText>{team?.foundationYear}</CardCoupleText>
              </CardBodyCouple>
              <CardBodyCouple>
                <CardCoupleTitle>Division</CardCoupleTitle>
                <CardCoupleText>{team?.division}</CardCoupleText>
              </CardBodyCouple>
              <CardBodyCouple>
                <CardCoupleTitle>Conference</CardCoupleTitle>
                <CardCoupleText>{team?.conference}</CardCoupleText>
              </CardBodyCouple>
            </CardBodyInfo>
          </CardBodyBox>
        </>
        : <>
          <CardBodyImage src={player?.avatarUrl}/>
          <CardBodyBox>
            <CardBodyTitle>{player?.name} <CardBodyTitleSpan>#{player?.number}</CardBodyTitleSpan></CardBodyTitle>
            <CardBodyInfo>
              <CardBodyCouple>
                <CardCoupleTitle>Position</CardCoupleTitle>
                <CardCoupleText>{player?.position}</CardCoupleText>
              </CardBodyCouple>
              <CardBodyCouple>
                <CardCoupleTitle>Team</CardCoupleTitle>
                <CardCoupleText>{player?.team}</CardCoupleText>
              </CardBodyCouple>
              <CardBodyCouple>
                <CardCoupleTitle>Height</CardCoupleTitle>
                <CardCoupleText>{player?.height} cm</CardCoupleText>
              </CardBodyCouple>
              <CardBodyCouple>
                <CardCoupleTitle>Weight</CardCoupleTitle>
                <CardCoupleText>{player?.weight} kg</CardCoupleText>
              </CardBodyCouple>
              <CardBodyCouple>
                <CardCoupleTitle>Age</CardCoupleTitle>
                <CardCoupleText>{age}</CardCoupleText>
              </CardBodyCouple>
            </CardBodyInfo>
          </CardBodyBox>
        </>
      }
    </CardBodyWrapper>
  );
};

const CardBodyWrapper = styled.div<{ cardType: string }>`
  max-width: 1140px;
  width: 100%;
  height: ${({cardType}) => cardType === 'team' ? '400px' : '530px'};
  background: linear-gradient(276.45deg, #707070 0%, #393939 100.28%);
  border-radius: 0 0 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const CardBodyImage = styled.img`
  margin-left: 140px;
`
const CardBodyBox = styled.div`
  color: ${({theme}) => theme.colors.white};
  max-width: 520px;
  width: 100%;
`
const CardBodyTitle = styled.p`
  font-size: 36px;
  line-height: 59px;
  margin-bottom: 40px;
  font-weight: 800;
`
const CardBodyInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const CardBodyCouple = styled.div`
  max-width: 215px;
  width: 100%;
  margin-bottom: 50px;
`
const CardCoupleTitle = styled.p`
  font-size: 24px;
  line-height: 33px;
  font-weight: 800;
`
const CardCoupleText = styled.p`
  font-size: 18px;
  line-height: 25px;
`
const CardBodyTitleSpan = styled.span`
  color: ${({theme}) => theme.colors.lightRed};
`