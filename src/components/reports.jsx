import React, { useState } from 'react'
import { Line, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';

import '../styles/reports.css'
import { data, options, donutData } from './testData/lineCharttest';
import Category from './category-reports';
import ReportsTopCards from './report-top-cards';


ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function Reports() {
    const [period, setPeriod] = useState({
        period1: '',
        period2: '',
        period3: ''
    })
    // const [formDate, setformDate] = useState(
    //     {
    //         from: '',
    //         to: '',

    //     }
    // );

    function handleOnChange(event) {
        const { name, value } = event.target;
        setPeriod(prevState => {
            return {
                ...period,
                [name]: value
            }
        })
    }

    return (
        <>
            <p style={{ marginTop: '0' }}>Reports</p>
            
                <ReportsTopCards />

            <hr className='hrreport' />
            <div className="visuals">
                <div className="visuals-card">
                    <div className="visual-head">
                        <p>Summary</p>
                        <select name="period1" id="period" value={period} onChange={handleOnChange}>
                            <option value="This week">This week</option>
                            <option value="This month">This Month</option>
                            <option value="Quater year">Quater year</option>
                            <option value="Half year">Half year</option>
                            <option value="">This Year</option>
                            <option value="Custom Period">Custom Period</option>
                        </select>
                    </div>
                    {period.period1 === 'Custom Period' && <form className="customPeriod">
                        <label htmlFor="from">From:</label>
                        <input type="date" name="from" id="" required />
                        <label htmlFor="to">&nbsp;To:</label>
                        <input type="date" name="to" id="to" required />
                        <br />
                        <button>Send</button>
                    </form>}
                    <hr className='hrreport' />


                    <div className="sum-cards-flex">
                        <div className="card-info1">
                            <p>Total Sales:</p>
                            <p>Amount:</p>
                        </div>
                        <div className="card-info1">
                            <p>1400</p>
                            <p style={{ color: '#20DF7F' }}>3000</p>
                        </div>
                    </div>
                    <hr className='hrreport' />

                    <div className="sum-cards-flex">
                        <div className="card-info1">
                            <p>New customers:</p>
                            <p>Purchases by new:</p>
                            <p>Amount:</p>
                        </div>
                        <div className="card-info1">
                            <p>140</p>
                            <p >300</p>
                            <p >700</p>
                        </div>
                    </div>

                </div>
                {/* card 2 */}
                <div className="visuals-card">
                    <div className="visual-head">
                        <p>Sales summary</p>
                        <select name="period2" id="period" value={period} onChange={handleOnChange}>
                            <option value="This week">This week</option>
                            <option value="This month">This Month</option>
                            <option value="Quater year">Quater year</option>
                            <option value="Half year">Half year</option>
                            <option value="">This Year</option>
                            <option value="Custom Period">Custom Period</option>
                        </select>
                    </div>
                    {period.period2 === 'Custom Period' && <form className="customPeriod">
                        <label htmlFor="from">From:</label>
                        <input type="date" name="from" id="" required />
                        <label htmlFor="to">&nbsp;To:</label>
                        <input type="date" name="to" id="to" required />
                        <br />
                        <button>Send</button>
                    </form>}
                    <hr className='hrreport' />
                    <div className="lineline-card">
                        <Line className='lineline-card' data={data} options={options} />
                    </div>

                </div>
                <div className="visuals-card">
                    <div className="visual-head">
                        <p>Customer summary</p>
                        <select name="period3" id="period" value={period} onChange={handleOnChange}>
                            <option value="This week">This week</option>
                            <option value="This month">This Month</option>
                            <option value="Quater year">Quater year</option>
                            <option value="Half year">Half year</option>
                            <option value="">This Year</option>
                            <option value="Custom Period">Custom Period</option>
                        </select>
                    </div>
                    {period.period3 === 'Custom Period' && <form className="customPeriod">
                        <label htmlFor="from">From:</label>
                        <input type="date" name="from" id="" required />
                        <label htmlFor="to">&nbsp;To:</label>
                        <input type="date" name="to" id="to" required />
                        <br />
                        <button>Send</button>
                    </form>}
                    <hr className='hrreport' />
                    <Doughnut data={donutData} />
                </div>
            </div>
            <hr className='hrreport' />
            <div className="cat-reports">
                <Category />
            </div>
        </>
    )
}
