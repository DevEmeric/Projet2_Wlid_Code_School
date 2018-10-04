import React, { Component } from 'react';
import './App.css';
//import Spell from './scripts/Spell';
import Fight from './scripts/Fight';
//import Char from'./scripts/Char';
import { Route, Switch, NavLink, BrowserRouter } from 'react-router-dom';

class App extends Component {

  /*
  <Route exact path="/" component={Home} />
  <Route path="/settings" component={Settings} />
  <Route path="/instructions" component={Instructions} />
  <Route path="/house" component={HouseSelection} />
  <Route path="/arena" component={ArenaSelection} />
  <Route path="/victory" component={Victory} />
  */

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/fight" component={Fight} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;