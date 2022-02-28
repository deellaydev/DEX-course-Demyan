import React, {FC} from 'react';
import styled from "styled-components";

interface EmptyPageProps {
  image: any;
  title: string;
  text: string;
}

export const EmptyPage: FC<EmptyPageProps> = ({image, title, text}) => {
  return (
    <Container>
      <Inner>
        <Image src={image}/>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Inner>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  max-width: 555px;
  width: 100%;
  height: 570px;
  background-color: #fff;
  border-radius: 15px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`
const Inner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Image = styled.img`
 margin-bottom: 48px; 
`
const Title = styled.p`
  color: ${({theme}) => theme.colors.lightestRed};
  font-weight: 800;
  font-size: 36px;
`
const Text = styled.p`
  color: ${({theme}) => theme.colors.grey};
  font-weight: 400;
  font-size: 24px;
`