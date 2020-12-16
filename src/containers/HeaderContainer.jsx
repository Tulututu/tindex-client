import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logOutUser } from '../modules/auth';
import Header from '../components/systems/header/Header';
import LoginContainer from './LoginContainer';
import { clearLoginState } from '../modules/user_login';

const HeaderContainer = ({ history }) => {
  const [loginPopup, setLoginPopup] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const onMypageHandler = () => {
    setOpen(!open);
  };

  const openLoginModal = () => {
    setLoginPopup(!loginPopup);
  };

  const logOutHandler = () => {
    dispatch(logOutUser());
    dispatch(clearLoginState());
  };

  const goRootPage = () => {
    history.push('/');
  };
  const { auth } = useSelector(({ authReduce }) => ({
      auth: authReduce.userAuth?.isAuth,
    }));

  const { loginSuccess } = useSelector(({ userReducer }) => ({
      loginSuccess: userReducer.loginSuccess,
    }));

  return (
    <>
      <Header
        auth={auth}
        loginSuccess={loginSuccess}
        logOutHandler={logOutHandler}
        openLoginModal={openLoginModal}
        onMypageHandler={onMypageHandler}
        open={open}
        goRootPage={goRootPage}
      />
      {loginPopup ? (
        <LoginContainer openLoginModal={openLoginModal} auth={auth} />
      ) : null}
    </>
  );
};

export default withRouter(HeaderContainer);
