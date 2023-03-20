import React from 'react'
import { Line } from 'react-chartjs-2'

import { data, options } from './testData/lineCharttest'


export default function Category() {
    data.datasets[0].fill = 'origin';





    return (
        <div className='category-rep'>
            <h4>Category Reports</h4>
            <Line data={data} options={options} />
        </div>
    )
}
