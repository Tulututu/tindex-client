import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Element, scroller } from 'react-scroll';
// * =================================
// *       PASS_WORD
// * =================================

// * STYLED_COMPONENT
const RegisterInputText = styled.h2`
  margin: 0;
  margin-bottom: 8px;
  font-size: 30px;
  color: #5f5f5f;
  font-weight: 400;
  margin-top: 29px;
`;

const RegisterInput = styled.input`
  border: 2px solid #f94670;
  border-radius: 20px;
  padding: 6px 24px;
  font-size: 22px;
  &:focus {
    outline: none;
  }
`;

const ErrMsg = styled.h3`
  color: firebrick;
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  margin: 5px 10px 0;
`;

const Password = ({ onChange, confilmErr }) => {
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  let conditonErrMessage = <ErrMsg>패스워드가 서로 일치하지 않습니다.</ErrMsg>;
  const scrollTo = () => {
    scroller.scrollTo('myScrollToElement', {
      duration: 800,
      smooth: 'easeInOutQuart',
      offset: -200,
    });
  };
  useEffect(() => {
    if (confilmErr) {
      console.log('error!');
      scrollTo();
    }
  }, [confilmErr]);
  const { password, confilmPassword } = useSelector((registerReduce) => ({
    password: registerReduce.password,
    confilmPassword: registerReduce.confilmPassword,
  }));

  return (
    <div>
      <RegisterInputText>패스워드</RegisterInputText>
      <RegisterInput
        name="password"
        type="password"
        value={password}
        onChange={onChangeHandler}
        style={{ width: '170px' }}
        required
      />
      <RegisterInputText>패스워드 확인</RegisterInputText>
      <Element name="myScrollToElement"></Element>
      <RegisterInput
        name="passwordConfirm"
        type="password"
        value={confilmPassword}
        onChange={onChangeHandler}
        style={{ width: '170px' }}
        required
      />
      {confilmErr ? conditonErrMessage : null}
    </div>
  );
};
export default Password;
