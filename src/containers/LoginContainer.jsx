import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginModal from '../components/systems/user_login/LoginModal';
import { authUser, loginUser } from '../modules/auth';
//! ============================================
//!    lOGIN_CONTAINER (CT) ('nomal login FC not yet!')
//! ============================================

const LoginContainer = ({ openLoginModal, history }) => {
  //* ======================
  //*    USE_SELECTOR
  //* ======================
  const { auth, loginSuccess } = useSelector(({ authReduce }) => ({
      auth: authReduce.userAuth?.isAuth,
      loginSuccess: authReduce.loginSuccess,
    }));
  // const { email, password, loginSuccess } = useSelector(({ userReducer }) => ({
  //   email: userReducer.email,
  //   password: userReducer.password,

  //   loginSuccess: userReducer.loginSuccess,
  // }));
  //* ======================
  //*    USE_DIS_PATCH
  //* ======================
  const dispatch = useDispatch();
  //* ========================
  //*   VARIABLE || FUNCTIONS
  //* ========================
  // const loginFormOnChange = (name, value) => {
  //   dispatch(
  //     loginFormChangeField({
  //       key: name,
  //       value,
  //     }),
  //   );
  // };
  // const onSubmitHandler = (event) => {
  //   event.preventDefault();
  //   let requestBody = {
  //     email,
  //     password,
  //   };
  //   dispatch(loginUser(requestBody));
  // };
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
        // onSubmitHandler={onSubmitHandler}
        // loginFormOnChange={loginFormOnChange}
        oAuthLoginHandler={oAuthLoginHandler}
      />
    </>
  );
};

export default withRouter(LoginContainer);
