import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LobbyContainer from './containers/LobbyContainer';
import InfoContainer from './containers/InfoContainer';
import LandingContainer from './containers/LandingContainer';
import Background from './components/systems/background/Background';
import Agreement from './components/systems/user_agreement/Agreement';

function App() {
  return (
    <>
      <Background />
      <Router>
        <Switch>
          <Route path="/lobby" component={LobbyContainer} />
          <Route path="/enterInfo" component={InfoContainer} />
          <Route path="/agreement" component={Agreement} />
          <Route path="/" component={LandingContainer} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
