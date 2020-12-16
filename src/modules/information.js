import { call, put, takeEvery } from 'redux-saga/effects';
import * as updateInfoApi from '../api/information';
import { createRequestActionTypes } from '../api/createRequestSaga';
import defaultAvatar from '../public/default.png';

// * =======================
// * REGISTER_SAGA_MODULE
// * =======================
const CHANGE_FIELD = 'information/CHANGE_FIELD'; // change_field action

const [
  UPDATE_INFO,
  UPDATE_INFO_SUCCESS,
  UPDATE_INFO_FAILURE,
] = createRequestActionTypes('information/UPDATE_INFO');

export const changeField = ({ key, value }) => ({
  type: CHANGE_FIELD,
  payload: { key, value },
});

export const updateUserInfo = (formData) => ({
  type: UPDATE_INFO,
  payload: formData,
});

export function* updateUserInfoSaga(action) {
  try {
    const updateRusult = yield call(
      updateInfoApi.updateUserAsync,
      action.payload,
    );
    yield put({
      type: UPDATE_INFO_SUCCESS,
      payload: updateRusult,
    });
  } catch (e) {
    yield put({
      type: UPDATE_INFO_FAILURE,
      payload: e,
    });
  }
}

export function* infoSaga() {
  yield takeEvery(UPDATE_INFO, updateUserInfoSaga);
}

const initialState = {
  name: '',
  age: '1',
  gender: '',
  residence: '',
  profileImage: defaultAvatar,
  enteredUserInformation: false,
};

export default function infoReduce(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case UPDATE_INFO:
      return {
        ...state,
      };
    case UPDATE_INFO_SUCCESS:
      return {
        ...state,
        updateSuccess: action.payload.registerSuccess,
        enteredUserInformation: true,
      };
    case UPDATE_INFO_FAILURE:
      return {
        ...state,
        updateSuccess: false,
        error: action.payload.message,
      };

    default:
      return state;
  }
}
