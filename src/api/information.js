/* eslint-disable */
import axios from 'axios';

// * =======================
// * REGISTER_SAGA_API
// * =======================

export async function updateUserAsync(formData) {
  console.log(formData);
  const response = await axios.post('/api/users/updateinfo', formData);
  return response.data;
}
