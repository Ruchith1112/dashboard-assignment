import React from 'react'
import Header from '../../components/Header/Header'
import './Dashboard.scss'
import SummaryContainer from '../../components/SummaryContainer/SummaryContainer'
import LineGraph from '../../components/LineGraph/LineGraph'
import BottomCards from '../../components/BottomCards/BottomCards'
const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard__header">
                <Header />
            </div>
            <div className="dashboard__summaries">
                <SummaryContainer />
            </div>
            <div className="dashboard__linegraph">
                <LineGraph />
            </div>
            <div className="dashboard__bottomcards">
                <BottomCards />
            </div>
        </div>
    )
}

export default Dashboard