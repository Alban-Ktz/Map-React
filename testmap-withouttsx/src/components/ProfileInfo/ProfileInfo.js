import React, { Component } from 'react'
import "./ProfileInfo.css"
import controllerIcon from "./images/controllerIcon.svg";
import mailIcon from "./images/mailIcon.svg";
import passwordIcon from "./images/passwordIcon.svg";

import Separator from '../Separator/Separator'

export default class extends Component {
    render() {
        return (
            <>
                <div className="profileInfo">
                    <div className="profileInfoData">
                        <img src={controllerIcon} alt="" />
                        <span>{"Pseudo"}</span>
                    </div>
                </div>
                <Separator />
            </>
        )
    }
}
