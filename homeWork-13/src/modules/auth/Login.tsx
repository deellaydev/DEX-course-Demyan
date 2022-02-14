import React, {FC} from 'react';
import styled from "styled-components";
import {Input} from "../../common/components/Input/Input";
import {Button} from "../../common/components/Button/Button";
import {Link} from "../../common/components/Link/Link";
import loginImage from '../../assests/icons/login_img.png'

export const Login: FC = ({...attr}) => {
  const StyledLogin = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    background-color: ${({theme}) => theme.colors.lightBlue};
  `
  const StyledLoginFormContainer = styled.div`
    max-width: 606px;
    width: 100%;
    height: 100vh;
    background-color: ${({theme}) => theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
  const LoginTitle = styled.div`
    font-size: 36px;
    line-height: 49px;
    color: ${({theme}) => theme.colors.blue};
    font-weight: normal;
    margin-bottom: 32px;
  `
  const LoginFormInner = styled.div`
    max-width: 365px;
    width: 100%;
  `
  const LoginForm = styled.form`
    margin-bottom: 24px;
  `
  const LoginText = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: ${({theme}) => theme.colors.grey};
    display: flex;
    justify-content: center;
  `
  const StyledLoginImageContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `
  const StyledLoginImage = styled.img`
      
  `
  return (
    <StyledLogin>
      <StyledLoginFormContainer>
        <LoginFormInner>
          <LoginTitle>Sign In</LoginTitle>
          <LoginForm>
            <Input label={'Login'}/>
            <Input label={'Password'} type={'password'}/>
            <Button type={'submit'}>Sign In</Button>
          </LoginForm>
          <LoginText>Not a member yet? <Link>Sign Up</Link></LoginText>
        </LoginFormInner>
      </StyledLoginFormContainer>
      <StyledLoginImageContainer>
        <StyledLoginImage src={loginImage}/>
      </StyledLoginImageContainer>
    </StyledLogin>
  );
};