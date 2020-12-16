/* eslint-disable */
import axios from 'axios';

// * =======================
// * REGISTER_SAGA_API
// * =======================

export async function registerUserAsync(formData) {
  console.log(formData);
  const response = await axios.post('/api/users/register', formData);

  if (response.data.message) {
    throw new Error('이미 존재하는 이메일 입니다.');
  }
  return response.data;
}
