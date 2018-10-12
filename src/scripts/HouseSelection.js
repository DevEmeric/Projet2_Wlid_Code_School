import React, { Component } from "react";
import Hogwarts from "../image/Hogwarts.png";
import "./Houses.css"


class HouseSelection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerSelection: [],
      playerAmount: 2,
      selection: "",
      Gryffindor: {
        top: 250,
        left: 21,
        height: 200,
        width: 12,
      },
      Slytherin: {
        top: 250,
        left: 68,
        height: 200,
        width: 12,
      },
      Hufflepuff: {
        top: 500,
        left: 21,
        height: 200,
        width: 12,
      },
      Ravenclaw: {
        top: 500,
        left: 68,
        height: 200,
        width: 12,
      },
      ButtonStyle: {
        backgroundColor: "orange",
      }
    }
  }


  selectHouse = (house) => {
    this.setState({
      selection: house
    })
  }

  playerAmount = (amount) => {
    this.setState({playerAmount: amount})
  }


  displayConfirmButton() {
    if (this.state.selection !== "")
      return <button
        onClick={this.addToPlayerSelection} style={this.state.ButtonStyle} className="confirm-button">Confirm choice: {this.state.selection} ?</button>;
  }

  addToPlayerSelection = () => {
    const playerAdd = this.state.playerSelection
    playerAdd.push(this.state.selection)
    this.setState({ playerSelection: playerAdd })
    console.log(this.state.playerSelection)
  };


  playerConfirmation() {
    if (this.state.playerAmount !== 0 && this.state.playerSelection.length === this.state.playerAmount)
      return <button
        onClick={() => this.props.finalSelection(this.state.playerSelection)}
        className="start-button">START COMBAT</button>
  }

  playerNumber = () => {
    if (this.state.playerSelection.length < this.state.playerAmount) { return <h1 className="page-title"> Player {this.state.playerSelection.length + 1}: Choose your  House</h1> }
    else { return <h1 className="page-title">Houses have been chosen!</h1> }
  }

  selectionChoice1 = () => {
    if (typeof this.state.playerSelection[0] !== "undefined") return <h2 className="player-selection">Player 1: {this.state.playerSelection[0]}</h2>
  }
  selectionChoice2 = () => {
    if (typeof this.state.playerSelection[1] !== "undefined") return <h2 className="player-selection">Player 2: {this.state.playerSelection[1]}</h2>
  }
  selectionChoice3 = () => {
    if (typeof this.state.playerSelection[2] !== "undefined") return <h2 className="player-selection">Player 3: {this.state.playerSelection[2]}</h2>
  }
  selectionChoice4 = () => {
    if (typeof this.state.playerSelection[3] !== "undefined") return <h2 className="player-selection">Player 4: {this.state.playerSelection[3]}</h2>
  }

  render() {

    let slytherinStyle = {
      backgroundSize: "contain",
      position: "absolute",
      top: this.state.Slytherin.top + "px",
      left: this.state.Slytherin.left + "%",
      height: this.state.Slytherin.height + "px",
      width: this.state.Slytherin.width + "%",
    };

    let gryffindorStyle = {
      backgroundSize: "contain",
      position: "absolute",
      top: this.state.Gryffindor.top + "px",
      left: this.state.Gryffindor.left + "%",
      height: this.state.Gryffindor.height + "px",
      width: this.state.Gryffindor.width + "%",
    };

    let ravenclawStyle = {
      backgroundSize: "contain",
      position: "absolute",
      top: this.state.Ravenclaw.top + "px",
      left: this.state.Ravenclaw.left + "%",
      height: this.state.Ravenclaw.height + "px",
      width: this.state.Ravenclaw.width + "%",
    };

    let hufflepuffStyle = {
      backgroundSize: "contain",
      position: "absolute",
      top: this.state.Hufflepuff.top + "px",
      left: this.state.Hufflepuff.left + "%",
      height: this.state.Hufflepuff.height + "px",
      width: this.state.Hufflepuff.width + "%",
    };



    return (
      <div>
        <body className="body">
          <div>
            <img src={Hogwarts} className="main-shield" alt="HOGWARTS" />
            {this.playerNumber()}
            <select className="player-amount">
              <option onClick={() => this.playerAmount(2)} value="2 players">2 players</option>
              <option onClick={() => this.playerAmount(3)} value="3 players">3 players</option>
              <option onClick={() => this.playerAmount(4)} value="4 players">4 players</option>
            </select>
          </div>
          {this.selectionChoice1()}
          {this.selectionChoice2()}
          {this.selectionChoice3()}
          {this.selectionChoice4()}
          <div>
            <button className="Slytherin shield-button" onClick={() => this.selectHouse("Slytherin")} style={slytherinStyle}>
            </button>
            <button className="Gryffindor shield-button" onClick={() => this.selectHouse("Gryffindor")} style={gryffindorStyle}>
            </button>
            <button className="Ravenclaw shield-button" onClick={() => this.selectHouse("Ravenclaw")} style={ravenclawStyle}>
            </button>
            <button className="Hufflepuff shield-button" onClick={() => this.selectHouse("Hufflepuff")} style={hufflepuffStyle}>
            </button>
          </div>

          {this.displayConfirmButton()}
          {this.playerConfirmation()}


        </body>
      </div>

    );
  }
}

export default HouseSelection;