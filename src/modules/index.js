import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import userReducer, { userSaga } from './user_login';
import authReduce, { authSaga } from './auth';
import profileUploadReducer, { profileUploadSaga } from './imageUpload';
import infoReduce, { infoSaga } from './information';
import userCard, { userCardSaga } from './userCard';

const rootReducer = combineReducers({
  userReducer,
  authReduce,
  profileUploadReducer,
  infoReduce,
  userCard,
});
export function* rootSaga() {
  yield all([
    userSaga(),
    authSaga(),
    profileUploadSaga(),
    infoSaga(),
    userCardSaga(),
  ]);
}

export default rootReducer;
