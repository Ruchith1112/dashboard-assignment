import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const PieRechartComponent = () => {
    const COLORS = ["#98D89E", "#EE8484", "#F6DC7D"];
    const pieData = [
        {
            name: "Basic Tees",
            value: 55
        },
        {
            name: "Custom Short Pants",
            value: 31
        },
        {
            name: "Super Hoodies",
            value: 14
        },
    ];
    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div
                    className="custom-tooltip"
                    style={{
                        backgroundColor: "#ffff",
                        padding: "5px",
                        border: "1px solid #cccc"
                    }}
                >
                    <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
                </div>
            );
        }
        return null;
    };

    const innerRadius = 60; // Adjust the inner radius as needed
    const outerRadius = 80; // Adjust the outer radius as needed

    return (
        <div className="bottom_card">
            <div className="card__title card__title--flex">
                <div className="card__title__left">
                    Top products
                </div>
                <div className="linegraph__daterange card__title__right">
                    <label htmlFor='top-products'></label>
                    <select name="top-products" id="top-products" style={{ border: '0' }} onChange={(e) => console.log(e.target.value)}>
                        <option value="0" >May - June 2021</option>
                        <option value="1" >June - July 2021</option>
                        <option value="2" >July - Aug 2021</option>
                        <option value="3" >Aug - Sep 2021</option>
                    </select>
                </div>
            </div>
            <div className="responsive-container">
                <ResponsiveContainer>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <PieChart width={330} height={160}>
                            <Pie
                                data={pieData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={outerRadius}
                                innerRadius={innerRadius}
                                fill="#8884d8"
                                labelLine={false}
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <Tooltip content={CustomTooltip} />
                            <Legend
                                align="left"
                                verticalAlign="middle"
                                iconType="circle"
                                wrapperStyle={{ display: "flex", flexDirection: "row" }}
                            />
                            {pieData.map((entry, index) => (
                                <div key={`legend-${index}`} style={{ display: "flex", alignItems: "center", marginTop: `${index === 0 ? '-10px' : '15px'}`, marginLeft: '-25px' }}>
                                    <div
                                        style={{
                                            backgroundColor: COLORS[index % COLORS.length],
                                            width: "16px",
                                            height: "16px",
                                            borderRadius: "50%",
                                            marginRight: "4px"
                                        }}
                                    />
                                    <div><span className="legend__entry">{entry.name} </span>
                                        <div>{entry.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default PieRechartComponent;

