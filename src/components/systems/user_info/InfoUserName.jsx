import React from 'react';
import styled, { keyframes } from 'styled-components';
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
const BlockDiv = styled.div`
  @media (max-width: 768px) {
    bottom: 15vh;
  }
  position: fixed;
  bottom: 35vh;
  display: flex;
  flex-direction: column;
  animation: ${boxFade} 0.6s forwards;
`;
const RegisterInputText = styled.h2`
  font-size: 50px;
  font-weight: 700;
  color: #303030;
`;
const RegisterInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 3px solid #d2d2d2;
  font-size: 27px;
  padding: 6px 0px;
  margin-bottom: 10px;
  &:focus {
    outline: none;
  }
`;
const Strong = styled.strong`
  font-size: 15px;
  font-weight: 500;
  color: #9d9d9d;
  text-align: center;
  margin-bottom: 90px;
`;
const ContinueBtnDiv = styled.div`
  text-align: center;
`;
const ContinueBtn = styled.button`
  border: none;
  font-size: 25px;
  color: #afafaf;
  cursor: pointer;
  background: none;
  background: #f7f7f7;
  width: 100%;
  border-radius: 100px;
  padding: 6px;
`;
// TODO ======================
// TODO    INFO_USER_NAME
// TODO ======================
const InfoUserName = ({ onChange, changePages, name }) => {
  //* ========================
  //*   VARIABLE || FUNCTIONS
  //* ========================
  const onChangeHandler = (event) => {
    // eslint-disable-next-line no-shadow
    const { name, value } = event.target;
    onChange(name, value);
  };
  //* ======================
  //*    RENDER
  //* ======================
  return (
    <BlockDiv>
      <RegisterInputText>이름:</RegisterInputText>
      <RegisterInput
        placeholder="이름"
        type="text"
        name="name"
        value={name}
        onChange={onChangeHandler}
        required
      />
      <Strong>Tindux에는 다음과 같이 표시됩니다.</Strong>
      <ContinueBtnDiv>
        <ContinueBtn onClick={() => changePages('next')}>계속</ContinueBtn>
      </ContinueBtnDiv>
    </BlockDiv>
  );
};
export default InfoUserName;
