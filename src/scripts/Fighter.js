import React, { Component } from 'react';
import './Fighter.css';
import GryffindorColor from "../image/silouhetteGryffindor.png";
import SlytherinColor from "../image/silouhetteSlytherin.png";
import RavenclawColor from "../image/silouhetteRavenclaw.png";
import HufflepuffColorColor from "../image/silouhetteHufflepuff.png";

class Fighter extends Component {

  constructor(props) {
    super(props);
    this.Gryffindor = GryffindorColor,
    this.Slytherin = SlytherinColor,
    this.Ravenclaw = RavenclawColor,
    this.Hufflepuff = HufflepuffColorColor,

    this.state = {
      spellCasted: false,
      rotation: this.props.fighter.rotation,
      facesRight: this.props.fighter.facesRight,
      top: this.props.fighter.top,
      left: this.props.fighter.left,
      width: this.props.fighter.width,
      height: this.props.fighter.height,
      speed: 5,
    }
  }

  handleKeyPress = (event) => {
    switch (event.which) {
      case this.props.fighter.attack: this.props.fighter.castSpell(this.props.fighter.id, this.props.fighter.facesRight); break;
      //case this.props.fighter.defense : this.props.fighter.defend(this.props.fighter.id); break;
      case this.props.fighter.rotate: this.props.fighter.rotateFighter(this.props.fighter.id); break;
      case this.props.fighter.moveUp: this.props.fighter.move(this.props.fighter.id, -this.state.speed, 0); break;
      case this.props.fighter.moveDown: this.props.fighter.move(this.props.fighter.id, this.state.speed, 0); break;
      case this.props.fighter.moveLeft: this.props.fighter.move(this.props.fighter.id, 0, -this.state.speed); break;
      case this.props.fighter.moveRight: this.props.fighter.move(this.props.fighter.id, 0, this.state.speed); break;
    }

    this.setState({
      spellCasted: this.props.fighter.spellCasted,
      top: this.props.fighter.top,
      left: this.props.fighter.left,
      rotation: this.props.fighter.rotation
    })
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress, false);
  }

  render() {
    let fighterStyle = {
      transform: `rotateY(${this.state.rotation}deg)`,
      position: "absolute",
      top: this.state.top + "px",
      left: this.state.left + "px",
      width: this.state.width + "px",
      height: this.state.height + "px",
      backgroundImage: `url(${this[this.props.fighter.house]})`,
    };

    let fighterId = "fighter" + this.props.fighter.house

    return (
      <div>
        <div className="fighter" style={fighterStyle} id={fighterId}>
        </div>
      </div>
    );
  }
}

export default Fighter;
