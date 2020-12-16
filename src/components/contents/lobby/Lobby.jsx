import React from 'react';
import styled from 'styled-components';

const ResponseBlock = styled.div`
  @media (min-width: 768px) {
    background: white;
    width: 420px;
    left: 50vw;
    border-radius: 27px;
    border: 11px solid #e5e5e5;
    top: 10px;
    height: 95vh;
  }
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  overflow: hidden;
  top: 0;
  height: 100vh;
  background: linear-gradient(to right, #f25478, #fa4e46);
`;
const Lobby = ({ logoutHandler }) => (
  <ResponseBlock>
    <button type="button" onClick={logoutHandler}>log out test</button>
  </ResponseBlock>
  );

export default Lobby;
