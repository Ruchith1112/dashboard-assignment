import React from 'react'
import './Sidebar.scss'
import { ReactComponent as TransactionsLight } from '../../assets/images/transactionsLight.svg'
import { ReactComponent as Dashboard } from '../../assets/images/dashboard.svg'
import { ReactComponent as Schedules } from '../../assets/images/calendar.svg'
import { ReactComponent as Settings } from '../../assets/images/settings.svg'
import { ReactComponent as Users } from '../../assets/images/users.svg'
const Sidebar = () => {
    const activeNav = 0;
    const navbarOptions = [
        {
            value: 'Dashboard',
            icon: <Dashboard />
        },
        {
            value: 'Transactions',
            icon: <TransactionsLight />
        },
        {
            value: 'Schedules',
            icon: <Schedules />
        },
        {
            value: 'Users',
            icon: <Users />
        },
        {
            value: 'Settings',
            icon: <Settings />
        },
    ]
    return (
        <div>
            <aside className={'sidebar'}>
                <div className='header__logo'> Board.</div>
                <div className="sidebar__list-container">
                    <ul className=''>
                        {
                            navbarOptions.map(
                                (item, index) => {
                                    return <li className={`sidebar__list ${activeNav===index && 'sidebar-active'}`} key={index}>
                                        <div className="sidebar__list-logo">{item.icon}</div>
                                        <div className="sidebar__list-value">{item.value}</div>
                                    </li>
                                }
                            )
                        }
                    </ul>
                    <ul className='sidebar__list-bottom'>
                        <li className='sidebar__list'>
                            <div className="sidebar__list-logo__bottom">Help</div>
                        </li>
                        <li className='sidebar__list'>
                            <div className="sidebar__list-logo__bottom">Contact Us</div>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar