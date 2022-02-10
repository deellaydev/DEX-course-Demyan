import React from "react";
import styled from "styled-components";
import {colors} from "../../assests/style/colors";
import search from '../../assests/icons/search.svg'
import logo from '../../assests/icons/logo.png'
import checkbox from '../../assests/icons/checkbox.svg'
import user from '../../assests/icons/user.png'
import input from '../../assests/icons/input.svg'
import create from '../../assests/icons/create.svg'
import deleteimg from '../../assests/icons/deleteimg.svg'
import player from '../../assests/icons/player.png'
import team from '../../assests/icons/team.png'

export const UiComponent = () => {

  // ---INPUT---
  let errorInput = false
  let addButton = false
  let disabledLink = false

  const WrapperInput = styled.div`
  margin: 10px;
`

  const StyledLabel = styled.label`
  color: ${colors.grey};
  font-size: 14px;
  display: block;
  margin-bottom: 8px;
`

  const ContainerInput = styled.div`
  display: inline;
  position: relative;
`

  const StyledInput = styled.input`
    background-color: ${colors.lightestGrey1};
    height: 40px;
    max-width: 365px;
    width: 100%;
    border: ${errorInput ? `1px solid ${colors.lightestRed}` : 'none'};
    border-radius: 4px;
    color: ${colors.darkGrey};
    font-family: inherit;
    font-weight: 500;
    padding: 0 25px 0 15px;
    font-size: 14px;

  &:hover {
      background-color:  ${colors.lightestGrey};
  }
  &:focus {
    background-color: ${colors.lightestGrey1};
    box-shadow: 0 0 5px #D9D9D9;
  }
  &:disabled {
    color: ${colors.lightestGrey};
  }
`

  const StyledError = styled.div`
    color: ${colors.lightestRed};
    font-size: 12px;
`
  // ---INPUT---

  // ---SEARCH---

  const SearchWrapper = styled.div`
    margin: 10px;
    position: relative;
    display: inline;
  `

  const StyledSearch = styled.input`
    background-color: ${colors.lightestGrey1};
    height: 40px;
    max-width: 365px;
    width: 100%;
    border: none;
    border-radius: 4px;
    color: ${colors.darkGrey};
    font-family: inherit;
    font-weight: 500;
    padding: 0 25px 0 15px;
    font-size: 14px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  `

  const StyledIconSearch = styled.img`
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  `
  // ---SEARCH---


  // ---BUTTON---
    const ButtonWrapper = styled.div`
      margin: 10px;
      max-width: ${addButton ? '105px' : '365px'};
    `

    const StyledButton = styled.button`
      background-color: ${colors.red};
      border: none;
      border-radius: 4px;
      cursor: pointer;
      
      width: 100%;
      height: 40px;
      font-size: 15px;
      line-height: 24px;
      color: #fff;
      
      &:hover{
        background: ${colors.lightRed};
      }
      
      &:active{
        background: ${colors.darkRed};
      }
      
      &:disabled{
        background: ${colors.lightestGrey1};
        cursor: default;
        color: ${colors.lightestGrey};
      }
    `

    const StyledCancelButton = styled.button`
      background-color: ${colors.white};
      border: 1px solid ${colors.lightGrey};
      border-radius: 4px;
      height: 40px;
      max-width: 171px;
      width: 100%;
      font-size: 15px;
      color: ${colors.lightGrey};
      cursor: pointer;
      
      &:hover {
        background-color: ${colors.lightestGrey};
        border: 1px solid ${colors.lightGrey};
      }
      
      &:active {
        background-color: ${colors.lightGrey};
        color: ${colors.grey};
        border: 1px solid ${colors.grey}
      }
      
      &:disabled {
        background-color: ${colors.lightestGrey1};
        color: ${colors.lightestGrey};
        cursor: default;
      }
    `
  // ---BUTTON---

  // ---LOGO---
    const LogoWrapper = styled.div`
      margin: 10px;
      
    `

    const StyledLogo = styled.img`
      max-width: 191px;
      height: 48px;
      width: 100%;
    `
  // ---LOGO---

  //--NOTIFICATION--
    const NotificationWrapper = styled.div`
      margin: 10px;
      
    `
  const StyledNotification = styled.div`
    max-width: 470px;
    width: 100%;
    height: 40px;
    padding: 8px 16px;
    background-color: ${colors.lightRed};
    border-radius: 4px;
    display: flex;
    align-items: center;
    color: ${colors.white};
  `
  //--NOTIFICATION--

  //--CHECKBOX--
  const CheckboxWrapper = styled.div`
    margin: 10px;
  `
  const StyledLabelCheckbox = styled.label`
    display: flex;
    align-items: center;
  `
  const StyledCheckbox = styled.input`
    appearance: none;
    width: 12px;
    height: 12px;
    border: 1px solid ${colors.lightGrey};
    border-radius: 2px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    &:after {
      display: none;
      content: '';
      background-image: url( ${checkbox});
      background-size: 7px 6px;
      width: 7px;
      height: 6px;
    }
    &:hover{
      border: 1px solid ${colors.lightestRed};
    }
  `
  const StyledCheckmark = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 7px;
    height: 5px;
    display: none;
  `
  const StyledCheckboxText = styled.span`
    
  `
  //--CHECKBOX--

  //--LINK--
    const LinkWrapper = styled.div`
      margin: 10px;
    `
    const StyledLink = styled.div`
      color:  ${disabledLink ? `${colors.lightestGrey}` : `${colors.red}`};
      text-decoration-color: ${disabledLink ? `${colors.lightestGrey}` : `${colors.red}`};
      text-decoration: underline;
      cursor: pointer;
    `
  //--LINK--

  //--NAVIGATION--

  const NavigationWrapper = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: 10px;
    box-shadow: 0px 1px 10px rgba(209, 209, 209, 0.5);
  `
  const NavigationInner = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 50px;
  `
  const UserWrapper = styled.div`
    margin: 10px;
  `
  const UserInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  `
  const UserText = styled.p`
    margin-right: 16px;
    color: ${colors.darkGrey};
  `
  const UserLogo = styled.img`
    width: 30px;
    height: 30px;
  `

  //--NAVIGATION--

  //--HAMBURGER--
  const HamburgerInner = styled.div`
    height: 100vh;
    max-width: 140px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px 47px;
    box-shadow: 0px 1px 10px rgba(209, 209, 209, 0.5);
  `
  const HamburgerMenu = styled.div`
    display: flex;
    flex-direction: column;
  `
  const HamburgerPoint = styled.div`
    margin-bottom: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    
    &:hover{
      svg {
        fill: ${colors.red};
      }
      p {
        color: ${colors.red};;
      }
    }
  `
  const HamburgerImg = styled.svg`
    width: 100%;
  `
  const HamburgerText = styled.p`
    font-size: 12px;
    color: ${colors.lightGrey};
  `
  const HamburgerSignout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 48px;
    cursor: pointer;
  `
  const HamburgerSignoutImg = styled.img`
    width: 24px;
    height: 24px;
    margin-bottom: 4px;
  `
  const HamburgerSignoutText = styled.p`
    font-size: 12px;
    color: ${colors.lightestRed}
  `
  //--HAMBURGER--

  //--TEAMCARD--
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
    border: 0.5px solid ${colors.lightGrey};
    border-radius: 10px 10px 0px 0px;
  `
  const BreadCrumbs = styled.p`
    color: ${colors.red};
  `
  const BreadCrumbsSeparator = styled.span`
    color: ${colors.lightGrey};
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
    color: ${colors.white};
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
    color: ${colors.lightRed};
  `
  //--TEAMCARD--

  return (
    <div>

      <WrapperInput>
        <StyledLabel>Login</StyledLabel>
        <ContainerInput>
          <StyledInput/>
        </ContainerInput>
        {errorInput ? <StyledError>Required</StyledError> : null}
      </WrapperInput>
      <WrapperInput>
        <StyledLabel>Login</StyledLabel>
        <ContainerInput>
          <StyledInput value='test' disabled={true}/>
        </ContainerInput>
        {errorInput ? <StyledError>Required</StyledError> : null}
      </WrapperInput>

      <SearchWrapper>
        <StyledSearch type={"search"} placeholder="Search..."/>
        <StyledIconSearch src={search}/>
      </SearchWrapper>

      <ButtonWrapper>
        <StyledButton>Sign In</StyledButton>
      </ButtonWrapper>

      <ButtonWrapper>
        <StyledButton disabled={true}>Sign In</StyledButton>
      </ButtonWrapper>

      <ButtonWrapper>
        <StyledCancelButton>Cancel</StyledCancelButton>
      </ButtonWrapper>

      <ButtonWrapper>
        <StyledCancelButton disabled={true}>Cancel</StyledCancelButton>
      </ButtonWrapper>

      <LogoWrapper>
        <StyledLogo src={logo}/>
      </LogoWrapper>

      <NotificationWrapper>
        <StyledNotification>User with the specified username / password was not found.</StyledNotification>
      </NotificationWrapper>

      <CheckboxWrapper>
        <StyledLabelCheckbox>
          <StyledCheckbox type={'checkbox'}/>
          <StyledCheckboxText>Text</StyledCheckboxText>
        </StyledLabelCheckbox>
      </CheckboxWrapper>

      <LinkWrapper>
        <StyledLink>Text</StyledLink>
      </LinkWrapper>

      <NavigationWrapper>
        <NavigationInner>
          <StyledLogo src={logo}/>
          <UserWrapper>
            <UserInner>
              <UserText>John Smith</UserText>
              <UserLogo src={user}/>
            </UserInner>
          </UserWrapper>
        </NavigationInner>
      </NavigationWrapper>

      <HamburgerInner>
        <HamburgerMenu>
          <HamburgerPoint>
            <HamburgerImg width="30" height="30" viewBox="0 0 16 16" fill="#9C9C9C" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path fillRule="evenodd" clipRule="evenodd" d="M7.32675 5.33325C7.32675 6.43992 6.44008 7.33325 5.33341 7.33325C4.22675 7.33325 3.33341 6.43992 3.33341 5.33325C3.33341 4.22659 4.22675 3.33325 5.33341 3.33325C6.44008 3.33325 7.32675 4.22659 7.32675 5.33325ZM12.6601 5.33325C12.6601 6.43992 11.7734 7.33325 10.6667 7.33325C9.56008 7.33325 8.66675 6.43992 8.66675 5.33325C8.66675 4.22659 9.56008 3.33325 10.6667 3.33325C11.7734 3.33325 12.6601 4.22659 12.6601 5.33325ZM5.33341 8.66659C3.78008 8.66659 0.666748 9.44659 0.666748 10.9999V11.9999C0.666748 12.3666 0.966748 12.6666 1.33341 12.6666H9.33341C9.70008 12.6666 10.0001 12.3666 10.0001 11.9999V10.9999C10.0001 9.44659 6.88675 8.66659 5.33341 8.66659ZM10.0201 8.69992C10.2534 8.67992 10.4734 8.66659 10.6667 8.66659C12.2201 8.66659 15.3334 9.44659 15.3334 10.9999V11.9999C15.3334 12.3666 15.0334 12.6666 14.6667 12.6666H11.2134C11.2867 12.4599 11.3334 12.2333 11.3334 11.9999V10.9999C11.3334 10.0199 10.8067 9.27992 10.0467 8.72659C10.0447 8.72457 10.0427 8.72194 10.0405 8.71907C10.0354 8.71246 10.0294 8.70457 10.0201 8.69992Z" />
              </g>
            </HamburgerImg>
            <HamburgerText>Teams</HamburgerText>
          </HamburgerPoint>
          <HamburgerPoint>
            <HamburgerImg width="30" height="30" viewBox="0 0 16 16" fill="#9C9C9C" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path fillRule="evenodd" clipRule="evenodd" d="M10.6667 5.33341C10.6667 6.80675 9.47342 8.00008 8.00008 8.00008C6.52675 8.00008 5.33341 6.80675 5.33341 5.33341C5.33341 3.86008 6.52675 2.66675 8.00008 2.66675C9.47342 2.66675 10.6667 3.86008 10.6667 5.33341ZM2.66675 12.0001C2.66675 10.2267 6.22008 9.33341 8.00008 9.33341C9.78008 9.33341 13.3334 10.2267 13.3334 12.0001V12.6667C13.3334 13.0334 13.0334 13.3334 12.6667 13.3334H3.33341C2.96675 13.3334 2.66675 13.0334 2.66675 12.6667V12.0001Z" />
              </g>
            </HamburgerImg>
            <HamburgerText>Players</HamburgerText>
          </HamburgerPoint>
        </HamburgerMenu>
        <HamburgerSignout>
          <HamburgerSignoutImg src={input}/>
          <HamburgerSignoutText>Sing Out</HamburgerSignoutText>
        </HamburgerSignout>
      </HamburgerInner>

      <CardInner>
        <CardHeader>
          <BreadCrumbs>
            Teams
            <BreadCrumbsSeparator>
              /
            </BreadCrumbsSeparator>
            Denver Nuggets
          </BreadCrumbs>
          <CardHeaderButtons>
            <CardButton src={create}/>
            <CardButton src={deleteimg}/>
          </CardHeaderButtons>
        </CardHeader>
        <CardBody>
          <CardBodyImg src={team}/>
          <CardBodyBox>
            <CardBodyTitle>Denver Nuggets</CardBodyTitle>
            <CardBodyInfo>
              <CardBodyCouple>
                <CardCoupleTitle>Year of foundation</CardCoupleTitle>
                <CardCoupleText>1976</CardCoupleText>
              </CardBodyCouple>
              <CardBodyCouple>
                <CardCoupleTitle>Division</CardCoupleTitle>
                <CardCoupleText>Northwestern</CardCoupleText>
              </CardBodyCouple>
              <CardBodyCouple>
                <CardCoupleTitle>Conference</CardCoupleTitle>
                <CardCoupleText>Western</CardCoupleText>
              </CardBodyCouple>
            </CardBodyInfo>
          </CardBodyBox>
        </CardBody>
      </CardInner>

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

    </div>
  );
};
