/* eslint-disable */
import axios from 'axios';

export async function loadCardAsync({ gender }) {
  console.log(gender);
  let genderFilter = 0;
  if (gender === 0) {
    genderFilter = 1;
  }
  const response = await axios.get(`/api/user_cards?gender=${genderFilter}`);
  console.log(response.data);
  return response.data;
}
