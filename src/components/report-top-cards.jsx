import React from 'react'

export default function ReportsTopCards() {
    return (
        <div className='summary-cards'>
            <div className="sum-card">
                <h4>This week</h4>
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
            </div>
            <div className="sum-card">
                <h4>Deviation from last week</h4>
                <div className="sum-cards-flex">
                    <div className="card-info1">
                        <p>Last week:</p>
                        <p>This week:</p>
                    </div>
                    <div className="card-info1">
                        <p>1800</p>
                        <p>100</p>
                        <hr className='hrhr' />
                        <p style={{ color: 'red' }}>-1700</p>
                    </div>
                </div>
            </div>

            {/* customer stats */}
            <div className="sum-card">
                <h4>This week top Customers</h4>
                <div className="sum-cards-flex">
                    <div className="card-info customer-stats">
                        <h5>Name</h5>
                        <p>Rick Sanchez:</p>
                        <p>Rick Sanchez:</p>
                        <p>Rick Sanchez:</p>
                    </div>
                    <div className="card-info customer-stats">
                        <h5>Points</h5>
                        <p>100</p>
                        <p>100</p>
                        <p>100</p>
                    </div>
                </div>
            </div>
            <div className="sum-card">
                <h4>All time top Customers</h4>
                <div className="sum-cards-flex">
                    <div className="card-info customer-stats">
                        <h5>Name</h5>
                        <p>Rick Sanchez:</p>
                        <p>Rick Sanchez:</p>
                        <p>Rick Sanchez:</p>
                    </div>
                    <div className="card-info customer-stats">
                        <h5>Points</h5>
                        <p>100</p>
                        <p>100</p>
                        <p>100</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
