import React, { Component } from 'react'
import "./ProfileHeader.css";
import sasuke from "./sasuke.jpg";

import GoToMapBtn from '../GoToMapBtn/GoToMapBtn';


export default class ProfileHeader extends Component {
    render() {
        return (
            <div className='profilHeader'>
                <GoToMapBtn />
                <div className="profil">
                    <span className="profilTitle">Pseudo</span>
                    <img className="profilImage" src={sasuke}></img>
                </div>
            </div>
        )
    }
}
