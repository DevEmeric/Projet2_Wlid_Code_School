import React, { Component } from 'react';
import Shield from './HeaderShield'

class Header extends Component {

  constructor(props){
    super(props);
    this.state={
      fighter1: this.props.fighter1,
      fighter2: this.props.fighter2,
    }
  }

  renderShields(numberOfShields){
    const shieldsItem = [];
    for (var i=0; i < numberOfShields; i++) {
      shieldsItem.push(<Shield />);
    }
    return shieldsItem;
  }

  render() {

    let fighter1Shields={
      position : "absolute",
      top : "45px",
      left : "530px",
      zIndex : 3,
    }

    let fighter2Shields={
      position : "absolute",
      top : "45px",
      left : "900px",
      zIndex : 3,
    }
      
    return (
      <div>
        <div id="shieldsFighter1" style={fighter1Shields}>
            {
              this.renderShields(this.props.fighter1.defense.shieldNumber)
            } 
        </div>
        <div id="shieldsFighter2" style={fighter2Shields}>
            {
              this.renderShields(this.props.fighter2.defense.shieldNumber)
            } 
        </div>
      </div>
    );
  }
}

export default Header;
