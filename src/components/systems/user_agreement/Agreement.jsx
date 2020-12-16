import React from 'react';
import styled, { keyframes } from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import { HiCheck } from 'react-icons/hi';
import logoOnly from '../../../public/logoOnly.png';
//* ======================
//*     STYLED_COMPONENT
//* ======================
const boxFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const ResponseBlock = styled.div`
  @media (min-width: 768px) {
    width: 420px;
    left: 50vw;
    position: absolute;
  }
  overflow: hidden;
  flex-direction: column;
  left: 0;
  width: 100%;
  background: white;
  align-items: center;

  display: flex;
  justify-content: center;
  position: fixed;
  overflow: hidden;
  height: 100vh;
`;
const FormBlock = styled.div`
  @media (min-width: 768px) {
    width: 420px;
    top: 120px;
  }
  @media (max-height: 812px) {
    top: 9vh;
  }
  // @media (max-height: 667px) {
  //   bottom: 20%;
  // }
  position: fixed;

  display: flex;
  flex-direction: column;
  width: 375px;

  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${boxFade} 1s forwards;
`;
const IntroImg = styled.img`
  width: 35px;
`;
const IntroDiv = styled.div`
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;

  margin-bottom: 20px;
`;
const H2 = styled.h2`
  color: #3e3e3e;
  margin-bottom: 10px;
`;
const Strong = styled.strong`
  @media (max-width: 667px) {
    font-size: 10px;
  }
  color: #979797;
  font-size: 15px;
`;
const ListH3 = styled.h3`
  @media (max-width: 667px) {
    font-size: 16px;
  }
  margin-top: 7px;
  font-weight: 600;
  margin-bottom: 2px;
  color: #3e3e3e;
`;
const ListStrong = styled.strong`
  @media (max-width: 667px) {
    font-size: 14px;
  }
  color: #979797;
  font-weight: 500;
`;
const ListSubTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;
const UnList = styled.ul`
  @media (min-width: 768px) {
    margin-bottom: 105px;
  }
  padding: 0 45px;
  list-style: none;
  margin: 0;

  margin-bottom: 10px;
`;
const List = styled.li`
  margin-bottom: 10px;
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  color: white;
  border: none;
  width: 310px;
  font-size: 19px;
  font-weight: 500;
  padding: 10px;
  border-radius: 210px;
  cursor: pointer;
  background: linear-gradient(to right, #ff4187, #fa8046);
`;
// TODO ======================
// TODO    AGREEMENT
// TODO ======================
const Agreement = ({ history }) => {
  //* ========================
  //*   VARIABLE || FUNCTIONS
  //* ========================
  const agreeHandler = () => {
    history.push('/enterInfo');
  };
  //! ============================================
  //!    RENDER ('Too many same code's repeat')
  //! ============================================
  return (
    <ResponseBlock>
      <FormBlock>
        <IntroDiv>
          <IntroImg src={logoOnly} alt="logo" />
          <H2>Tindux에 오신 것을 환영합니다.</H2>
          <Strong> 아래의 이용 규정을 반드시 지켜 주세요.</Strong>
        </IntroDiv>
        <UnList>
          <List>
            <ListSubTitle>
              <HiCheck
                style={{
                  fontSize: '22px',
                  transform: 'translate(0, 4px)',
                  marginRight: '13px',
                  color: '#ff1575',
                }}
              />
              <ListH3>자신을 솔직하게 보여주기</ListH3>
            </ListSubTitle>
            <ListStrong>
              본인의 사진 ,나이, 자기소개를 솔직하게 올려주세요
            </ListStrong>
          </List>
          <List>
            <ListSubTitle>
              <HiCheck
                style={{
                  fontSize: '22px',
                  transform: 'translate(0, 4px)',
                  marginRight: '13px',
                  color: '#ff1575',
                }}
              />
              <ListH3>항상 조심하기</ListH3>
            </ListSubTitle>
            <ListStrong>
              상대방을 잘 모르는 상태에서 개인 정보를 알려주지 마세요.
            </ListStrong>
          </List>
          <List>
            <ListSubTitle>
              <HiCheck
                style={{
                  fontSize: '22px',
                  transform: 'translate(0, 4px)',
                  marginRight: '13px',
                  color: '#ff1575',
                }}
              />
              <ListH3>매너 있게 행동하기</ListH3>
            </ListSubTitle>
            <ListStrong>
              타인을 존중하고, 자신이 대우받고 싶은 대로 타인을 대하세요.
            </ListStrong>
          </List>
          <List>
            <ListSubTitle>
              <HiCheck
                style={{
                  fontSize: '22px',
                  transform: 'translate(0, 4px)',
                  marginRight: '13px',
                  color: '#ff1575',
                }}
              />
              <ListH3>적극적으로 행동하기</ListH3>
            </ListSubTitle>
            <ListStrong>
              잘못된 행동을 하는 사람이 있으면 반드시 신고해 주세요.
            </ListStrong>
          </List>
        </UnList>
        <ButtonDiv>
          <Button onClick={agreeHandler}>동의함</Button>
        </ButtonDiv>
      </FormBlock>
    </ResponseBlock>
  );
};

export default Agreement;
