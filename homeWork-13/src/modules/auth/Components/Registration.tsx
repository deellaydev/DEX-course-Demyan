import React, {useEffect} from 'react';
import {Input} from "../../../common/components/Input/Input";
import {Button} from "../../../common/components/Button/Button";
import {CustomLink} from "../../../common/components/Link/CustomLink";
import formBackground from "../../../assests/icons/login_img.png";
import styled from "styled-components";
import registrationImage from '../../../assests/icons/registration_img.png'
import {Checkbox} from "../../../common/components/Checkbox/Checkbox";
import {useForm} from "react-hook-form";
import {baseRequest} from "../../../api/baseRequest";
import {AuthService} from "../../../api/auth/authService";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../core/hooks/redux";
import {registrationAction} from "../authAsyncAction";
import {Notification} from "../../../common/components/Notification/Notification";

type FormData = {
  userName: string
  login: string
  password: string
  confirmPassword: string
}

export const Registration = () => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const {register, setValue, handleSubmit, formState: {errors}} = useForm<FormData>({mode: "onBlur"})
  const {error, loading} = useAppSelector((state) => state.authReducer)

  const onSubmit = ({userName, login, password, confirmPassword}: FormData) => {
    if (password === confirmPassword) {
      dispatch(registrationAction({userName, login, password}))
    } else {
      alert('Пароли не совпадают')
    }
  }

  useEffect(() => {
    if (!error && !loading && localStorage.getItem('token')) navigate('/')
  })

  return (
    <StyledLogin>
      <StyledLoginFormContainer>
        <LoginFormInner>
          <LoginTitle>Sign Up</LoginTitle>
          <LoginForm onSubmit={handleSubmit(onSubmit)}>
            <Input label={'Name'} id={'registrationName'} register={register} name={'userName'}/>
            <Input label={'Login'} id={'registrationLogin'} register={register} name={'login'}/>
            <Input label={'Password'} type={'password'} id={'registrationPassword'} register={register}
                   name={'password'}/>
            <Input label={'Enter your password again'} type={'password'} id={'registrationConfirmPassword'}
                   register={register} name={'confirmPassword'}/>
            <Checkbox>I accept the agreement</Checkbox>
            <Button type={'submit'}>Sign Up</Button>
          </LoginForm>
          <LoginText>Already a member?<CustomLink onClick={() => navigate('/login')}>Sign In</CustomLink></LoginText>
        </LoginFormInner>
      </StyledLoginFormContainer>
      <StyledLoginImageContainer>
        <StyledLoginImage src={registrationImage}/>
      </StyledLoginImageContainer>
      {error ? <Notification>Registration was rejected.</Notification> : null}
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
  padding: 15px 20px;
  @media (max-width: 1000px) {
    max-width: 100%;
  }
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
  @media (max-width: 1000px) {
    display: none;
  }
`
const StyledLoginImage = styled.img`

`
