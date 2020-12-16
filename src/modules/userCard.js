import { call, put, takeEvery } from 'redux-saga/effects';
import * as loadCardApi from '../api/userCard';
import { createRequestActionTypes } from '../api/createRequestSaga';

// * =======================
// * USER_SAGA_MODULE
// * =======================

const [
  LOAD_CARD,
  LOAD_CARD_SUCCESS,
  LOAD_CARD_FAILURE,
] = createRequestActionTypes('userCard/LOAD_CARD');

export const loadUserList = (gender) => ({
  type: LOAD_CARD,
  payload: gender,
});

export function* loadUserCardsSaga(action) {
  try {
    const loadRusult = yield call(loadCardApi.loadCardAsync, action.payload);

    yield put({
      type: LOAD_CARD_SUCCESS,
      payload: loadRusult,
    });
  } catch (e) {
    yield put({
      type: LOAD_CARD_FAILURE,
      payload: e,
    });
  }
}

export function* userCardSaga() {
  yield takeEvery(LOAD_CARD, loadUserCardsSaga);
}

export default function userCard(state = {}, action) {
  switch (action.type) {
    case LOAD_CARD:
      return {
        ...state,
      };
    case LOAD_CARD_SUCCESS:
      return {
        ...state,
        userCardList: action.payload,
      };
    case LOAD_CARD_FAILURE:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
}
