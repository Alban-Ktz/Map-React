import React, { Component } from 'react'
import "./ProfileInfo.css"

import Separator from '../Separator/Separator'

export default class extends Component {
    render() {
        return (
            <>
                <div className="profileInfo">
                    <div className="profileInfoData">
                        <img src={this.props.icon} alt="" />
                        <span>{this.props.field}</span>
                        <input class="hidden" type="text"  value="PseudoDeLaBDD"></input>
                    </div>
                </div>
                <Separator />
            </>
        )
    }
}
