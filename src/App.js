import React, { Component } from 'react';
import './App.css';
import Fight from './scripts/Fight';
import HouseSelection from './scripts/HouseSelection';
import TournementVictory from './scripts/TournementVictory'
import HomePage from "./scripts/HomePage"
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import music from "./sound/backgroundMusic.mp3"
import sounds from "./sound/attackSound.wav"


class App extends Component { 
  constructor() {
    super();
    this.state = {
      gameType: "tournament",
      fightersHouse: ["Gryffindor", "Slytherin", "Hufflepuff"],
      isEndTournament: {Gryffindor: 600,
        Slytherin: 200,
        Ravenclaw: 300,
        Hufflepuff: 400,},
    }

    let backgroundMusic = new Audio(music);
    backgroundMusic.play();
    backgroundMusic.volume=1;

    this.soundsMusic = new Audio(sounds)
    this.soundsVolume = 1;

  
  }

  getGameType = (choice) => {
    this.setState({ gameType: choice })
  }

  getFinalSelection = (players) => {
    this.setState({ fightersHouse: players})
  }
  endTournament = (scoreFighters) => {
    this.setState({isEndTournament: scoreFighters})
  }

  setVolume=(target, bool)=>{
    console.log("chier")
    if(target.includes("Music") && bool) this.backgroundMusic.volume = 0
    if(target.includes("Sound") && bool) this.soundsVolume = 0
  }


 
  render() {
    return (
      <div className="App">
        <audio autoPlay>
          <source src="./sound/backgroundMusic.mp3"></source>
        </audio>
        <BrowserRouter>
          <Switch>
            <Route
              path="/HouseSelection"
              render={() => (
                <HouseSelection
                finalSelection={this.getFinalSelection}
                gameType={this.state.gameType}
                />)}
            />
            <Route
              path="/Fight"
              render={() => (
                <Fight
                  fightersHouse={this.state.fightersHouse}
                  endTournament= {this.endTournament}
                  gameType = {this.state.gameType}
                  soundEffect = {{
                    soundsMusic: this.soundsMusic,
                    soundsVolume: this.soundsVolume,
                  }}
                />)}
            />
            <Route
              path="/TournementVictory"
              render={() => (
                <TournementVictory
                  isEndTournament={this.state.isEndTournament}
                  
                />)}
            />
            <Route
              exact path="/"
              render={() => (
                <HomePage 
                  gameType={this.getGameType} 
                  setVolume={this.setVolume}
                />)}
            />
          </Switch>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;