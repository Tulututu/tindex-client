import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import { authUser, tempUser } from './modules/auth';

// * ===========================
// * REDUX & SAGA_MIDDLE_WARE
import rootReducer, { rootSaga } from './modules';

const sagaMiddleware = createSagaMiddleware();
// * ===========================

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);

(()=> {
  const user = JSON.parse(localStorage.getItem('CURRENT_USER'));
  if (!user) store.dispatch(authUser());
  store.dispatch(tempUser(user));
  store.dispatch(authUser());
})();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
