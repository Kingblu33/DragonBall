import React from 'react'
import Bar from '../Bar/Bar';

import './playersummary.css'


const PlayerSummary = ({ main = false, name, level, health, maxHealth }) => {
    const color1 = '#102540';
    const color2 = '#226473';
    return (
        <div style={{ backgroundColor: main ? color1 : color2 }} className="mainSummary">
            <div className='info'>
                <div className='name'>{name}</div>
                <div className='level'>Power Level:{level}</div>
            </div>

            <div className='health'>
                <Bar label='HP' value={health} maxValue={maxHealth} />

            </div>
        </div>


    )
}

export default PlayerSummary