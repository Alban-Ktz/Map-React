import React, { Component } from 'react'
import checkIconGray from "./checkIconGray.svg";
import checkIconGreen from "./checkIconGreen.svg";
import Separator from "../Separator/Separator"
import "./Success.css"

export default class Success extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAccomplished: false,
        }
    }
    componentDidUpdate() {
        if(true) {
            this.setState(
                {
                    isAccomplished: true,
                }
            )
        }
    }
    render() {
        return (
            <div className="successBox">
                <div className="success">
                    <img className="successImg" src={this.props.icon} />
                    <div className='successInfos'>
                        <h2>{this.props.title}</h2>
                        <p>{this.props.desc}</p>
                    </div>
                    {this.state.isAccomplished ?
                        <img className="checkIcon" src={checkIconGreen} alt="" /> :
                        <img className="checkIcon" src={checkIconGray} alt="" />}
                </div>
                <Separator />
            </div>
        )
    }
}
