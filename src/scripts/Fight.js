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
                attack:"w",      // Attaque: w
                defense:"q",    // Défense: q
                rotate:"a",     // Rotate: a
                goUp:"e",         // Up: e
                goDown:"d",      // Down: d
                goLeft:"s",        // Left: s
                goRight:"f",       // Right: f
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
                attack:";",         // Attaque: Ctrl 
                defense:"!",       // Défense: !
                rotate:":",        // Rotate: :
                goUp:"ArrowUp",            // Up: Flèche du haut
                goDown:"ArrowDown",         // Down: Flèche du bas
                goLeft:"ArrowLeft",           // Left: Flèche de gauche
                goRight:"ArrowRight",          // Right: Flèche de droite
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
