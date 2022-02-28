import React, {FC} from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

interface PlayerCardSmallProps {
  name: string;
  number: number;
  team: number;
  id: number;
}

export const PlayerCardSmall: FC<PlayerCardSmallProps> = ({name, number, team,id, ...attr}) => {

  const navigate = useNavigate();

  return (
    <TeamCard onClick={() => navigate(`/teams/${id}`)}>
      <TeamCardFooter>
        <FooterName>{name}</FooterName>
        <FooterFoundation>Year of foundation: {number}</FooterFoundation>
      </TeamCardFooter>
    </TeamCard>
  );
};

const TeamCard = styled.div`
  max-width: 365px;
  width: 100%;
  height: 350px;
  margin: 0 20px 15px 20px;
  background: linear-gradient(121.57deg, #707070 1.62%, #393939 81.02%);
  border-radius: 4px;
  position: relative;
`
const TeamCardFooter = styled.div`
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
`
const FooterFoundation = styled.div`
  font-size: 14px;
  color: ${({theme}) => theme.colors.lightGrey};
  text-align: center;
`