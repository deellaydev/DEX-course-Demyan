import React, {FC} from 'react';
import styled from "styled-components";
import {Input} from "../../common/components/Input/Input";
import {Button} from "../../common/components/Button/Button";
import {CustomLink} from "../../common/components/Link/CustomLink";
import loginImage from '../../assests/icons/login_img.png'
import {useForm} from "react-hook-form";
import {baseRequest} from "../../api/baseRequest";
import {Link, useNavigate} from "react-router-dom";
import {AuthService} from "../../api/auth/AuthService";

export const Login: FC = ({...attr}) => {

  type FormData = {
    login: string
    password: string
  }

  const navigate = useNavigate()

  const { register, setValue, handleSubmit, formState: {errors}} = useForm<FormData>({mode: "onBlur"})
  const onSubmit = (data: FormData) => {
    const request = new AuthService().loginService(JSON.stringify(data)).then(({name, token}) => {
      localStorage.setItem('name', name)
      localStorage.setItem('token', token)
      navigate('/')
    })
  }

  return (
    <StyledLogin>
      <StyledLoginFormContainer>
        <LoginFormInner>
          <LoginTitle>Sign In</LoginTitle>
          <LoginForm onSubmit={handleSubmit(onSubmit)}>
            <Input label={'Login'} id={'loginName'} register={register} name={'login'} errorMessage={errors.login?.message} required={true}/>
            <Input label={'Password'} type={'password'} id={'loginPassword'} register={register} name={'password'}/>
            <Button>Sign In</Button>
          </LoginForm>
          <LoginText>Not a member yet? <CustomLink link={'/registration'}>Sign Up</CustomLink></LoginText>
        </LoginFormInner>
      </StyledLoginFormContainer>
      <StyledLoginImageContainer>
        <StyledLoginImage src={loginImage}/>
      </StyledLoginImageContainer>
    </StyledLogin>

  );
};

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