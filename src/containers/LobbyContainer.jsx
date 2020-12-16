import React, { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import Lobby from '../components/contents/lobby/Lobby';
import { logOutUser } from '../modules/auth';


import { loadUserList } from '../modules/userCard';
//* ============================================
//*    LOBBY_CONTAINER
//* ============================================
const LobbyContainer = ({ history }) => {
  //* ============================
  //*    USE_SELECTOR || DISPATCH
  //* ============================
  const dispatch = useDispatch();
  const { auth, enteredUserInformation, error, userData } = useSelector(
    ({ authReduce }) => ({
        auth: authReduce.userAuth?.isAuth,
        enteredUserInformation: authReduce.userAuth?.enteredUserInformation,
        error: authReduce.error,
        userData: authReduce.userAuth,
      }),
  );
  //* ====================
  //*    USE_EFFECT
  //* ====================
  useEffect(() => {
    if (error || !auth) {
      history.push('/');
    }
  }, [error, history, auth]);

  useEffect(() => {
    if (auth && !enteredUserInformation) {
      history.push('/agreement');
    }
  }, [enteredUserInformation, history, auth]);

  useEffect(() => {
    if (auth) {
      dispatch(loadUserList(userData));
    }
  }, [dispatch, auth]);

  //* =========================
  //*   VARIABLE || FUNCTIONS
  //* =========================
  const logoutHandler = () => {
    dispatch(logOutUser());
  };

  //* ======================
  //*    RENDER
  //* ======================
  return (
    <>
      <Lobby logoutHandler={logoutHandler} />
    </>
  );
};
export default LobbyContainer;
