import React from 'react'
import { NavLink } from 'react-router-dom'


import '../styles/sidebar.css'


export default function Sidebar() {



    return (
        <div className='sidebar'>
            <h1>Menu</h1>
            <div className="sidebar-links">
                <hr />
                <NavLink to={'sales'} ><h4> <i className="fa-solid fa-sleigh"></i>Sales</h4></NavLink>
                <hr />
                <NavLink to={'products'}><h4> <i className="fas fa-tag"></i>Products</h4></NavLink>
                <hr />
                <NavLink to={'users'}><h4><i className="fa-solid fa-users"></i>Users</h4></NavLink>
                <hr />
                <NavLink to={'reports'}><h4> <i className="fa-solid fa-chart-line"></i>Reports</h4></NavLink>
                <hr />
                <NavLink to={'account'}><h4><i className="fa-solid fa-user-gear"></i>Account</h4></NavLink>
                <hr />
            </div>
        </div>
    )
}
