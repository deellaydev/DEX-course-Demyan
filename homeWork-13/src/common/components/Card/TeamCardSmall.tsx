import React, {FC} from 'react';
import styled from "styled-components";

interface TeamCardSmallProps {
  image: string
  name: string
  foundationYear: string
}

export const TeamCardSmall: FC<TeamCardSmallProps> = ({image, name, foundationYear, ...attr}) => {
  return (
    <TeamCard>
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
  height: 350px;
  margin-bottom: 15px;
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