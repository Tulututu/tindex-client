import React from 'react';
import styled from 'styled-components';
import Normal from './Nomal';
import FaceBook from './FaceBook';
import Kakao from './Kakao';


// STYLED-COMPONENTS
const SnsLoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-items: center;
`;

const SnsLogin = ({ oAuthLoginHandler }) => (
  <SnsLoginDiv>
    <Normal />
    <FaceBook oAuthLoginHandler={oAuthLoginHandler} />
    <Kakao oAuthLoginHandler={oAuthLoginHandler} />
  </SnsLoginDiv>
  );

export default SnsLogin;
