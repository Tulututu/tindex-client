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
    margin-bottom: 80px;
  }
  display: flex;
  position: fixed;
  bottom: 30vh;
  flex-direction: column;
  width: 280px;
  animation: ${boxFade} 0.6s forwards;
`;
const RegisterInputText = styled.h2`
  font-size: 50px;
  font-weight: 700;
  color: #303030;
  margin-bottom: 40px;
  margin-top: 25px;
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
const AgeSelect = styled.select`
  font-weight: 600;
  color: #aaaaaa;
  background: none;
  font-size: 30px;
  border-radius: 32px;
  border: none;
  width: 130px;
  position: relative;
  margin: 0 auto;
  margin-bottom: 5px;
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
// TODO    AGE_GENDER (CP)
// TODO ======================
const InfoAge = ({ onChange, changePages, age }) => {
  //* =======================
  //*   VARIABLE || FUNCTIONS
  //* =======================
  const ageList = [
    {
      age: '20 ~ 24',
      number: 1,
    },
    {
      age: '25 ~ 29',
      number: 2,
    },
    {
      age: '30 ~ 34',
      number: 3,
    },
    {
      age: '35 ~ 40',
      number: 4,
    },
  ];
  const ageHandler = (event) => {
    const { name, value } = event.target;
    onChange(name, Number(value));
  };
  //* ========================
  //*   ITERATOR_RENDERING
  //* ========================
  const ageRepeatElement = ageList.map((ele) => (
    <option key={ele.number} value={ele.number}>
      {ele.age}
    </option>
    ));
  //* ======================
  //*    RENDER
  //* ======================
  return (
    <BlockDiv>
      <PrevBtn>
        <GrFormPrevious onClick={() => changePages('prev')} />
      </PrevBtn>
      <RegisterInputText>
        내
        <br />
        나이:
      </RegisterInputText>
      <AgeSelect onChange={ageHandler} value={age} name="age">
        {ageRepeatElement}
      </AgeSelect>
      <Strong>나이는 공개됩니다.</Strong>
      <ContinueBtnDiv>
        <ContinueBtn onClick={() => changePages('next')}>계속</ContinueBtn>
      </ContinueBtnDiv>
    </BlockDiv>
  );
};
export default InfoAge;
