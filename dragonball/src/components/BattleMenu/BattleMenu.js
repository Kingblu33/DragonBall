import React from 'react'
import './battlemenu.css'
const BattleMenu = ({ onAttack, onMagic, onHeal, turn }) => {
    return (
        <div className='mainBattleMenu'>
            <div onClick={onAttack} className='option'>{turn === 0 ? 'Super God Fist' : 'Wild Hunt'}</div>
            <div onClick={onMagic} className='option'>{turn === 0 ? 'Kamehameha' : 'Galick Gun'}</div>
            <div onClick={onHeal} className='option'>Power Up</div>
        </div>
    )
}

export default BattleMenu;