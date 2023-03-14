import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import '../styles/admin-dashboard.css'

export default function Admindashboard() {
    const navigate = useNavigate()
    return (
        <div className='admin-dashboard'>
            <div className="navnav">
                <Navbar />
            </div>
            <button
                onClick={() => { navigate(-1) }}
                className="back-btn"
            >
                <i className="fa-solid fa-chevron-left"></i>
                &nbsp; Back
            </button>
            <br />
            <div className="dashboard-body">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="outlet">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
