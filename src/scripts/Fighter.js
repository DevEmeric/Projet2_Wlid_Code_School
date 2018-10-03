import React, { Component } from 'react';
import './Fighter.css';
import Spell from './Spell';
//import ReactDOM from 'react-dom';


class Fighter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keyPressed: false,
      rotation:this.props.fighter.rotation,
      facesRight: this.props.fighter.facesRight,
      top:this.props.fighter.top,
      left:this.props.fighter.left,
      width:this.props.fighter.width,
      height:this.props.fighter.height,
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
    

  handleKeyPress(event) {
    //  console.log("Appui touche");
    if (event.key === this.props.fighter.attack) {
      this.castSpell()
    }
    // configuration des touches de deplacements
    if(event.key === this.props.fighter.goUp) {
      this.move(-20,0)
    }
    if(event.key === this.props.fighter.goDown) {
      this.move(20,0)
    }
    if(event.key === this.props.fighter.goLeft) {
        this.move(0,-20)
    }
    if(event.key === this.props.fighter.goRight) {
        this.move(0,20)
    }
  }

  // fonction increment position personnages
  move(x, y) {
    this.setState({
      top: this.state.top + x,
      left: this.state.left + y
  });
  }
  
  // Lancement de sort
  castSpell() {
    this.setState({
      keyPressed: true,
    })
    setTimeout(()=>{
      this.setState({
        keyPressed: false,
      })
    },2000)
  }


  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress, false);
  }
  componentDidUpdate() {
    document.addEventListener("keydown", this.handleKeyPress, false);
  }

  render() {
    let fighterStyle = {
      transform: `rotateY(${this.state.rotation}deg)`,
      position: "absolute",
      top: this.state.top+"px",
      left: this.state.left+"px",
      width:this.state.width+"px",
      height:this.state.height+"px",
    };

    let fighterId="fighter"+this.props.fighter.house



    return (
      <div>
        <div className="fighter" style={fighterStyle} id={fighterId}>
          <div>{
            this.state.keyPressed ?
              <Spell 
                house={this.props.fighter.house}
                direction={this.state.facesRight}
                //size={this.refs.fighter.getClientRects()}
                spellCharacteristics={this.spellCharacteristicsCallback}
                spellRef={this.props.fighter.id}
              />
              :
              <div></div>
          }</div>
        </div>
      </div>
    );
  }
}

export default Fighter;
