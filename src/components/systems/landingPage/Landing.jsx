import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import { FaChevronLeft } from 'react-icons/fa';
import logoWhite from '../../../public/logoWhite.png';
import LoginContainer from '../../../containers/LoginContainer';
// * =======================
// * STYLED_COMPONENTS
// * =======================
const MainContent = styled.div`
  position: fixed;
  top: 35%;
`;
const UserContent = styled.div`
  @media (min-width: 768px) {
    bottom: 100px;
  }
  width: 420px;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 35px;
`;
const RegisterButton = styled.button`
  width: 83%;
  font-size: 14px;
  background: white;
  padding: 15px 90px;
  border-radius: 30px;
  border: none;
  color: #616161;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 15px;
`;
const LoginButton = styled.button`
  border: 3px solid white;
  width: 83%;
  font-size: 14px;
  background: none;
  padding: 15px 90px;
  border-radius: 30px;
  /* border: none; */
  color: white;
  font-weight: 600;
  cursor: pointer;

  &:active {
    width: 80%;
  }
`;
const LandingContent = styled.div`
  @media (min-width: 768px) {
    width: 420px;
    left: 50vw;
    height: 100vh;
  }
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  overflow: hidden;
  height: 100vh;
  background: linear-gradient(to right, #f25478, #fa4e46);
`;
const LandingLogo = styled.img`
  width: 220px;
`;
const SpanMessage = styled.span`
  margin: 0 auto;
  color: white;
  font-weight: 400;
  font-size: 13px;
  width: 80%;
  margin-bottom: 25px;
`;
const QuitButtonButton = styled.button`
  @media (min-width: 768px) {
    left: 15px;
  }

  color: white;
  left: -10px;
  top: 40px;

  font-size: 29px;
  position: absolute;
  background: none;
  border: none;
  cursor: pointer;
`;

const Landing = ({ openLoginModal, loginPopup, onRegisterHandler }) => 
  //* ======================
  //*    RENDER
  //* ======================
   (
     <>
       <LandingContent>
         {loginPopup && (
         <QuitButtonButton onClick={openLoginModal}>
           <FaChevronLeft />
         </QuitButtonButton>
        )}
         <MainContent>
           <LandingLogo src={logoWhite} alt="logo" />
         </MainContent>

         <UserContent>
           <SpanMessage>
             `계정 만들기` 나 `로그인`을 누르시면 이용약관에 동의하는것으로
             간주됩니다. Tindux의 개인정보 취급방침 및 쿠키 정책에서 회원 정보
             처리 방법을 확인하실 수 있습니다.
           </SpanMessage>
           {!loginPopup ? (
             <>
               <RegisterButton onClick={onRegisterHandler}>
                 계정 만들기
               </RegisterButton>
               <LoginButton onClick={openLoginModal}>로그인</LoginButton>
             </>
          ) : (
            <LoginContainer openLoginModal={openLoginModal} />
          )}
         </UserContent>
       </LandingContent>
     </>
  )
;

export default Landing;
