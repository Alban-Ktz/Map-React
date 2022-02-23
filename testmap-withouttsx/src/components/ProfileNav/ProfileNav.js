import React, { Component } from 'react';
import "./ProfileNav.css";
import settingsIcon from "./settingsIcon.png";
import {Link} from "react-router-dom"

export default class ProfileNav extends Component {

    render() {
        return (
            <div className="profileNav">
                <div className="profileNavEdit">
                    EDITER
                </div>
                <Link to="/SettingsPage">
                    <div className="profileNavSettings">
                        <img src={settingsIcon} />
                    </div>
                </Link>
            </div>
        )
    }
}