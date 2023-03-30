import React from 'react'

export default function DashCards({ count, topCust }) {
    return (
        <div className='dashhcards summarycards '>
            <div className="sum-card sum-card-dash1">
                <i className="fa-solid fa-sleigh"></i>
                <h4>Total sales this week</h4> <br />
                {count?.length && <p>{count[2]?.TableCount}</p>}
            </div>
            <div className="sum-card">
                <div className="sum-card">
                    <div className="sum-card sum-card-dash1">
                        <i className="fa-solid fa-users"></i>
                        <h4> Total Users</h4> <br />
                        {count?.length && <p>{count[0]?.TableCount}</p>}
                    </div>
                </div>
            </div>
            <div className="sum-card">
                <div className="sum-card sum-card-dash1">
                    <i className="fa-solid fa-users"></i>
                    <h4> Total Customers</h4> <br />
                    {count?.length && <p>{count[1]?.TableCount}</p>}
                </div>
            </div>
            <div className="sum-card">
                <h4>Top Customers</h4>
                <div className="sum-cards-flex">
                    <div className="card-info customer-stats">
                        <h5>Name</h5>
                        {topCust &&
                            <>
                                <p>{topCust[0]?.full_name}:</p>
                                <p>{topCust[1]?.full_name}:</p>
                                <p>{topCust[2]?.full_name}:</p>
                            </>
                        }
                    </div>
                    <div className="card-info customer-stats">
                        <h5>Points</h5>
                        {topCust &&
                            <>
                                <p>{topCust[0]?.loyalty_points}</p>
                                <p>{topCust[1]?.loyalty_points}</p>
                                <p>{topCust[2]?.loyalty_points}</p>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
