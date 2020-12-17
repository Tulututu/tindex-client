import { call, put, takeEvery } from 'redux-saga/effects';
import * as UserApi from '../api/user';
import { createRequestActionTypes } from '../api/createRequestSaga';

const LOGIN_FORM_CHANGE_FIELD = 'USER/LOGIN_FORM_CHANGE_FIELD';
// change_field action
const LOGIN_FORM_CLEAR = 'USER/LOGIN_FORM_CLEAR';

const [
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
] = createRequestActionTypes('user/LOGIN_USER');

export const loginFormChangeField = ({ key, value }) => ({
  type: LOGIN_FORM_CHANGE_FIELD,
  payload: { key, value },
});

export const loginUser = (formData) => ({
  type: LOGIN_USER,
  payload: formData,
});

export const clearLoginState = () => ({
  type: LOGIN_FORM_CLEAR,
});

export function* loginUserSaga(action) {
  try {
    const loginRusult = yield call(UserApi.loginUser, action.payload);
    yield put({
      type: LOGIN_USER_SUCCESS,
      payload: loginRusult,
    });
  } catch (e) {
    yield put({
      type: LOGIN_USER_FAILURE,
      payload: e,
    });
  }
}

export function* userSaga() {
  yield takeEvery(LOGIN_USER, loginUserSaga);
}

const initialState = {
  email: '',
  password: '',
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_FORM_CHANGE_FIELD:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case LOGIN_FORM_CLEAR:
      return {
        ...state,
        email: '',
        password: '',
        loginSuccess: 'done',
        token: '',
      };
    case LOGIN_USER:
      return {
        ...state,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loginSuccess: action.payload.loginSuccess,
        token: action.payload.token,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loginSuccess: false,
        error: action.payload.message,
      };

    default:
      return state;
  }
}
