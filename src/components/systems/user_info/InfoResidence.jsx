import React from 'react';
import styled, { keyframes } from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import { GrFormPrevious } from 'react-icons/gr';
import { area } from './data/locationList';
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
  width: 290px;
  justify-content: center;
  position: fixed;
  bottom: 30vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  animation: ${boxFade} 0.6s forwards;
`;
const RegisterInputText = styled.h2`
  margin-bottom: 10px;
  margin-top: 0px;
  font-size: 6vh;
  font-weight: 700;
  color: #303030;
`;
const Locationlist = styled.ul`
  flex-wrap: wrap;
  list-style: none;
  display: flex;
  padding: 0;
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
const ContinueBtnDiv = styled.div`
  text-align: center;
  width: 100%;
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
const LocatiobLi = styled.li`
  margin-bottom: 7px;
  margin-right: 12px;
`;
const Strong = styled.strong`
  font-size: 15px;
  font-weight: 500;
  color: #9d9d9d;
  text-align: center;
  margin-bottom: 12px;
`;
const InfoResidence = ({ onChange, residence, changePages }) => {
  //* ======================
  //*    CONDITIONAL_STYLES
  //* ======================
  const GenderBtnstyles = {
    onClick: {
      color: '#f94670',
      fontWeight: '600',
      background: 'none',
      fontSize: '17px',
      borderRadius: '16px',
      padding: '3px 13px',
      cursor: 'pointer',
      border: '2px solid #f94670',
    },
    nonClick: {
      color: '#a8a8a8',
      fontWeight: '600',
      background: 'none',
      fontSize: '17px',
      borderRadius: '16px',
      padding: '3px 13px',
      cursor: 'pointer',
      border: '2px solid #a8a8a8',
    },
  };
  //* ========================
  //*   VARIABLE || FUNCTIONS
  //* ========================
  const { onClick, nonClick } = GenderBtnstyles;
  const onChangeHandler = (name, location) => {
    onChange(name, location);
  };
  //* ======================
  //*    ITERATION_RENDERING
  //* ======================
  const iterationElement = area.map((e) => (
    <LocatiobLi key={e.locNum}>
      <button
        style={e.locNum === residence ? onClick : nonClick}
        name="residence"
        type="button"
        onClick={() => {
            onChangeHandler('residence', e.locNum);
          }}
      >
        {e.loc}
      </button>
    </LocatiobLi>
    ));
  //* ======================
  //*    RENDER
  //* ======================
  return (
    <BlockDiv>
      <PrevBtn>
        <GrFormPrevious onClick={() => changePages('prev')} />
      </PrevBtn>
      <RegisterInputText>내 거주지</RegisterInputText>
      <Strong>거주 지역과 인접한 키워드를 선택해주세요</Strong>
      <Locationlist>{iterationElement}</Locationlist>
      <ContinueBtnDiv>
        <ContinueBtn onClick={() => changePages('next')}>계속</ContinueBtn>
      </ContinueBtnDiv>
    </BlockDiv>
  );
};
export default InfoResidence;
