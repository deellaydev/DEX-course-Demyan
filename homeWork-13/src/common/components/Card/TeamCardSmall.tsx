import React, {FC} from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

interface TeamCardSmallProps {
  image: string
  name: string
  foundationYear: string
  id: number
}

export const TeamCardSmall: FC<TeamCardSmallProps> = ({image, name, foundationYear, id, ...attr}) => {

  const navigate = useNavigate();

  return (
    <TeamCard onClick={() => navigate(`/teams/${id}`)}>
      <TeamCardWrapper>
        <TeamCardImage src={image}/>
      </TeamCardWrapper>
      <TeamCardFooter>
        <FooterName>{name}</FooterName>
        <FooterFoundation>Year of foundation: {foundationYear}</FooterFoundation>
      </TeamCardFooter>
    </TeamCard>
  );
};

const TeamCard = styled.div`
  max-width: 365px;
  width: 100%;
  height: 340px;
  margin: 0 20px 15px 20px;
  background: linear-gradient(121.57deg, #707070 1.62%, #393939 81.02%);
  border-radius: 4px;
  position: relative;
  cursor: pointer;
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
  font-size: 18px;
`
const FooterFoundation = styled.div`
  font-size: 14px;
  color: ${({theme}) => theme.colors.lightGrey};
  text-align: center;
`
const TeamCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
`
const TeamCardImage = styled.img`
  width: 150px;
  height: 150px;
`