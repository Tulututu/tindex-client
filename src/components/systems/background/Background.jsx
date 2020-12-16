import React from 'react';
import styled from 'styled-components';
import logo from '../../../public/logoWhite.png';
import backGround from '../../../public/background.png';

const BlockFrame = styled.div`
  width: 100%;
  z-index: -1;
  position: fixed;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.5)
    ),
    url(${backGround});
  background-size: cover;
  height: 100vh;
`;
const IntroduceBlock = styled.div`
  @media (min-width: 768px) {
    position: fixed;
    width: 601px;
    left: 64px;
    display: block;
  }
  display: none;
`;
const LogoImg = styled.img`
  @media (min-width: 768px) {
    top: 45px;
    position: absolute;
    width: 511px;
  }
`;

const Background = () => (
  <>
    <BlockFrame />
    <IntroduceBlock>
      <LogoImg src={logo} alt="logo" />
    </IntroduceBlock>
  </>
  );

export default Background;
