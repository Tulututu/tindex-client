/* eslint-disable */
import React, { PureComponent } from 'react';
import ReactCrop from 'react-image-crop';
import style from 'styled-components';
import 'react-image-crop/dist/ReactCrop.css';
// eslint-disable-next-line import/no-unresolved
import { HiPlusCircle } from 'react-icons/hi';
//* ======================
//*     STYLED_COMPONENT
//* ======================
const BackGround = style.div`
    background: rgba(0,0,0,0.3);
    position: fixed;
    height: 100vh;
    top: 0px;
    right: 0px;
    left: 0px;
`;
const SetButton = style.button`
    border: none;
    color: white;
    background: linear-gradient(to right,#ff5858,#f857a6);
    border-radius: 6px;
    border-radius: 3px;
    width: 93%;
    padding: 7px 10px;
    font-weight: 600;
    font-size: 14px;
     &:focus {
     outline:none;
   }
    cursor : pointer;
    `;
const BtnDiv = style.div`
   margin-top: 9px;
    padding: 11px 0px;
    text-align: center;
    background: #f1f0f0;
    border-radius: 0px 0px 11px 11px;
    border-top: 1px solid #d2d2d2`;
const CropContainer = style.div`
background: white;
    display: flex;
    flex-direction: column;
    border-radius: 11px;
    position: relative;
    margin: 0 auto;
    top: 50vh;
        width: 330px;
    height: auto;
    transform: translate(0, -50%);
    box-shadow: 0px 6px 9px rgba(0, 0, 0, 0.3);
`;
const MainTextSpan = style.span`
    border-bottom: 1px solid #e6e6e6;
    color: #272727;
    font-weight: 600;
    background: #f1f1f1;
    border-radius: 10px 10px 0px 0px;
    padding: 13px 0px;
    margin-bottom: 8px;`;
const MainTextH3 = style.span`
    margin: 4px;
    text-align: start;
    margin-left: 15px;
    font-size: 14px;
    `;
const UploadBtn = style.label`
      `;
// TODO ======================
// TODO    IMAGE_CROP (MODULE)
// TODO ======================
class ImageCrop extends PureComponent {
  state = {
    src: null,
    crop: {
      unit: '%',
      width: 30,
      aspect: 5 / 5,
    },
    cropSrc: null,
    file: null,
  };

  //* ========================
  //*   VARIABLE || FUNCTIONS
  //* ========================
  onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        this.setState({ src: reader.result }),
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  onImageLoaded = (image) => {
    this.imageRef = image;
  };

  onCropComplete = (crop) => {
    this.makeClientCrop(crop);
  };

  onCropChange = (crop, percentCrop) => {
    this.setState({ crop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        'newFile.jpeg',
      );
      this.setState({
        cropSrc: croppedImageUrl,
      });
    }
  }

  setNewImage = () => {
    const { file } = this.state;
    this.setState({ src: null });
    this.props.setBlobData(file);
  };

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height,
    );
    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          console.error('Canvas is empty');
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve(this.fileUrl);
        const file = new File([blob], 'profileImg ');
        this.setState({ file });
      }, 'image/jpeg');
    });
  }

  //* ======================
  //*    RENDER
  //* ======================
  render() {
    const { crop, src } = this.state;
    return (
      <>
        {!src && (
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <UploadBtn htmlFor="ex_file">
              <HiPlusCircle
                style={{
                  fontSize: '75px',
                  color: 'rgb(249 70 112)',
                  cursor: 'pointer',
                }}
              />
            </UploadBtn>
            <input
              style={{ display: 'none' }}
              type="file"
              id="ex_file"
              accept="image/*"
              onChange={this.onSelectFile}
            />
          </div>
        )}
        <div>
          {src && (
            <BackGround>
              <CropContainer>
                <MainTextSpan>
                  <MainTextH3>가장 멋진사진을 골라주세요!</MainTextH3>
                </MainTextSpan>
                <div
                  style={{
                    padding: '0px 11px',
                  }}
                >
                  <ReactCrop
                    src={src}
                    crop={crop}
                    ruleOfThirds
                    onImageLoaded={this.onImageLoaded}
                    onComplete={this.onCropComplete}
                    onChange={this.onCropChange}
                  />
                </div>
                <BtnDiv>
                  <SetButton onClick={this.setNewImage}>
                    새로운 사진 등록하기.
                  </SetButton>
                </BtnDiv>
              </CropContainer>
            </BackGround>
          )}
        </div>
      </>
    );
  }
}
export default ImageCrop;
