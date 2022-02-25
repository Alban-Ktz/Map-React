/*import React from 'react'
import './BurgerMenu.css'

import { useState,useCallback } from 'react'
import plateIcon from './image/plate.png'
import beerIcon from './image/beer.png'
import eiffelIcon from './image/eiffel.png'
import transportIcon from './image/transport.png'

function Burger() {
    const [showLinks, setShowLinks] = useState(false);
    const [checkedOne, setCheckedOne] = useState(false);
    const [checkedTwo, setCheckedTwo] = useState(false);
    const [checkedThree, setCheckedThree] = useState(false);
    const [checkedFour, setCheckedFour] = useState(false);

    const handleChangeOne = () => {
        setCheckedOne(!checkedOne);
    };

    const handleChangeTwo = () => {
        setCheckedTwo(!checkedTwo);
    };

    const handleChangeThree = () => {
        setCheckedThree(!checkedThree);
    };

    const handleChangeFour = () => {
        setCheckedFour(!checkedFour);
    };

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
    
    

   
    return (
        <nav className={`burgerMenu ${showLinks ? "show_nav" : ""} `}>
            <form onSubmit={submitForm}>
                <ul className='burgerMenu_links'>
                    <h1 className="burgerTitle">SELECTIONNEZ <br/> VOS LIEUX</h1>
                    
                    <li className='burgerMenu_Items'>
                        <div className='burgerMenu_link'>
                            <img className='img_all' src={plateIcon} alt="rip" /> 
                            <span>Restaurants</span> 
                            <input type='checkbox' className="checkbox1" value={checkedOne} onChange={handleChangeOne}/>
                        </div>
                    </li>

                    <li className='burgerMenu_Items'>
                        <div className='burgerMenu_link'>
                            <img className='img_all' src={eiffelIcon} alt="rip" /> 
                            <span>Lieux touristiques</span> 
                            <input type='checkbox' className="checkbox2" value={checkedTwo} onChange={handleChangeTwo}/>
                        </div>
                    </li>

                    <li className='burgerMenu_Items'>
                        <div className='burgerMenu_link'>
                            <img className='img_all' src={transportIcon} alt="rip" /> 
                            <span>Transports</span> 
                            <input type='checkbox' className="checkbox3" value={checkedThree} onChange={handleChangeThree}/>
                        </div>
                    </li>

                    <li className='burgerMenu_Items'>
                        <div className='burgerMenu_link'>
                            <img className='img_all' src={beerIcon} alt="rip" /> 
                            <span>Bars</span> 
                            <input type='checkbox' className="checkbox4" value={checkedFour} onChange={handleChangeFour}/>
                        </div>
                    </li>
                    <button type='submit'>Confimer</button>
                </ul>
                
            </form>
            <span className='burgerIcon'></span>
            <div onClick={handleShowLinks} className="burgerButton"></div>
        </nav>
    )
}

export default Burger;*/