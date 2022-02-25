import React, { Component } from 'react';

import './BurgerMenu.css';
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import Map from "../components/Map/Map";
import NavBar from "../components/NavBar/NavBar";
import plateIcon from './image/plate.png'
import beerIcon from './image/beer.png'
import eiffelIcon from './image/eiffel.png'
import transportIcon from './image/transport.png'


export default class MapPage extends Component {

  constructor(props) {
    super(props);
    this.state ={
      checkedOne: true,
      checkedTwo:true,
      checkedThree:true,
      checkedFour:true,
      showLinks:false,
    };
  
    this.onChangeRes= this.onChangeRes.bind(this);
    this.onChangeTour= this.onChangeTour.bind(this);
    this.onChangetrans= this.onChangetrans.bind(this);
    this.onChangeBar= this.onChangeBar.bind(this);
    this.onClickLinks= this.onClickLinks.bind(this);
  
  
  }

  onChangeRes(e){
    this.setState({
      checkedOne:!this.state.checkedOne
    });
  }

  onChangeTour(e){
    this.setState({
      checkedTwo:!this.state.checkedTwo
    });
  }

  onChangetrans(e){
    this.setState({
      checkedThree:!this.state.checkedThree
    });
    
  }

  onChangeBar(e){
    this.setState({
      checkedFour:!this.state.checkedFour
    });
  }
  onClickLinks(e){
    this.setState({
      showLinks: !this.state.showLinks
    });
  }

  

  render() {
    return (
      <div className="mapPage">
        <nav className={`burgerMenu ${this.state.showLinks ? "show_nav" : ""} `}>
                <ul className='burgerMenu_links'>
                    <h1 className="burgerTitle">SELECTIONNEZ <br/> VOS LIEUX</h1>
                    
                    <li className='burgerMenu_Items'>
                        <div className='burgerMenu_link'>
                            <img className='img_all' src={plateIcon} alt="rip" /> 
                            <span>Restaurants</span> 
                            <input type='checkbox' className="checkbox1" defaultChecked={this.state.checkedOne} onClick={this.onChangeRes}/>
                        </div>
                    </li>

                    <li className='burgerMenu_Items'>
                        <div className='burgerMenu_link'>
                            <img className='img_all' src={eiffelIcon} alt="rip" /> 
                            <span>Lieux touristiques</span> 
                            <input type='checkbox' className="checkbox2" defaultChecked={this.state.checkedTwo} onClick={this.onChangeTour}/>
                        </div>
                    </li>

                    <li className='burgerMenu_Items'>
                        <div className='burgerMenu_link'>
                            <img className='img_all' src={transportIcon} alt="rip" /> 
                            <span>Transports</span> 
                            <input type='checkbox' className="checkbox3" defaultChecked={this.state.checkedThree} onChange={this.onChangetrans}/>
                        </div>
                    </li>

                    <li className='burgerMenu_Items'>
                        <div className='burgerMenu_link'>
                            <img className='img_all' src={beerIcon} alt="rip" /> 
                            <span>Bars</span> 
                            <input type='checkbox' className="checkbox4" defaultChecked={this.state.checkedFour} onChange={this.onChangeBar}/>
                        </div>
                    </li>
                   
                </ul>
                
            
            <span className='burgerIcon'></span>
            <div onClick={this.onClickLinks} className="burgerButton"></div>
        </nav>
        
        <NavBar />

        <Map res={this.state.checkedOne} tour={this.state.checkedTwo} trans ={this.state.checkedThree} bars = {this.state.checkedFour}/>
      </div>
    )
  }
}
