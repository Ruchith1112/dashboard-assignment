import React, { useEffect, useState } from 'react'
import './SummaryContainer.scss'
import ColoredCard from '../ColoredCard/ColoredCard'
import { ReactComponent as Revenue } from './../../assets/images/revenue.svg'
import { ReactComponent as TotalTransactions } from './../../assets/images/totalTransactions.svg'
import { ReactComponent as Likes } from './../../assets/images/thumbsUp.svg'
import { ReactComponent as Users } from './../../assets/images/totalUsers.svg'
import axios from 'axios'
const SummaryContainer = () => {

    const summaryData = [
        // default values before api call
        {
            icon: <Revenue />,
            title: 'Total Revenue',
            value: '$2,129,430',
            color: '#FFFFFF',
            pad:'7px',
            radius:'50%',
            back:'pink'
            
        },
        {
            icon: <TotalTransactions />,
            title: 'Transactions',
            value: '1,520',
            color: '#FFFFFF'
        },
        {
            icon: <Likes />,
            title: 'Total Likes',
            value: '9,721',
            color: '#FFFFFF'
        },
        {
            icon: <Users />,
            title: 'Total users',
            value: '892',
            color: '#FFFFFF'
        }
    ]
    const [data, setData] = useState(summaryData);
    useEffect(
        () => {
            axios.get('http://www.randomnumberapi.com/api/v1.0/random?min=1000&max=10000&count=4').then(
                (res) => {
                    console.log(res.data);
                    let tempArray = data;
                    tempArray = tempArray.map(
                        (value, index) => {
                            if (index === 0)
                                value.value = '$' + res.data[index];
                            else
                                value.value = res.data[index];
                            return value;
                        }
                    )
                    setData(tempArray)
                }
            )
            // eslint-disable-next-line
        }, []
    )

    return (
        <div className='summary'>
            {
                data.map(
                    (item, index) => {
                        return <ColoredCard {...item} key={index} />
                    }
                )
            }
        </div>
    )
}

export default SummaryContainer