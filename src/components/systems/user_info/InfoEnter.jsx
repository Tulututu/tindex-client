import React from 'react';
import styled from 'styled-components';
//* ======================
//*     STYLED_COMPONENT
//* ======================
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
// TODO ======================
// TODO    INFO_CONTAINER (CP)
// TODO ======================
const InfoEnter = ({ currPage }) => 
  //* ======================
  //*    RENDER
  //* ======================
  <ResponseBlock>{currPage}</ResponseBlock>
;

export default InfoEnter;
