import React from 'react';
import volumeOn from '../image/volumeOn.png'
import volumeOff from '../image/volumeOff.png'

import './Settings.css'

export default class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMusicOn : true,
            isSoundOn : true,
        };
    }

    toggle=(inputToToggle)=>{
        console.log("toggle")
        this.setState({
            [inputToToggle]: !this.state[inputToToggle]
        })
        this.props[inputToToggle](inputToToggle, this.state[inputToToggle]);
        console.log(this.props[inputToToggle](inputToToggle, this.state[inputToToggle]))
    }

    render() {

        let volumeOnStyle = {
            width: "30px",
            height: "30px",
            display : this.state.isMusicOn ? "block" : "none",
        }

        let volumeOffStyle = {
            width: "30px",
            height: "30px",
            display : !this.state.isMusicOn ? "block" : "none",
        }

        let soundOnStyle = {
            width: "30px",
            height: "30px",
            display : this.state.isSoundOn ? "block" : "none",
        }

        let soundOffStyle = {
            width: "30px",
            height: "30px",
            display : !this.state.isSoundOn ? "block" : "none",
        }

        console.log(volumeOnStyle)
        console.log(volumeOffStyle)

        return (
            <table id="settings">
                <tr>
                    <td>Music :</td>
                    <td>
                        {/* <button style={volumeOnStyle}><img src={volumeOn}/></button>
                        <button style={volumeOffStyle}><img src={volumeOff}/></button> */}
                        <button onClick={(e) => { this.toggle("isMusicOn") }} style={volumeOnStyle}><img src={volumeOn}/></button>
                        <button onClick={(e) => { this.toggle("isMusicOn") }} style={volumeOffStyle}><img src={volumeOff}/></button>
                    </td>
                </tr>
                <tr>
                    <td>Sounds :</td>
                    <td>
                        {/* <button style={volumeOnStyle}><img src={volumeOn}/></button>
                        <button style={volumeOffStyle}><img src={volumeOff}/></button> */}
                        <button onClick={(e) => { this.toggle("isSoundOn") }} style={soundOnStyle}><img src={volumeOn}/></button>
                        <button onClick={(e) => { this.toggle("isSoundOn") }} style={soundOffStyle}><img src={volumeOff}/></button>
                    </td>
                </tr>
            </table>
        );
    }
}