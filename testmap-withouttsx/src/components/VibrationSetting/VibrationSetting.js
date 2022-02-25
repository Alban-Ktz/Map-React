import React, { Component } from 'react'
import "./VibrationSetting.css";

export default class VibrationSetting extends Component {
    
    render() {
        return (
            <div className="VibrationSetting">
                <div className="settingTag">
                    Activer les vibrations
                </div>
                <div>
                    <input class="switch-vibration" type="checkbox"></input>
                </div>
            </div>
        )
    }
}
