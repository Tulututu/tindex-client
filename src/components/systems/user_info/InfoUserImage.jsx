import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import { GrFormPrevious } from 'react-icons/gr';
import ImageCrop from '../../utils/ImageCrop';
//* ======================
//*     STYLED_COMPONENT
//* ======================
const boxFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const RegisterInputText = styled.h2`
  margin-bottom: 10px;
  margin-top: 0px;
  font-size: 6vh;
  font-weight: 700;
  color: #303030;
`;
const Preview = styled.img`
  height: 200px;
  width: 200px;
  background: #d8d8d8;
  border-radius: 39px;
  cursor: pointer;
`;
const BlockDiv = styled.div`
  @media (max-width: 768px) {
    bottom: 0;
    margin-bottom: 15px;
  }
  width: 290px;
  justify-content: center;
  position: fixed;
  bottom: 25vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  animation: ${boxFade} 0.6s forwards;
`;
const PrevBtn = styled.button`
  position: relative;
  right: 160px;
  top: 0;
  font-size: 90px;
  opacity: 0.2;
  background: none;
  border: none;
  color: #afafaf;
  cursor: pointer;
`;
const ContinueBtnDiv = styled.div`
  text-align: center;
  width: 100%;
`;
const ContinueBtn = styled.button`
  border: none;
  font-size: 25px;
  color: #afafaf;
  cursor: pointer;
  background: none;
  background: #f7f7f7;
  width: 100%;
  border-radius: 100px;
  padding: 6px;
  width: 100%;
`;
const Strong = styled.strong`
  font-size: 15px;
  font-weight: 500;
  color: #9d9d9d;
  text-align: center;
  margin-bottom: 30px;
`;

const InfoUserImage = ({
  onChange,
  profileImage,
  changePages,
  onSubmitHandler,
}) => {
  //* ======================
  //*    USE_STATE
  //* ======================
  const [blobData, setBlobData] = useState();
  //* ======================
  //*    USE_EFFECT
  //* ======================
  useEffect(() => {
    if (blobData) {
      const formData = new FormData();
      formData.append('profile_img', blobData);
      axios
        .post('/api/users/upload', formData, {
          header: { 'content-type': 'multipart/form-data' },
        })
        .then((response) => {
          onChange('profileImage', response.data.image);
        });
    }
  }, [blobData]);
  //* ======================
  //*    CONDITIONAL_VARIABLE
  //* ======================
  const conditionImage =
    profileImage[0] === 'u'
      ? `http://localhost:5000/${profileImage}`
      : profileImage;
  //* ======================
  //*    RENDER
  //* ======================
  return (
    <BlockDiv>
      <PrevBtn>
        <GrFormPrevious onClick={() => changePages('prev')} />
      </PrevBtn>
      <RegisterInputText>사진 추가</RegisterInputText>
      <Strong>나의 가장 멋진 사진!</Strong>
      <Preview src={conditionImage} alt="profileImage" />
      <ImageCrop setBlobData={setBlobData} />
      <ContinueBtnDiv>
        <ContinueBtn onClick={onSubmitHandler}>완료</ContinueBtn>
      </ContinueBtnDiv>
    </BlockDiv>
  );
};
export default InfoUserImage;
