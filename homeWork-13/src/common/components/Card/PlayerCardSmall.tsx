import React, {FC} from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

interface PlayerCardSmallProps {
  name: string;
  number: number;
  team: number;
  id: number;
  image: string
}

export const PlayerCardSmall: FC<PlayerCardSmallProps> = ({name, number, team,id, image}) => {

  const navigate = useNavigate();

  return (
    <PlayerCard onClick={() => navigate(`/players/${id}`)}>
      <PlayerCardWrapper>
        <PlayerCardImage src={image}/>
      </PlayerCardWrapper>
      <PlayerCardFooter>
        <FooterName>{name} <NameNumber>#{number}</NameNumber></FooterName>
        <FooterFoundation>{team}</FooterFoundation>
      </PlayerCardFooter>
    </PlayerCard>
  );
};

const PlayerCard = styled.div`
  max-width: 365px;
  width: 100%;
  height: 340px;
  margin: 0 20px 15px 20px;
  background: linear-gradient(121.57deg, #707070 1.62%, #393939 81.02%);
  border-radius: 4px;
  position: relative;
`
const PlayerCardFooter = styled.div`
  position: absolute;
  background: ${({theme}) => theme.colors.darkGrey};
  height: 30%;
  width: 100%;
  bottom: 0;
  padding: 20px 15px;
`
const FooterName = styled.div`
  color: #fff;
  text-align: center;
  margin-bottom: 15px;
  font-size: 18px;
`
const NameNumber = styled.span`
  color: ${({theme}) => theme.colors.lightRed}
`
const FooterFoundation = styled.div`
  font-size: 14px;
  color: ${({theme}) => theme.colors.lightGrey};
  text-align: center;
`
const PlayerCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 70%;
`
const PlayerCardImage = styled.img`
  width: 270px;
  height: 207px;
`