import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import './LineGraph.scss';
import axios from 'axios';

const LineChartWithCurves = () => {
    const [data, setData] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState('0');

    useEffect(() => {
        axios.get('./chartdata.json').then((res) => {
            setData(res.data[parseInt(selectedMonth)]);
        });
    }, [selectedMonth]);

    const yTicks = [0, 100, 200, 300, 400, 500];

    return (
        <div className="linegraph">
            <div className="linegraph__text">
                <span className="linegraph__title">Activities</span>
                <div className="linegraph__daterange">
                    <label htmlFor='graphdates'></label>
                    <select name="graphdates" id="graphdates" style={{ border: '0' }} onChange={(e) => setSelectedMonth(e.target.value)}>
                        <option value="0">May - June 2021</option>
                        <option value="1">June - July 2021</option>
                        <option value="2">July - Aug 2021</option>
                        <option value="3">Aug - Sep 2021</option>
                    </select>
                </div>
            </div>
            <div className="linegraph__container">
                <ResponsiveContainer width='100%' height={200}>
                    <BarChart width={900} height={200} data={data}>
                        <Legend iconType="circle" wrapperStyle={{ top: '-20px', left: 0 }} className='linegraph__legend' />
                        <XAxis axisLine={false} dataKey="name" />
                        <YAxis axisLine={false} type="number" tickLine ticks={yTicks} />
                        {yTicks.map((tick, index) => (
                            <ReferenceLine key={index} y={tick} stroke="#858585" strokeOpacity={0.2} />
                        ))}
                        <Tooltip />
                        <Bar dataKey="Guest" fill="#E9A0A0" />
                        <Bar dataKey="User" fill="#9BDD7C" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default LineChartWithCurves;
