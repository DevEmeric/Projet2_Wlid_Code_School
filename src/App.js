import React, { Component } from 'react';
import './App.css';
//import Spell from './scripts/Spell';
import Fight from './scripts/Fight';
import HouseSelection from './scripts/HouseSelection';
//import Char from'./scripts/Char';
import { Route, Switch, NavLink, BrowserRouter } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: 0,
      player2: 0,

    }
  }

  /*
  <Route exact path="/" component={Home} />
  <Route path="/settings" component={Settings} />
  <Route path="/instructions" component={Instructions} />
  <Route path="/house" component={HouseSelection} />
  <Route path="/arena" component={ArenaSelection} />
  <Route path="/victory" component={Victory} />
  */



  finalSelection = (players) => {
    this.setState({ player1: players[0],  player2: players[1]})
    
  }


render() {
  console.log(this.state.player1)
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/fight" component={Fight} />
          <Route path="/HouseSelection" component={HouseSelection} />
        </Switch>
      </BrowserRouter>
      <HouseSelection finalSelection={this.finalSelection} />
    </div>
  );
}
}



export default App;