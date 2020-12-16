import React from 'react';
import styled, { keyframes } from 'styled-components';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

require('dotenv').config();

const FACE_BOOK_APP_KEY = process.env.REACT_APP_FACE_BOOK_APP_KEY;

const BoxFadeKeyframes = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const FaceBookLoginButton = styled.button`
  background: none;
  border: 2px solid white;
  border-radius: 27px;
  width: 352px;
  font-weight: 700;
  color: white;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  align-items: center;
  padding: 13px 5px;
  animation: ${BoxFadeKeyframes} 0.3s forwards;
`;

const ButtonInnerDiv = styled.div`
  position: relative;

  display: flex;

  align-items: center;
`;

const ButtoninnerText = styled.h3`
  font-weight: 500;
  margin: 0;
  font-size: 14px;
`;

const FaceBookLogin = ({ oAuthLoginHandler }) => {
  const responseFacebook = (response) => {
    const { id, email } = response;
    oAuthLoginHandler(Number(id), email);
  };
  return (
    <FacebookLogin
      appId={FACE_BOOK_APP_KEY}
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
      render={(renderProps) => (
        <FaceBookLoginButton>
          <ButtonInnerDiv onClick={renderProps.onClick}>
            <ButtoninnerText>페이스북 계정으로 로그인</ButtoninnerText>
          </ButtonInnerDiv>
        </FaceBookLoginButton>
      )}
    />
  );
};

export default FaceBookLogin;
