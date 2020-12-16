import axios from 'axios';

// * =======================
// * AUTH_SAGA_MODULE
// * =======================

export async function authUserAsync() {
  const response = await axios.get('/api/users/auth');
  localStorage.setItem('CURRENT_USER', JSON.stringify(response.data));
  if (!response.data.isAuth) {
    throw new Error('토큰 인증에 실패했습니다.');
  }
  return response.data;
}

export async function loginUser(formData) {
  const response = await axios.post('/api/users/login', formData);
  if (!response.data.loginSuccess) {
    throw new Error('해당 이메일이 존재하지 않습니다.');
  }
  return response.data;
}

export async function logoutAsync() {
  localStorage.removeItem('CURRENT_USER');
  const response = await axios.get('/api/users/logout');
  if (!response.data.success) {
    throw new Error('로그 아웃에 실패했습니다.');
  }
  return response.data;
}
