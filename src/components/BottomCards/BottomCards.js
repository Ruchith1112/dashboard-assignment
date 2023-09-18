import React from 'react'
import './BottomCards.scss'
import TopProducts from './TopProducts'
import Schedule from './Schedule'
const BottomCards = () => {
  return (
    <div className='d-flex'>
        <div className="top-products">
            <TopProducts/>
        </div>
        <div className="schedules">
            <Schedule/>
        </div>
    </div>
  )
}

export default BottomCards