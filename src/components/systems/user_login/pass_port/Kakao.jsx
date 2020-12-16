import React from 'react';
import styled from 'styled-components';
import KaKaoLogin from 'react-kakao-login';

require('dotenv').config();

const KAKAO_APP_KEY = process.env.REACT_APP_KAKAO_APP_KEY;

const buttonBlock = {
  border: '2px solid white',
  borderRadius: '27px',
  fontSize: '17px',
  color: 'white',
  cursor: 'pointer',
  background: 'none',
  display: 'flex',
  justifyContent: 'center',
  padding: '13px 5px',
  width: '352px',
};

const ButtoninnerText = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  left: -7px;
  position: relative;
`;

const Kakao = ({ oAuthLoginHandler }) => {
  const responseKakao = (response) => {
    const { id } = response.profile;
    const { email } = response.profile.kakao_account;
    oAuthLoginHandler(id, email);
  };
  return (
    <>
      <KaKaoLogin
        token={KAKAO_APP_KEY}
        buttonText="kakao"
        onSuccess={responseKakao}
        onFail={console.error}
        onLogout={console.info}
        style={buttonBlock}
      >
        <ButtoninnerText>카카오 계정으로 로그인</ButtoninnerText>
      </KaKaoLogin>
    </>
  );
};
export default Kakao;
