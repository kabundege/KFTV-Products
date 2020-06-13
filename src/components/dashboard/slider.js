import React from 'react'
import Bond from '../../images/bond.jpg';
import Assassin from '../../images/assassin_creed.jpg';
import Nfs from '../../images/nfs.jpg';
import Jumanji from '../../images/jumanji.jpg';

export const Slider = () => (
    <div className="slider container">
        <ul className="slides">
        <li>
            <img src={Bond} alt='bond'/>
            <div className="caption center-align">
            <h3>Mr. Bond</h3>
            <h5 className="light grey-text text-lighten-3">No time to Die!</h5>
            </div>
        </li>
        <li>
            <img src={Assassin} alt="creeds"/>
            <div className="caption left-align">
            <h3>Assassin_Creed</h3>
            <h5 className="light grey-text text-lighten-3">Valhalla</h5>
            </div>
        </li>
        <li>
            <img src={Nfs} alt="nfs"/>
            <div className="caption right-align">
            <h3>Need for Speed</h3>
            <h5 className="light grey-text text-lighten-3">The Most Wanted</h5>
            </div>
        </li>
        <li>
            <img src={Jumanji} alt="jumanji"/>
            <div className="caption left-align">
            <h3>Jumanji</h3>
            <h5 className="light grey-text text-lighten-3">The next level 2019</h5>
            </div>
        </li>
        </ul>
    </div>
)
