import React from 'react';
import styled, { keyframes } from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import { GrFormPrevious } from 'react-icons/gr';
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
    bottom: 0;
    margin-bottom: 100px;
  }
  position: fixed;
  bottom: 30vh;
  display: flex;
  flex-direction: column;
  animation: ${boxFade} 0.6s forwards;
`;
const RegisterInputText = styled.h2`
  font-size: 50px;
  font-weight: 700;
  color: #303030;
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
const ButtonList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 130px;
  list-style: none;
  padding: 0;
  width: 100%;
`;
const PrevBtn = styled.button`
  position: relative;
  right: 160px;
  top: 0;
  font-size: 90px;
  opacity: 0.2;
  background: none;
  border: none;
  color: #afafaf;
  cursor: pointer;
`;
// TODO ======================
// TODO    INFO_GENDER (CP)
// TODO ======================
const InfoGender = ({ onChange, changePages, gender }) => {
  //* =======================
  //*   VARIABLE || FUNCTIONS
  //* =======================
  const genderList = [
    { gender: '여성', number: 0 },
    { gender: '남성', number: 1 },
  ];
  const genderHandler = (genderNum) => {
    onChange('gender', genderNum);
  };
  //* ========================
  //*   CONDITIONAL_CSS
  //* ========================
  const GenderBtnstyles = {
    onClick: {
      border: '3px solid rgb(249 126 74)',
      color: 'white',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #ff4187, #fa8046)',
      fontSize: '18px',
      borderRadius: '30px',
      padding: '9px 21px',
      cursor: 'pointer',
      width: '280px',
      marginBottom: '20px',
    },
    nonClick: {
      border: '3px solid #c9c9c9',
      color: '#c9c9c9',
      fontWeight: 'bold',
      background: 'none',
      fontSize: '18px',
      borderRadius: '30px',
      padding: '9px 21px',
      cursor: 'pointer',
      width: '280px',
      marginBottom: '20px',
    },
  };
  const { onClick, nonClick } = GenderBtnstyles;
  //* ========================
  //*   ITERATOR_RENDERING
  //* ========================
  const repeatElement = genderList.map((ele) => (
    <li key={ele.number}>
      <button
        type="button"
        onClick={() => {
            genderHandler(ele.number);
          }}
        style={ele.number === gender ? onClick : nonClick}
      >
        {ele.gender}
      </button>
    </li>
    ));
  //* ======================
  //*    RENDER
  //* ======================
  return (
    <BlockDiv>
      <PrevBtn>
        <GrFormPrevious onClick={() => changePages('prev')} />
      </PrevBtn>
      <RegisterInputText>성별:</RegisterInputText>
      <ButtonList>{repeatElement}</ButtonList>
      <ContinueBtnDiv>
        <ContinueBtn onClick={() => changePages('next')}>계속</ContinueBtn>
      </ContinueBtnDiv>
    </BlockDiv>
  );
};
export default InfoGender;
