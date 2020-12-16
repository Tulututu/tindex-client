import React, { useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
// * =================================
// *       FILE_UPLOAD
// * =================================

// * STYLED_COMPONENT
const FakeUploadBtn = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  width: 120px;
  height: 120px;
  justify-content: center;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #49709f;
`;

const UploadButton = styled.input`
  position: relative;
  margin-right: 1px;
  width: 9vw;
  right: 11vw;
  opacity: 0;
`;

const FileUpload = (props) => {
  const [previewImg, setPreviewImg] = useState([]);

  const handleFileOnChange = (event) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];
    // console.log(file, reader);
    reader.onloadend = () => {
      setPreviewImg({
        file,
        previewURL: reader.result,
      });
    };
    reader.readAsDataURL(file);

    // Post-API
    const formData = new FormData();
    formData.append('profile_img', event.target.files[0]);
    Axios.post('/api/users/upload', formData, {
      header: { 'content-type': 'multipart/form-data' },
    }).then((response) => {
      props.fileToParents(response.data.image);
    });
  };

  //= ================================
  // Conditional-Rendering-Component
  let profilePreview = null;
  if (previewImg !== '') {
    profilePreview = (
      <div>
        <img
          className="profile_preview"
          src={previewImg.previewURL}
          style={{ height: '140px' }}
          alt=""
        />
      </div>
    );
  }
  //= ================================

  return (
    <>
      <form encType="multipart/form-data" style={{ display: 'flex' }}>
        <FakeUploadBtn>{profilePreview}</FakeUploadBtn>
        <UploadButton
          type="file"
          accept="image/jpg,impge/png,image/jpeg,image/gif"
          name="profile_img"
          placeholder="업로드"
          onChange={handleFileOnChange}
        />
      </form>
    </>
  );
};
export default FileUpload;
