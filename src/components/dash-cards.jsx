import React from 'react'

export default function DashCards() {
    return (
        <div className='dashhcards summarycards '>
            <div className="sum-card sum-card-dash1">
                <i className="fa-solid fa-sleigh"></i>
                <h4>Total sales this week</h4> <br />
                <p>500</p>
            </div>
            <div className="sum-card">
                <div className="sum-card sum-card-dash1">
                    <i className="fa-solid fa-users"></i>
                    <h4> Total Customers</h4> <br />
                    <p>1500</p>
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
