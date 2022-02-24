import React from 'react'
import './BurgerMenu.css'

import { useState } from 'react'
import plateIcon from './image/plate.png'
import beerIcon from './image/beer.png'
import eiffelIcon from './image/eiffel.png'
import transportIcon from './image/transport.png'

function Burger() {
    const [showLinks, setShowLinks] = useState(false);
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
    
    return (
        <nav className={`burgerMenu ${showLinks ? "show_nav" : ""} `}>
            <ul className='burgerMenu_links'>
                <h1 className="burgerTitle">SELECTIONNEZ <br/> VOS LIEUX</h1>

                <li className='burgerMenu_Items'>
                    <div className='burgerMenu_link'>
                        <img className='img_all' src={plateIcon} alt="rip" /> 
                        <span>Restaurants</span> 
                        <input type='checkbox' className="checkbox1" value="restaurant"/>
                    </div>
                </li>

                <li className='burgerMenu_Items'>
                    <div className='burgerMenu_link'>
                        <img className='img_all' src={eiffelIcon} alt="rip" /> 
                        <span>Lieux touristiques</span> 
                        <input type='checkbox' className="checkbox2"/>
                    </div>
                </li>

                <li className='burgerMenu_Items'>
                    <div className='burgerMenu_link'>
                        <img className='img_all' src={transportIcon} alt="rip" /> 
                        <span>Transports</span> 
                        <input type='checkbox' className="checkbox3"/>
                    </div>
                </li>

                <li className='burgerMenu_Items'>
                    <div className='burgerMenu_link'>
                        <img className='img_all' src={beerIcon} alt="rip" /> 
                        <span>Bars</span> 
                        <input type='checkbox' className="checkbox4"/>
                    </div>
                </li>

            </ul>
            <span className='burgerIcon'></span>
            <div onClick={handleShowLinks} className="burgerButton"></div>
        </nav>
    )
}

export default Burger;