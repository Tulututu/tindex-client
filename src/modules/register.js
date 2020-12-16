import * as registerApi from '../api/register';
import { call, put, takeEvery } from 'redux-saga/effects';
import { createRequestActionTypes } from '../api/createRequestSaga';
import defaultAvatar from '../public/default.png';

// * =======================
// * REGISTER_SAGA_MODULE
// * =======================
const CHANGE_FIELD = 'register/CHANGE_FIELD'; // change_field action

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
  'register/REGISTER',
);

export const changeField = ({ key, value }) => ({
  type: CHANGE_FIELD,
  payload: { key, value },
});

export const registerUser = (formData) => ({
  type: REGISTER,
  payload: formData,
});

export function* registerUserSaga(action) {
  try {
    const registerRusult = yield call(
      registerApi.registerUserAsync,
      action.payload,
    );
    yield put({
      type: REGISTER_SUCCESS,
      payload: registerRusult,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: REGISTER_FAILURE,
      payload: e,
    });
  }
}

export function* registerSaga() {
  yield takeEvery(REGISTER, registerUserSaga);
}

const initialState = {
  gender: '',
  age: '1',
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
  residence: '',
  profileImage: defaultAvatar,
};

export default function registerReduce(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case REGISTER:
      return {
        ...state,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerSuccess: action.payload.registerSuccess,
        err: null,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        registerSuccess: false,
        error: action.payload.message,
      };

    default:
      return state;
  }
}
