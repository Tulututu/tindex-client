/* eslint-disable */
// * IMPORT_MODULES
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { registerUser , changeField } from '../modules/register';


// * IMPORT_COMPONENTS
// import RegisterFrom from '../components/systems/user_regist/RegisterFrom';

//* IMPORT_CONTAINER
import HeaderContainer from './HeaderContainer';
import logoOnly from '../public/logoOnly.png';

// * =================================
// *       REGISTER_CONTAINER
// * =================================

// * STYLED_COMPONENT
const boxFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const IntroImg = styled.img`
  width: 27vw;
  animation: ${boxFade} 1s forwards;
`;

const IntroDiv = styled.div`
  margin-top: 80px;
  align-items: center;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
`;

const Introtext = styled.h2`
  animation: ${boxFade} 4s forwards;
  color: #495863;
  font-size: 75px;
  font-weight: 500;
  margin: 40px 0;
`;

const LoginPageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    align-items: normal;
  }
  @media (max-width: 768px) {
    align-items: normal;
  }
  position: relative;
`;

const RegisterContainer = (props) => {
  const [confilmErr, setConfilmErr] = useState(0);
  //* USE_DISPATCH
  const dispatch = useDispatch();

  //* ON_CHANGE & ON_SUBMIT
  const onChange = (name, value) => {
    dispatch(
      changeField({
        key: name,
        value,
      }),
    );
    if (confilmErr) {
      setConfilmErr(0);
    }
  };

  //* USE_SELECTOR & USE_EFFECT
  const {
    registerSuccess,
    gender,
    age,
    name,
    email,
    password,
    passwordConfirm,
    residence,
    profileImage,
  } = useSelector(({ registerReduce }) => ({
    registerSuccess: registerReduce.registerSuccess,
    gender: registerReduce.gender,
    age: registerReduce.age,
    name: registerReduce.name,
    email: registerReduce.email,
    password: registerReduce.password,
    passwordConfirm: registerReduce.passwordConfirm,
    residence: registerReduce.residence,
    profileImage: registerReduce.profileImage,
  }));

  useEffect(() => {
    window.scrollTo(0, 0);
    if (registerSuccess === false) {
    }
    if (registerSuccess) {
      props.history.push('/login');
    }
  }, [registerSuccess, props.history]);

  // * =================================
  // *       HANDLER_FUNCTIONS
  // * =================================
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (password !== passwordConfirm) {
      setConfilmErr(1);
    } else {
      const requestBody = {
        gender,
        age,
        name,
        email,
        password,
        residence,
        profileImage,
      };
      dispatch(registerUser(requestBody));
    }
  };
  //* VIRTURE_DOM
  return (
    <>
      <HeaderContainer />
      <LoginPageContent>
        <IntroDiv>
          <IntroImg src={logoOnly} alt="logo" />
          <Introtext>새 계정을 만들어 볼까요?</Introtext>
        </IntroDiv>
        <RegisterFrom
          onSubmitHandler={onSubmitHandler}
          onChange={onChange}
          confilmErr={confilmErr}
          setConfilmErr={setConfilmErr}
        />
      </LoginPageContent>
    </>
  );
};

export default withRouter(RegisterContainer);
