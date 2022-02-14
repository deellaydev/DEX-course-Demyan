import React from 'react';
import create from "../../../assests/icons/create.svg";
import deleteimg from "../../../assests/icons/deleteimg.svg";
import player from "../../../assests/icons/player.png";
import styled from "styled-components";

export const PlayerCard = () => {
  const CardInner = styled.div`
    max-width: 1140px;
    width: 100%;
    height: 473px;
    border-radius: 4px;
    margin: 10px;
  `
  const PlayerCardInner = styled.div`
    max-width: 1140px;
    width: 100%;
    height: 594px;
    border-radius: 4px;
    margin: 10px;
  `
  const CardHeader = styled.div`
    padding: 24px 35px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    border: 0.5px solid ${({theme}) => theme.colors.lightGrey};
    border-radius: 10px 10px 0px 0px;
  `
  const BreadCrumbs = styled.p`
    color:  ${({theme}) => theme.colors.red};
  `
  const BreadCrumbsSeparator = styled.span`
    color:  ${({theme}) => theme.colors.lightRed};
    margin: 0 5px;
  `
  const CardHeaderButtons = styled.div`
    display: flex;
  `
  const CardButton = styled.img`
    cursor: pointer;
    margin: 0 16px;
  `
  const CardBody = styled.div`
    background: linear-gradient(276.45deg, #707070 0%, #393939 100.28%);
    height: 403px;
    border-radius: 0px 0px 10px 10px;
    display: flex;
    justify-content: space-between;
    padding: 65px 150px;
    align-items: center;
  `
  const PlayerCardBody = styled.div`
    background: linear-gradient(276.45deg, #707070 0%, #393939 100.28%);
    height: 525px;
    border-radius: 0px 0px 10px 10px;
    display: flex;
    justify-content: space-between;
    padding: 65px 150px;
    align-items: center;
  `
  const CardBodyImg = styled.img`
    width: 210px;
    height: 210px;
  `
  const PlayerCardBodyImg = styled.div`
    position: relative;
    width: 650px;
    height: 100%;
  `
  const PlayerImg = styled.img`
    position: absolute;
    left: -150px;
    bottom: -65px;
  `
  const CardBodyBox = styled.div`
    color:  ${({theme}) => theme.colors.white};
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
  return (
    <PlayerCardInner>
      <CardHeader>
        <BreadCrumbs>
          Players
          <BreadCrumbsSeparator>
            /
          </BreadCrumbsSeparator>
          Greg Whittington
        </BreadCrumbs>
        <CardHeaderButtons>
          <CardButton src={create}/>
          <CardButton src={deleteimg}/>
        </CardHeaderButtons>
      </CardHeader>
      <PlayerCardBody>
        <PlayerCardBodyImg>
          <PlayerImg src={player}/>
        </PlayerCardBodyImg>
        <CardBodyBox>
          <CardBodyTitle>Greg Whittington <CardBodyTitleSpan>#22</CardBodyTitleSpan></CardBodyTitle>
          <CardBodyInfo>
            <CardBodyCouple>
              <CardCoupleTitle>Position</CardCoupleTitle>
              <CardCoupleText>Forward</CardCoupleText>
            </CardBodyCouple>
            <CardBodyCouple>
              <CardCoupleTitle>Team</CardCoupleTitle>
              <CardCoupleText>Denver Nuggets</CardCoupleText>
            </CardBodyCouple>
            <CardBodyCouple>
              <CardCoupleTitle>Height</CardCoupleTitle>
              <CardCoupleText>206 cm</CardCoupleText>
            </CardBodyCouple>
            <CardBodyCouple>
              <CardCoupleTitle>Weight</CardCoupleTitle>
              <CardCoupleText>95 kg</CardCoupleText>
            </CardBodyCouple>
            <CardBodyCouple>
              <CardCoupleTitle>Age</CardCoupleTitle>
              <CardCoupleText>27</CardCoupleText>
            </CardBodyCouple>
          </CardBodyInfo>
        </CardBodyBox>
      </PlayerCardBody>
    </PlayerCardInner>
  );
};
