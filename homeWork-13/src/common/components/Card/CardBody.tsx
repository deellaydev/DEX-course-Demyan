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
    age = (new Date().getFullYear() - new Date(player.birthday).getFullYear())
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
          <CardBodyImagePlayer src={player?.avatarUrl}/>
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
  @media (max-width: 860px) {
    flex-direction: column;
    height: 700px;
    text-align: center;
    justify-content: stretch;
    padding: 15px 20px;
  }
`
const CardBodyImage = styled.img`
  margin-left: 140px;
  width: 210px;
  height: 210px;
  @media (max-width: 1350px) {
    margin-left: 20px;
  }
  @media (max-width: 1070px) {
    margin-left: 50px;
    width: 200px;
  }
  @media (max-width: 860px) {
    margin-left: 0;
  }
`
const CardBodyImagePlayer = styled.img`
  width: 530px;
  height: 530px;
  @media (max-width: 1160px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 860px) {
    width: 143px;
    height: 113px;
  }
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
  @media (max-width: 1070px) {
    font-size: 24px;
  }
`
const CardBodyInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 860px) {
    display: block;
  }
`
const CardBodyCouple = styled.div`
  max-width: 215px;
  width: 100%;
  margin-bottom: 50px;
  @media (max-width: 860px) {
    display: block;
    margin: 0 auto;
    margin-bottom: 15px;
  }
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