import React from 'react'
import './ColoredCard.scss'
const ColoredCard = ({ icon, title, value, color}) => {
    return (
        <div className='coloredcard' style={{ backgroundColor: color }}>
            <div className="coloredcard__icon">
             {icon}
            </div>
            <div className="coloredcard__details">
                <div className="coloredcard__details__title"> {title} </div>
                <div className="coloredcard__details__value"> {value} </div>
            </div>
        </div>
    )
}

export default ColoredCard