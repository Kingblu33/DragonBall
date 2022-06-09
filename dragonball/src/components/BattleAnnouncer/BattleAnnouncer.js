import React from 'react'
import { useTypedMessage } from './useTypedMessages'
import './announcer.css'
const BattleAnnouncer = ({ message }) => {
    const typedMessage = useTypedMessage(message);
    console.log("this is typed message", message);
    return (
        <div className='mainAnnouncer'>
            <div className='message'>{typedMessage}</div>
        </div>
    )
}

export default BattleAnnouncer