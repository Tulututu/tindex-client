import React from 'react';
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
// * =================================
// *       RESIDENCE
// * =================================

// * STYLED_COMPONENT
const textFade = keyframes`

0% {
    transform: translateY(0px);
  }
  100% {
      transform: translateY(-6px);
  }
 
`;
const LocationBtn = styled.button`
  border: none;
  color: white;
  font-weight: 600;
  background: #f7544c;
  font-size: 15px;
  border-radius: 16px;
  padding: 4px 9px;
  cursor: pointer;
  &:hover {
    animation: ${textFade} 1s forwards;
  }
  &:focus {
    outline: none;
  }
`;

const Locationlist = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  justify-content: space-between;
`;
const LiveText = styled.h2`
  font-size: 50px;
  color: #404548;
  font-weight: 300;
  text-align: center;
  margin: 150px 0 20px 0;
  width: 710px;
`;

const Residence = ({ onChange }) => {
  const { residence, name } = useSelector(({ registerReduce }) => ({
    residence: registerReduce.residence,
    name: registerReduce.name,
  }));

  const onChangeHandler = (name, location) => {
    onChange(name, location);
  };

  const area = [
    {
      loc: '서울특별시',
      locNum: 1,
    },
    {
      loc: '경기도',
      locNum: 2,
    },
    {
      loc: '강원도',
      locNum: 3,
    },
    {
      loc: '충청북도',
      locNum: 4,
    },
    {
      loc: '충청남도',
      locNum: 5,
    },
    {
      loc: '전라북도',
      locNum: 6,
    },
    {
      loc: '전라남도',
      locNum: 7,
    },
    {
      loc: '경상북도',
      locNum: 8,
    },
    {
      loc: '경상남도',
      locNum: 9,
    },
  ];
  const locationArr = Object.values(area);

  const iterationElement = area.map((e) => {
    return (
      <li key={e.locNum}>
        <span>
          <LocationBtn
            name="residence"
            type="button"
            onClick={() => {
              onChangeHandler('residence', e.locNum);
            }}
          >
            {e.loc}
          </LocationBtn>
        </span>
      </li>
    );
  });
  let conditionText = null;

  if (name && residence) {
    conditionText = (
      <div
        style={{
          textAlign: 'center',
          fontSize: '30px',
          fontWeight: '400',
          color: '#404548',
          margin: '80px 127px 50px',
        }}
      >
        {name}님은
        <h3 style={{ fontWeight: '500', margin: '5px 0px' }}>
          {locationArr[residence - 1].loc}
        </h3>
        에 거주하고 계시군요.
      </div>
    );
  }

  return (
    <div>
      <LiveText>
        {name}
        {name && '님은'} 어디에 거주하시나요?
      </LiveText>
      <Locationlist>{iterationElement}</Locationlist>
      {conditionText}
    </div>
  );
};

export default Residence;
