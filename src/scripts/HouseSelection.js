import React, { Component } from "react";
import Hogwarts from "../image/Hogwarts.png";
import "./Houses.css";
import { Link } from "react-router-dom";


class HouseSelection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerSelection: [],   //tableau envoyé à "App" via this.props.finalSelection()
      playerAmount: 2,  // quantité de joueurs (valeur initiale arbitraire mais doit être supérieure à zéro)
      selection: "", //  maison qui apparaît sur le bouton de confirmation
      confirmButton: false,   // permet de faire disparaitre le bouton après avoir confirmé son choix de maison
      Gryffindor: {
        isSelected: false,   // empêche 2+ joueurs de sélectionner la même maison
        top: 250,  //px
        left: 21,   //%
        height: 200,  //px
        width: 12,  //%
        opacity: 1,   //opacité diminuée quand maison est choisie -> grayOut()
      },
      Slytherin: {
        isSelected: false,
        top: 250,
        left: 68,
        height: 200,
        width: 12,
        opacity: 1,   //opacité diminuée quand maison est choisie -> grayOut()
      },
      Hufflepuff: {
        isSelected: false,
        top: 500,
        left: 21,
        height: 200,
        width: 12,
        opacity: 1,   //opacité diminuée quand maison est choisie -> grayOut()
      },
      Ravenclaw: {
        isSelected: false,
        top: 500,
        left: 68,
        height: 200,
        width: 12,
        opacity: 1,    //opacité diminuée quand maison est choisie -> grayOut()
      },
    }
  }


  playerAmount = (amount) => {   //permet aussi de reset la page
    this.setState({ 
      playerSelection: [], 
      playerAmount: amount, 
      confirmButton: false,
      Gryffindor: {opacity: 1, isSelected: false},
      Slytherin: {opacity: 1, isSelected: false},
      Ravenclaw: {opacity: 1, isSelected: false},
      Hufflepuff: {opacity: 1, isSelected: false},
    })
  }

  // pré-selection maison:
  selectHouse = (house) => {   
    this.setState({ selection: house, confirmButton: true })
  }

  // affichage du bouton de confirmation de choix maison suite clic pré-selection sur maison:
  displayConfirmButton() {   
    if (this.state.selection !== "" && this.state.confirmButton === true)
      return <button 
        onClick={this.addToPlayerSelection} className="confirm-button">Confirm choice: {this.state.selection} ?</button>;
  }

  // fonction du onclick du bouton de confirmation de choix maison:
  addToPlayerSelection = () => {   
    const playerAdd = this.state.playerSelection   
    playerAdd.push(this.state.selection)
    this.setState({ playerSelection: playerAdd, confirmButton: false })
    this.grayOut(this.state.selection)
    console.log(this.state.playerSelection)
  }

  // fonction pour empêcher de sélectionner maison deux fois:
  grayOut = (select) => {   
     this.setState({
        [select]: {
          isSelected: true,
          opacity: 0.4,
        }
      })
  }

  // fonction du onclick pour confirmer le choix final et passer à la page de combat. Link pour envoyer sur ./fight.js
  playerConfirmation() {   
    if (this.state.playerAmount !== 0 && this.state.playerSelection.length === this.state.playerAmount) //1ère condition du "if" nécessaire pour que bouton apparaisse pas au début
      return <Link to="/fight"><button
        onClick={() => this.props.finalSelection(this.state.playerSelection)}
        className="start-button">START COMBAT</button></Link>
  }

  // titre de la page -> change en fonction du joueur qui doit choisir sa maison:
  pageTitle = () => {    
    if (this.state.playerSelection.length < this.state.playerAmount) { return <h1 className="page-title"> Player {this.state.playerSelection.length + 1}: Choose your  House</h1> }
    else { return <h1 className="page-title">Houses have been chosen!</h1> }
  }

  //les quatre fonctions suivantes affichent les choix de maison pour chaque joueur (faudrait en faire une seule fonction)
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

    // 4 fonctions suivantes = styles des blasons pour anim. Pour l'instant anim sur opacity quand maison choisie
    let slytherinStyle = {
      backgroundSize: "contain",
      position: "absolute",
      top: this.state.Slytherin.top + "px",
      left: this.state.Slytherin.left + "%",
      height: this.state.Slytherin.height + "px",
      width: this.state.Slytherin.width + "%",
      opacity: this.state.Slytherin.opacity
    };

    let gryffindorStyle = {
      backgroundSize: "contain",
      position: "absolute",
      top: this.state.Gryffindor.top + "px",
      left: this.state.Gryffindor.left + "%",
      height: this.state.Gryffindor.height + "px",
      width: this.state.Gryffindor.width + "%",
      opacity: this.state.Gryffindor.opacity
    };

    let ravenclawStyle = {
      backgroundSize: "contain",
      position: "absolute",
      top: this.state.Ravenclaw.top + "px",
      left: this.state.Ravenclaw.left + "%",
      height: this.state.Ravenclaw.height + "px",
      width: this.state.Ravenclaw.width + "%",
      opacity: this.state.Ravenclaw.opacity
    };

    let hufflepuffStyle = {
      backgroundSize: "contain",
      position: "absolute",
      top: this.state.Hufflepuff.top + "px",
      left: this.state.Hufflepuff.left + "%",
      height: this.state.Hufflepuff.height + "px",
      width: this.state.Hufflepuff.width + "%",
      opacity: this.state.Hufflepuff.opacity
    };



    return (
      <div>
        <body className="body">
          <div>
            {/* blason poudlard */}
            <img src={Hogwarts} className="main-shield" alt="HOGWARTS" />
            {/* titre page */}
            {this.pageTitle()}
            {/* choix du nombre de joueurs */}
            <select className="player-amount">
              <option onClick={() => this.playerAmount(2)} value="2 players">2 players</option>
              <option onClick={() => this.playerAmount(3)} value="3 players">3 players</option>
              <option onClick={() => this.playerAmount(4)} value="4 players">4 players</option>
            </select>
          </div>
          {/* affichage du choix des joueurs */}
          {this.selectionChoice1()}
          {this.selectionChoice2()}
          {this.selectionChoice3()}
          {this.selectionChoice4()}
          <div>
            {()=>this.grayOut()}
            {/* blasons des maisons */}
            <button className="Slytherin shield-button" onClick={()=> {if (this.state.Slytherin.isSelected === false){this.selectHouse("Slytherin")}}} style={slytherinStyle}>
            </button>
            <button className="Gryffindor shield-button" onClick={() => {if (this.state.Gryffindor.isSelected === false){this.selectHouse("Gryffindor")}}} style={gryffindorStyle}>
            </button>
            <button className="Ravenclaw shield-button" onClick={() => {if (this.state.Ravenclaw.isSelected === false){this.selectHouse("Ravenclaw")}}} style={ravenclawStyle}>
            </button>
            <button className="Hufflepuff shield-button" onClick={() => {if (this.state.Hufflepuff.isSelected === false){this.selectHouse("Hufflepuff")}}} style={hufflepuffStyle}>
            </button>
          </div>
          {/* boutons de confirmation */}
          {this.displayConfirmButton()}
          {this.playerConfirmation()}
        </body>
      </div>

    );
  }
}

export default HouseSelection;