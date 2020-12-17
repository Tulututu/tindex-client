import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginModal from '../components/systems/user_login/LoginModal';
import { authUser, loginUser } from '../modules/auth';

// TODO ========================================
// TODO  lOGIN_CONTAINER (일반 로그인 구현 요망 )
// tODO ========================================

const LoginContainer = ({ openLoginModal, history }) => {
  //* ======================
  //*    USE_SELECTOR
  //* ======================
  const { auth, loginSuccess } = useSelector(({ authReduce }) => ({
      auth: authReduce.userAuth?.isAuth,
      loginSuccess: authReduce.loginSuccess,
    }));
  //* ======================
  //*    USE_DIS_PATCH
  //* ======================
  const dispatch = useDispatch();
  //* ========================
  //*   VARIABLE || FUNCTIONS
  //* ========================

  const oAuthLoginHandler = (id, email) => {
    const request = {
      oAuthId: id,
      email,
    };
    if (window.FB.getAccessToken()) {
      window.FB.logout();
    }
    dispatch(loginUser(request));
  };
  //* ======================
  //*    USE_EFFECT
  //* ======================
  useEffect(() => {
    if (loginSuccess) {
      dispatch(authUser());
    }
  }, [loginSuccess, dispatch]);

  useEffect(() => {
    if (auth) {
      history.push('/lobby');
    }
  }, [history, auth]);
  //* ======================
  //*    RENDER
  //* ======================
  return (
    <>
      <LoginModal
        openLoginModal={openLoginModal}
        oAuthLoginHandler={oAuthLoginHandler}
      />
    </>
  );
};

export default withRouter(LoginContainer);
