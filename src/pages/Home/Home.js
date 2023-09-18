import React from 'react'
import './Home.scss'
import Login from '../Login/Login'
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';
import DashboardContainer from '../Dashboard/DashboardContainer'
const Home = () => {
    return (
        <div className="home">
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/' element={<Login />} />
                    <Route path='/dashboard' element={<DashboardContainer/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Home