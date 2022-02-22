import React, { Component } from 'react'
import "./GoToMapBtn.css"
import backIcon from "./backIcon.svg";

export default class GoToMapBtn extends Component {
    render() {
        return (
            <btn>
                <img src={backIcon} alt="" />
            </btn>
        )
    }
}
