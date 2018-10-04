import React, { Component } from 'react';
import Fighter from './Fighter';
import Spell from './Spell';
import Header from './Header';
//import ReactDOM from 'react-dom';


class Fight extends Component {

    constructor() {
        super()
        this.state = {
            fighter1: {
                id: "fighter1",
                spellCasted: false,
                rotation: 0,
                facesRight: true,
                top: 250,
                left: 100,
                life: 100,
                width: 250,
                height: 200,
                attack: 87,      // Attaque: w
                defense: 81,    // Défense: q
                rotate: 65,     // Rotate: a
                moveUp: 69,         // Up: e
                moveDown: 68,      // Down: d
                moveLeft: 83,        // Left: s
                moveRight: 70,       // Right: f
                house: "slytherin",
                castSpell: this.castSpell,
                move: this.move,
                rotateFighter: this.rotate
            },
            fighter2: {
                id: "fighter2",
                spellCasted: false,
                rotation: 180,
                facesRight: false,
                top: 250,
                left: 1100,
                life: 100,
                width: 250,
                height: 200,
                attack: 17,                 // Attaque: Ctrl 
                defense: 223,               // Défense: !
                rotate: 191,                // Rotate: :
                moveUp: 38,                 // Up: Flèche du haut
                moveDown: 40,               // Down: Flèche du bas
                moveLeft: 37,               // Left: Flèche de gauche
                moveRight: 35,              // Right: Flèche de droite
                house: "ravenclaw",
                allCharacteristics: this.fighterAndSpellCallback,
                castSpell: this.castSpell,
                move: this.move,
                rotateFighter: this.rotate
            },
            spellfighter1: {
                left: 0,
                top: 0,
                height: 20,
                width: 20,
                id: "spellslytherin",
                direction: 10,
            },
            spellfighter2: {
                left: 0,
                top: 0,
                height: 20,
                width: 20,
                id: "spellravenclaw",
                direction: -1,
            }
        }
    }

    castSpell = (fighterID, facesRight) => {
        let spellID = "spell" + fighterID
        let x = facesRight ? 260 : -30;
        // Apparition du spell
        this.setState({
            [fighterID]: {
                ...this.state[fighterID],
                spellCasted: true,
            }
        })
        window.setTimeout = () => {
            this.setState({
                [fighterID]: {
                    ...this.state[fighterID],
                    spellCasted: false,
                }
            }, 2000)
        }
        this.setState({
            [spellID]: {
                ...this.state[spellID],
                left: this.state[fighterID].left + x,
                top: this.state[fighterID].top + 80,
                direction: x / Math.abs(x)
            }
        })
        setInterval(()=>{
            this.setState({
                [spellID]: {
                    ...this.state[spellID],
                    left: this.state[spellID].left + 10*this.state[spellID].direction,
                }
            })
        },10)
    }

    move = (fighterID, x, y) => {
        this.setState({
            [fighterID]: {
                ...this.state[fighterID],
                top: this.state[fighterID].top + x,
                left: this.state[fighterID].left + y,
            }
        })
    }

    rotate = (fighterID) => {
        console.log("rotate")
        this.setState({
            [fighterID]: {
                ...this.state[fighterID],
                rotation: this.state[fighterID].rotation - 180,
            }
        })
    }

    hasCollision(object1, object2) {
        if (object1.top < object2.top + object2.width &&
            object1.top + object1.width > object2.top &&
            object1.left < object2.left + object2.height &&
            object1.height + object1.left > object2.left) 
        {
            return true
        }
        else {
            return false
        };
    };

    componentDidMount=()=>{
        setInterval(() => {
            if (this.hasCollision(this.state.spellfighter1, this.state.fighter2)) {
                window.alert("COLLISIOOOOOOOOOOOOOOOOOOOOOON")
            }
            if (this.hasCollision(this.state.spellfighter2, this.state.fighter1)) {
                window.alert("COLLISIOOOOOOOOOOOOOOOOOOOOOON")
            }
        }, 10)
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
                <div>{
                    this.state.fighter1.spellCasted ?
                        <Spell
                            spell={this.state.spellfighter1}
                        />
                        :
                        <div></div>
                }</div>
                <div>{
                    this.state.fighter2.spellCasted ?
                        <Spell
                            spell={this.state.spellfighter2}
                        />
                        :
                        <div></div>
                }</div>
            </div>
        );
    }
}

export default Fight;
