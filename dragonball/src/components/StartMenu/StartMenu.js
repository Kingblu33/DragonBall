import React from 'react'
import './startmenu.css'
import img from '../../assets/dragonballlogo.png'
const StartMenu = ({ onStartClick }) => {
    return (
        <div>
            <img className='logo' src={img} />

            <div className="mainstart">

                <div className="startButton" onClick={onStartClick}>Start Game</div>

            </div>
        </div>
    )
}

export default StartMenu