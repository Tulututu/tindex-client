import React, { useState } from 'react';
import styled from 'styled-components';

// * =================================
// *       AGE_GENDER
// * =================================

// * STYLED_COMPONENT
const TitleH2 = styled.h2`
  margin-bottom: 8px;
  font-size: 30px;
  color: #5f5f5f;
  font-weight: 400;
  margin-top: 29px;
  cursor: pointer;
`;

const ButtonList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 130px;
  list-style: none;
  padding: 0;
`;

const AgeSelect = styled.select`
  font-weight: 600;
  color: white;
  background: #f94670;
  font-size: 18px;
  border-radius: 32px;
  border: none;
  padding: 5px 10px;
`;

const AgeGender = ({ onChange }) => {
  const [choice, setChoice] = useState();
  const gender = [
    { gender: '남', number: 0 },
    { gender: '여', number: 1 },
  ];

  const age = [
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

  const genderHandler = (genderNum) => {
    setChoice(genderNum);
    onChange('gender', genderNum);
  };
  const ageHandler = (event) => {
    const { name, value } = event.target;
    onChange(name, Number(value));
  };

  const { onClick, nonClick } = GenderBtnstyles;
  const repeatElement = gender.map((ele) => {
    return (
      <li key={ele.number}>
        <button
          type="button"
          onClick={() => {
            genderHandler(ele.number);
          }}
          style={choice === ele.number ? onClick : nonClick}
        >
          {ele.gender}
        </button>
      </li>
    );
  });

  const ageRepeatElement = age.map((ele) => {
    return (
      <option key={ele.number} value={ele.number}>
        {ele.age}
      </option>
    );
  });

  return (
    <div>
      <TitleH2>성별</TitleH2>
      <ButtonList>{repeatElement}</ButtonList>
      <TitleH2>나이</TitleH2>
      <AgeSelect onChange={ageHandler} name="age">
        {ageRepeatElement}
      </AgeSelect>
    </div>
  );
};

// * =========================
// * CONDITION_STYLES
// * =========================

const GenderBtnstyles = {
  onClick: {
    border: 'none',
    color: 'white',
    fontWeight: 'bold',
    background: 'rgb(249, 70, 112)',
    fontSize: '15px',
    borderRadius: '16px',
    padding: '5px 21px',
    cursor: 'pointer',
  },
  nonClick: {
    border: 'none',
    color: 'rgb(249, 70, 112)',
    fontWeight: 'bold',
    background: 'white',
    boxShadow: '0 0 0 2px rgb(249, 70, 112) inset',
    fontSize: '15px',
    borderRadius: '16px',
    padding: '5px 21px',
    cursor: 'pointer',
  },
};

export default AgeGender;
