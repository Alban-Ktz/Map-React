import React, { Component } from 'react'
import trophySvg from "./trophySvg.svg"
import "./SuccessHeader.css";
import GoToMapBtn from '../GoToMapBtn/GoToMapBtn';

export default class SuccessHeader extends Component {
    render() {
        return (
            <div className='successHeader'>
                <GoToMapBtn />
                <div className="boxSuccess">
                    <h1>Succès</h1>
                    <ul className="counterTrophy">
                        <li className="counter">0</li>
                        <li className="trophy"><img src={trophySvg} alt=""/></li>
                    </ul>
                </div>
            </div>
        )
    }
}
