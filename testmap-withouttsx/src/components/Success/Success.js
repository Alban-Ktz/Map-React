import React, { Component } from 'react'
import successImg from "./successImg.png";
import checkIcon from "./checkIcon.svg";
import Separator from "../Separator/Separator"
import "./Success.css"

export default class Success extends Component {
    render() {
        return (
            <div className="successBox">
                <div className="success">
                    <img className="successImg" src={successImg} />
                    <div className='successInfos'>
                        <h2>Visiter la cathédrale</h2>
                        <p>Visite de la cathédrale de Metz</p>
                    </div>
                    <img className="checkIcon" src={checkIcon}/>
                </div>
                <Separator/>
            </div>
        )
    }
}
