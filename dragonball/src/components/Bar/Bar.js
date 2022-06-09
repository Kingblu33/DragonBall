import React from 'react'
import './bar.css'

const Bar = ({ label, value, maxValue }) => {
    return (
        <div className='mainBar'>
            <div className='label'>{label}</div>
            <div className='max'>
                <div className='value' style={{ width: `${(value / maxValue) * 100}%` }}>{value}</div >
            </div>
        </div>
    )
}

export default Bar;