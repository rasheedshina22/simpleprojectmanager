import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/project/ProjectDetails';
import Sigin from './components/auth/Sigin';
import Signup from './components/auth/Signup';
import CreateProject from './components/project/CreateProject';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/project/:id' component={ProjectDetails} />
            <Route exact path='/signin' component={Sigin} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/create' component={CreateProject} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
