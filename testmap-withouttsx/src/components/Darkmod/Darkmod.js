import React, { Component } from 'react'
import "./Darkmod.css";

export default class Darkmod extends Component {
    
    render() {
        return (
            <div className="DarkmodSetting">
                <div className="settingTag">
                    Mettre le mode nuit
                </div>
                <div>
                    <input class="switch-vibration" type="checkbox"></input>
                </div>
            </div>
        )
    }
}
