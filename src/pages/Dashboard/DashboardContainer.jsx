import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Dashboard from './Dashboard'
import { useNavigate } from 'react-router-dom'
import Login from '../Login/Login'

const DashboardContainer = () => {
    const navigate = useNavigate()
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(
        () => {
            try {
                const token = localStorage.getItem('access_token');
                
                if (token === '123456')
                    setLoggedIn(true);
                else
                if(window.confirm('Please Login')) navigate('/login');
                // Above line should be dynamically set by verifying token with api
            }
            catch {
                if(window.confirm('Please Login'))
                navigate('/login');

            }
        }, []
    )

    return (
        <>{
            loggedIn ?
            <>
                <div className='home__dashboard'> <Sidebar /> </div>
                <div className="home__content"> <Dashboard /> </div>
            </>:
            <Login/>
        }
        </>
    )
}

export default DashboardContainer