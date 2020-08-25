import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signin from '../Signin'
import UserList from '../UserList'
import Header from '../Header'

class App extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route exact={true} path='/' component={Signin} />
            <Route exact={true} path='/users' component={UserList} />
          </Switch>
        </Router>
      </div>
      
    );
  }
}

export default App
