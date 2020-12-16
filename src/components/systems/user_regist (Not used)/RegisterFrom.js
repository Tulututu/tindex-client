import React from 'react';
import styled from 'styled-components';

// * IMPORT_FORM_COMPONENT
import NameEmail from './NameEmail';
import Residence from '../user_regist/Residence';
import AgeGender from './AgeGender';
import ImageUpload from '../user_regist/ImageUpload';
import Password from '../user_regist/Password';

// * ==============================
// *      REGISTER_FORM
// *===============================

// * STYLED_COMPONENT
const FormContent = styled.div`
  background: white;
  border-radius: 30px;
  padding: 40px;
`;

const RegistForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoginBtn = styled.button`
  color: white;
  background: #49709f;
  font-weight: 500;
  border: none;
  border-radius: 26px;
  font-size: 21px;
  padding: 11px;
  display: block;
  background: linear-gradient(to right, #ff5858, #f857a6);
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const RegisterFrom = ({
  onChange,
  onSubmitHandler,
  confilmErr,
  setConfilmErr,
}) => {
  return (
    <>
      <FormContent>
        <RegistForm onSubmit={onSubmitHandler} encType="multipart/form-data">
          <AgeGender onChange={onChange} />
          <NameEmail onChange={onChange} />
          <Password
            onChange={onChange}
            confilmErr={confilmErr}
            setConfilmErr={setConfilmErr}
          />
          <Residence onChange={onChange} />
          <ImageUpload onChange={onChange} />
          <LoginBtn type="submit">회원가입</LoginBtn>
        </RegistForm>
      </FormContent>
    </>
  );
};

export default RegisterFrom;
