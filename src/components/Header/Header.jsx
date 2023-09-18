import React from 'react'
import {ReactComponent as NotificationIcon} from '../../assets/images/notification.svg'
import {ReactComponent as Profile} from '../../assets/images/profile.svg'
import {ReactComponent as SeachIcon} from '../../assets/images/search.svg'
import './Header.scss'
const Header = () => {
  return (
    <div className='header'>
        <div className="header__title">Dashboard</div>
        <div className="header__right">
            <div className="header__right__searchbar">
                <input type="text" placeholder='Search...' className='header__right__searchbar__input'/>
                <SeachIcon style={{position:'relative', right:'20px'}}/>
            </div>
            <div className="header__right__notifications">
                <NotificationIcon/>
            </div>
            <div className="header__right__profileIcon">
                <Profile/>
            </div>
        </div>
    </div>
  )
}

export default Header