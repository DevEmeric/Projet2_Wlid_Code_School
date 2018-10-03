import React, { Component } from 'react';
import './Spell.css';

class Spell extends Component {

  constructor(props) {
    super(props);
    this.state = {
      leftSpell: 250,
      topSpell: 75,
      heightSpell: 20,
      widthSpell: 20,
      //ref:this.props.spellRef+"spell",
    }
  }

  render() {
    let spellStyle={
      position: "absolute",
      top: this.state.topSpell+"px",
      left: this.state.leftSpell+"px",
      width: this.state.widthSpell+"px",
      height: this.state.heightSpell+"px",
    }

    let spellId="spell"+this.props.house
    
    return (
      <div className="spell" id={spellId} style={spellStyle}>
      </div>
    );
  }
}

export default Spell;
