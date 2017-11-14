import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Demos from './components/ChartDemo/Demos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Demos}/>

        </Switch>
      </div>
    );
  }
}

export default App;
