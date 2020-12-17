// * ========================
// *    SNS_LOGIN_APP_KEY
// * ========================

import dotenv from 'dotenv';

dotenv.config();
export default {
  KAKAO_APP_KEY: process.env.KAKAO_APP_KEY,
  FACE_BOOK_APP_KEY: process.env.FACE_BOOK_APP_KEY,
};
