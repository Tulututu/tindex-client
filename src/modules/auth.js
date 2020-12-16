import { call, put, takeLatest } from 'redux-saga/effects';
import * as authApi from '../api/auth';
import { createRequestActionTypes } from '../api/createRequestSaga';
// * =======================
// * AUTH_SAGA_MODULE
// * =======================
const [
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
] = createRequestActionTypes('auth/LOGIN_USER');

const AUTH_USER = 'auth/AUTH_USER';
const AUTH_USER_SUCCESS = 'auth/AUTH_USER_SUCCESS';
const AUTH_USER_FAILURE = 'auth/AUTH_USER_FAILURE';

const LOG_OUT_USER = 'auth/LOG_OUT_USER';
const LOG_OUT_USER_SUCCESS = 'auth/LOG_OUT_USER_SUCCESS';
const LOG_OUT_USER_FAILURE = 'auth/LOG_OUT_USER_FAILURE';

const TEMP_USER = 'auth/TEMP_USER';

export const tempUser = (user) => ({
  type: TEMP_USER,
  user,
});

export const authUser = () => ({
  type: AUTH_USER,
});
export const loginUser = (formData) => ({
  type: LOGIN_USER,
  payload: formData,
});
export const logOutUser = () => ({
  type: LOG_OUT_USER,
});

export function* authUserSaga() {
  try {
    const authRusult = yield call(authApi.authUserAsync);
    yield put({
      type: AUTH_USER_SUCCESS,
      payload: authRusult,
    });
  } catch (e) {
    yield put({
      type: AUTH_USER_FAILURE,
      payload: e,
    });
  }
}

export function* loginUserSaga(action) {
  try {
    const loginRusult = yield call(authApi.loginUser, action.payload);
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

export function* logOutSaga() {
  try {
    const logOutRusult = yield call(authApi.logoutAsync);
    yield put({
      type: LOG_OUT_USER_SUCCESS,
      payload: logOutRusult,
    });
  } catch (e) {
    yield put({
      type: LOG_OUT_USER_FAILURE,
      payload: e,
    });
  }
}

export function* authSaga() {
  yield takeLatest(AUTH_USER, authUserSaga);
  yield takeLatest(LOG_OUT_USER, logOutSaga);
  yield takeLatest(LOGIN_USER, loginUserSaga);
}

export default function authReduce(state = {}, action) {
  switch (action.type) {
    case TEMP_USER:
      return {
        ...state,
        userAuth: action.user,
      };
    case AUTH_USER:
      return {
        ...state,
      };
    case AUTH_USER_SUCCESS:
      return {
        ...state,
        userAuth: action.payload,
        error: null,
      };
    case AUTH_USER_FAILURE:
      return {
        ...state,
        error: action.payload.message,
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

    case LOG_OUT_USER:
      return {
        ...state,
      };
    case LOG_OUT_USER_SUCCESS:
      return {
        ...state,
        loginSuccess: false,
        userAuth: null,
        error: null,
      };
    case LOG_OUT_USER_FAILURE:
      return {
        ...state,
        error: action.payload.message,
      };

    default:
      return state;
  }
}
