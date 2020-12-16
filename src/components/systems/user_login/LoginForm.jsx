import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const IdPwdH2 = styled.h2`
  font-size: 16px;
  margin: 0;
  font-weight: 500;
  color: white;
  margin-bottom: 4px;
  margin-left: 15px;
`;
const LoginInputForm = styled.form`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 148px;
`;
const LoginInput = styled.input`
  font-size: 14px;
  border-radius: 23px;
  border: 2px solid #f8476c;
  padding: 6px 10px;
  font-weight: 600;
  margin-bottom: 15px;
  color: white;
  background: rgb(0, 0, 0, 0.4);
  &:focus {
    outline: none;
  }
`;
const SubmitButton = styled.button`
  color: white;
  font-size: 16px;
  border-radius: 26px;
  background: #ff5b7d;
  font-weight: 700;
  border: none;
  padding: 9px 10px;
`;

const LoginForm = ({ onSubmitHandler, loginFormOnChange }) => {
  const { email, password } = useSelector(({ userReducer }) => ({
    email: userReducer.email,
    password: userReducer.password,
  }));

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    loginFormOnChange(name, value);
  };

  return (
    <LoginInputForm onSubmit={onSubmitHandler}>
      <IdPwdH2>이메일</IdPwdH2>
      <LoginInput
        type="text"
        name="email"
        value={email}
        onChange={onChangeHandler}
      />
      <IdPwdH2>패스워드</IdPwdH2>
      <LoginInput
        type="password"
        name="password"
        value={password}
        onChange={onChangeHandler}
      />
      <SubmitButton type="submit">로그인</SubmitButton>
    </LoginInputForm>
  );
};

export default LoginForm;
