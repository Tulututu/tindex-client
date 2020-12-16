/* eslint-disable */
import axios from 'axios';

export async function loginUser(formData) {
  const response = await axios.post('/api/users/login', formData);
  if (!response.data.loginSuccess) {
    throw new Error('해당 이메일이 존재하지 않습니다.');
  }
  localStorage.setItem('CURRENT_USER', JSON.stringify(response.data));
  return response.data;
}
