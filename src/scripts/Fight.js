import React, { Component } from 'react';
import Fighter from './Fighter';
import Spell from './Spell';
import Header from './Header';
import Instructions from './Instructions'
import './Fight.css';
import VictoryMessage from "./VictoryMessage"
import Wall from "./wallFight.js"
//import ReactDOM from 'react-dom';





class Fight extends Component {

    constructor() {
        super();
        /*this.gryffindorBar = {
            backgroundColor: "red",
        },
        this.slytherinBar = {
            backgroundColor: "green",
        },
        this.ravenclawBar = {
            backgroundColor: "blue",
        },
        this.gryffindorBar = {
            backgroundColor: "yellow",
        },*/
        this.gryffindorShield = require("../image/Gryffindor.png");
        this.slytherinShield = require("../image/Slytherin.png");
        this.ravenclawShield = require("../image/Ravenclaw.png");
        this.hufflepuffShield = require("../image/Hufflepuff.png");
        
        this.state = {

            //Instructions Screen
            displayInstr: false,
            keyInstr: 66,
            turn: 1,


            //Avatar 1
            scoreFighter1: 0,
            progress: 100,
            leftavatar: 5,
            topavatar: 5,
            heightavatar: 130,
            widthavatar: 130,
            borderradius: 50,




            //Avatar 2
            scoreFighter2: 0,
            progress1: 100,
            righttavatar1: 5,
            topavatar1: 5,
            heightavatar1: 130,
            widthavatar1: 130,
            borderradius1: 50,

            //turn:this.props.turn,

            fighter1: {

                id: "fighter1",
                spellCasted: false,
                rotation: 0,
                facesRight: true,
                top: 250,
                left: 100,
                lifeFighter1: 100,
                width: 250,
                height: 200,
                attack: 87,      // Attaque: w
                defense: 81,    // Défense: q
                rotate: 65,     // Rotate: a
                moveUp: 69,         // Up: e
                moveDown: 68,      // Down: d
                moveLeft: 83,        // Left: s
                moveRight: 70,       // Right: f
                house: "",
                //house: this.props.fightersHouse[0],
                //house:this.getCurrentFighters()[0],
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
                lifeFighterer2: 100,
                width: 250,
                height: 200,
                attack: 161,                 // Attaque: ! 
                defense: 77,               // Défense: m
                rotate: 80,                // Rotate: p
                moveUp: 38,                 // Up: Flèche du haut
                moveDown: 40,               // Down: Flèche du bas
                moveLeft: 37,               // Left: Flèche de gauche
                moveRight: 39,              // Right: Flèche de droite
                house: "",
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
                direction: 10,
                id: "",
            },
            spellfighter2: {
                left: 0,
                top: 0,
                height: 20,
                width: 20,
                direction: -1,
                id: "",
            },
            modalVictory: false,

            ///////////PLAYERS
            scorePlayer1: 0,
            scorePlayer2: 0,
            scorePlayer3: 0,
            scorePlayer4: 0,

        }
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }



    progressBar = (progress) => {
        return <div className="progressbar">
            <div className="progress" style={{
                width: `${progress}%`,
                backgroundColor: this.barColor(this.state.fighter1.house)
            }}>
            </div>
        </div>
    }

    progressBar1 = (progress1) => {
        return <div className="progressbar1">
            <div className="progress1" style={{
                width: `${progress1}%`,
                backgroundColor: this.barColor(this.state.fighter2.house)
            }}>
            </div>
        </div>
    }

    barColor(house) {
        switch (house) {
            case "Gryffindor":  return "red" ;
            case "Slytherin":  return "green" ;
            case "Ravenclaw":  return "blue" ;
            case "Hufflepuff":  return "yellow" ;
            default:  return "rgb(233, 165, 64)" ;
        }
    }


    houseAvatar(house) {
        switch (house) {
            case "Gryffindor":  return "url(" + this.gryffindorShield + ")" ;
            case "Slytherin":  return "url(" + this.slytherinShield + ")" ;
            case "Ravenclaw":  return "url(" + this.ravenclawShield + ")" ;
            case "Hufflepuff":  return "url(" + this.hufflepuffShield + ")" ;
            default:  return "rgb(233, 165, 64)" ;
        }
    }


    castSpell = (fighterID, facesRight) => {
        console.log("shoot");
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
        setInterval(() => {
            this.setState({
                [spellID]: {
                    ...this.state[spellID],
                    left: this.state[spellID].left + 10 * this.state[spellID].direction,
                }
            })
        }, 10)
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
                facesRight: !this.state[fighterID].facesRight,
            }
        })
    }

    hasCollision(object1, object2) {
        if (object1.top < object2.top + object2.width &&
            object1.top + object1.width > object2.top &&
            object1.left < object2.left + object2.height &&
            object1.height + object1.left > object2.left) {
            return true
        }
        else {
            return false
        };
    };


    //Instructions Screen>>>>>>>>>>>>>>>>>>
    handleKeyPress(event) {
        if (event.key === " ") {
            this.Instr()
        }
    }
    Instr = () => {
        this.setState({ displayInstr: !this.state.displayInstr })
    }


    // Fighters selection depending on turn and number of players
    getCurrentFighters = (turn) => {
        if (turn === undefined) turn = 1;
        let i = 0;
        let j = 1;
        switch (this.props.fightersHouse.length) {
            case 3:
                switch (turn) {
                    case 1: { i = 0; j = 1 }; break;
                    case 2: { i = 1; j = 2 }; break;
                    case 3: { i = 0; j = 2 }; break;
                };
                break;
            case 4:
                switch (turn) {
                    case 1: { i = 0; j = 1 }; break;
                    case 2: { i = 2; j = 3 }; break;
                    case 3: { i = 0; j = 2 }; break;
                    case 4: { i = 1; j = 3 }; break;
                    case 5: { i = 0; j = 3 }; break;
                    case 6: { i = 1; j = 2 }; break;
                };
                break;
            default: { i = 0; j = 1 }; break;
        }
        console.log("Fighters selected : ")
        console.log([this.props.fightersHouse[i], this.props.fightersHouse[j]])

        this.setState({
            fighter1: {
                ...this.state.fighter1,
                house: this.props.fightersHouse[i],
            },
            fighter2: {
                ...this.state.fighter2,
                house: this.props.fightersHouse[j],
            },
            spellfighter1: {
                ...this.state.spellfighter1,
                id: "spell" + this.props.fightersHouse[i],
            },
            spellfighter2: {
                ...this.state.spellfighter2,
                id: "spell" + this.props.fightersHouse[j],
            }
        })
    }


    componentDidMount = () => {

        this.getCurrentFighters();
        setInterval(() => {
            let currentState = this.state.fighter1.lifeFighter1;
            let currentState1 = this.state.progress1;



            if (currentState1 === 0) {
                this.setState({
                    //winner2: this.state.winner2 = false,
                    //winner1: this.state.winner1 = true,
                    scoreFighter1: this.state.scoreFighter1 + 1,
                    progress1: currentState1 - 1,

                    modalVictory: true
                });
            }
            if (currentState === 0) {
                this.setState({
                    //winner1: this.state.winner1 = false,
                    // winner2: this.state.winner2 = true,
                    scoreFighter2: this.state.scoreFighter2 + 1,
                    lifeFighter1: currentState - 1,

                    modalVictory: true
                });
            }



            if (this.hasCollision(this.state.spellfighter1, this.state.fighter2)) {
                //window.alert("COLLISIOOOOOOOOOOOOOOOOOOOOOON")
                this.setState({
                    progress1: currentState1 - 10,

                    fighter1: {
                        ...this.state.fighter1,
                        spellCasted: false,
                    },
                    spellfighter1: {
                        ...this.state.spellfighter1,
                        top: 0,
                        left: 0,
                    }
                })
                if (this.state.progress1 === 0 || this.state.progress === 0) {
                    //alert("un joueur est mort") 
                    console.log(this.state.modalVictory)
                    this.setState({
                        modalVictory: !this.state.modalVictory
                    })


                }
            }
            if (this.hasCollision(this.state.spellfighter2, this.state.fighter1)) {
                //window.alert("COLLISIOOOOOOOOOOOOOOOOOOOOOON")
                this.setState({
                    lifeFighter1: currentState - 10,

                    fighter2: {
                        ...this.state.fighter2,
                        spellCasted: false,
                    },
                    spellfighter2: {
                        ...this.state.spellfighter2,
                        top: 0,
                        left: 0,
                    }
                })
                if (this.state.progress1 === 0 || this.state.progress === 0) {
                    //alert("un joueur est mort") 
                    console.log(this.state.modalVictory)
                    this.setState({
                        modalVictory: !this.state.modalVictory
                    })


                }
            }

        }, 10)
        document.addEventListener("keydown", this.handleKeyPress)
    }



    render() {
        console.log(this.state.progress1)
        /*  console.log("Fighter 1 : ")
          console.log(this.state.fighter1)
          console.log("Spell Fighter 1 : ")
          console.log(this.state.spellfighter1)
          console.log("Fighter 2 : ")
          console.log(this.state.fighter2)
          console.log("Spell Fighter 2 : ")
          console.log(this.state.spellfighter2)
  
          */

        let avatarStyle = {
            position: "absolute",
            top: this.state.topavatar + "px",
            left: this.state.leftavatar + "px",
            width: this.state.widthavatar + "px",
            height: this.state.heightavatar + "px",
            //borderRadius: this.state.borderradius + "%",
            backgroundImage: this.houseAvatar(this.state.fighter1.house),
            backgroundPosition: "right",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
        }

        let avatarId = "avatar" + this.props.house

        let avatarStyle1 = {
            position: "absolute",
            top: this.state.topavatar1 + "px",
            right: this.state.righttavatar1 + "px",
            width: this.state.widthavatar1 + "px",
            height: this.state.heightavatar1 + "px",
            // borderRadius: this.state.borderradius1 + "%",
            backgroundImage: this.houseAvatar(this.state.fighter2.house),
            backgroundPosition: "left",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
        }
        let avatarId1 = "avatar" + this.props.house

        let instrStyle = {
            position: "relative",
            top: -20 + "px",
            width: 150 + "px",
            margin: "auto",
            border: 5 + "px" + " " + "solid" + " " + "black",
            lineHeight: 2 + "px",
            opacity: 0.5
        }



        return (
            <div>
                <div>
                    <Wall />
                </div>
                <div className="full">
                    <Header
                    />

                    <div className="avatar" id={avatarId} style={avatarStyle}></div>
                    {this.progressBar(this.state.progress)}

                    <div className="avatar1" id={avatarId1} style={avatarStyle1}></div>
                    {this.progressBar1(this.state.progress1)}
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

                <div><div className="spaceInstr" style={instrStyle}><p>INSTRUCTIONS</p><p>Press SPACEBAR</p></div>{
                    this.state.displayInstr ?
                        <Instructions />
                        :
                        <div></div>
                }
                </div>

            

                <div>{
                    this.state.modalVictory ?
                        <VictoryMessage
                            getCurrentFighters={this.getCurrentFighters}
                            turn={this.state.turn}
                        />
                        :
                        <div></div>
                }</div>




                
            </div>

        );
    }
}

export default Fight;
/** <h1 style={{ color: 'red' }} className={whole1}>{whole1}</h1>
                <h1 style={{ color: 'green' }} className={whole2}>{whole2}</h1> */