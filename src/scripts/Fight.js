import React, { Component } from 'react';
import Fighter from './Fighter';
import Header from './Header';
//import ReactDOM from 'react-dom';


class Fight extends Component {

    constructor(){
        super()
        this.state = {
            fighter1:{
                id:"fighter1",
                keyPressed: false,
                rotation: 0,
                facesRight: true,
                top:250,
                left:100,
                life:100,
                width:250,
                height:200,
                attack:87,      // Attaque: w
                defense:81,    // Défense: q
                rotate:65,     // Rotate: a
                goUp:18,         // Up: e
                goDown:68,      // Down: d
                goLeft:83,        // Left: s
                goRight:70,       // Right: f
                house:"slytherin",
                allCharacteristics:this.fighterAndSpellCallback,
            },
            fighter2:{
                id:"fighter2",
                keyPressed: false,
                rotation: 180,
                facesRight: false,
                top:250,
                left:1100,
                life:100,
                width:250,
                height:200,
                attack:17,         // Attaque: Ctrl 
                defense:223,       // Défense: !
                rotate:191,        // Rotate: :
                goUp:38,            // Up: Flèche du haut
                goDown:40,         // Down: Flèche du bas
                goLeft:37,           // Left: Flèche de gauche
                goRight:35,          // Right: Flèche de droite
                house:"ravenclaw",
                allCharacteristics:this.fighterAndSpellCallback
            }
          }
    }

    render() {
        return (
            <div>
                <div>
                    <Header
                    />
                </div>
                <div>
                    <Fighter                // Player#1
                        fighter={this.state.fighter1}
                    />
                </div>
                <div>
                    <Fighter                // Player#2
                        fighter={this.state.fighter2}
                    />
                </div>    
            </div>
        );
    }
}

export default Fight;
