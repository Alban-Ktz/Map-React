import React, { Component } from 'react'
import "./VibrationSetting.css";

export default class VibrationSetting extends Component {
    
    render() {
        return (
            <div className="VibrationSetting">
                <ul>
                    <li className="settingTag">
                        Vibrations
                    </li>
                    <li>
                        <input class="switch-vibration" type="checkbox"></input>
                    </li>
                </ul>
            </div>
        )
    }
}
