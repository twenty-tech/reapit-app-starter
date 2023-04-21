import { FC } from "react";
import connectImage from '../assets/reapit-connect.png'
import loginGraphic from '../assets/login-graphic.svg'
import { BodyText, Button } from "@reapit/elements";
import { reapitConnectBrowserSession } from "../constants";
import styled from 'styled-components';

const LoginContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  background-color: #fff;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

const LoginWrapper = styled.div`
  background-color: #fff;
  width: 40%;
  padding: 2rem;
  pointer-events: auto;

  &.disabled {
    pointer-events: none;
  }

  h1,
  p,
  img {
    text-align: center;
  }

  img {
    margin: 0 auto;
    max-width: 200px;
    display: block;
  }

  button {
    margin: 0 auto 2rem auto;
    max-width: 400px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 1200px) {
    padding: 0 3rem;
  }
`

const LoginImageContainer = styled.div`
  background-color: #fff;
  width: 60%;
  height: 100vh;
  font-size: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const LoginImage = styled.img`
  position: absolute;
  height: 100%;
  z-index: 1;
`

const Slider = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background: #094c98;
  outline: none;
  height: 1px;
  top: -1px;
  position: relative;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #094c98;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #094c98;
    cursor: pointer;
  }
`

const Login: FC = () => (
  <LoginContainer>
    <LoginImageContainer>
      <LoginImage src={loginGraphic} alt="login graphic" />
    </LoginImageContainer>
    <LoginWrapper>
      <BodyText>
        <img src={connectImage} alt="Reapit Connect Graphic" />
      </BodyText>
      <BodyText>
        <Button type="button" onClick={() => reapitConnectBrowserSession.connectLoginRedirect()} loading={false} intent="primary" disabled={false} fullWidth>
          Login
        </Button>
      </BodyText>
    </LoginWrapper>
  </LoginContainer>
)

export default Login
