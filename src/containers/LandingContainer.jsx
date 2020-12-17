import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Landing from '../components/systems/landingPage/Landing';


//* ======================
//*    LandingContainer.jsx
//* ======================


const LandingContainer = ({ history }) => {
  //* =================================
  //*    USE_STATE || USE_SELECTOR
  //* =================================
  const [loginPopup, setLoginPopup] = useState(false);
  //* ======================
  //*    USE_EFFECT
  //* ======================
  useEffect(() => {
    const userStorage = JSON.parse(localStorage.getItem('CURRENT_USER'));
    if (userStorage?.isAuth) {
      history.push('/lobby');
    }
  }, [history]);
  //* ========================
  //*   VARIABLE || FUNCTIONS
  //* ========================
  const onRegisterHandler = () => {
    history.push('/register');
  };

  const openLoginModal = () => {
    setLoginPopup(!loginPopup);
  };
  //* ======================
  //*    RENDER
  //* ======================
  return (
    <>
      <Landing
        loginPopup={loginPopup}
        openLoginModal={openLoginModal}
        onRegisterHandler={onRegisterHandler}
      />
    </>
  );
};

export default withRouter(LandingContainer);
