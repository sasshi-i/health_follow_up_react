import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signin from '../Signin'

class App extends React.Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route exact={true} path='/' component={Signin} />
        </Switch>
      </Router>
    );
  }
}

export default App
