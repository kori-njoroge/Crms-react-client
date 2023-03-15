import React from 'react'
import { Link } from 'react-router-dom'


import '../styles/sidebar.css'


export default function Sidebar() {


    return (
        <div className='sidebar'>
            <h1>Menu</h1>
            <div className="sidebar-links">
                <hr />
                <Link to={'sales'} >
                    <h4> <i className="fa-solid fa-sleigh"></i>Sales</h4>
                </Link>
                <hr />
                <Link>
                    <h4> <i className="fas fa-tag"></i>Products</h4>
                </Link>
                <hr />
                <Link to={'users'}>
                    <h4><i className="fa-solid fa-users"></i>Users</h4>
                </Link>
                <hr />
                <Link>
                    <h4> <i className="fa-solid fa-chart-line"></i>Reports</h4>
                </Link>
                <hr />
                <Link>
                    <h4><i className="fa-solid fa-user-gear"></i>Account</h4>
                </Link>
                <hr />
            </div>
        </div>
    )
}
