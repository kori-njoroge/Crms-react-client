import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


import '../styles/sidebar.css'


export default function Sidebar() {
    const [user, setUser] = useState('')
    useEffect(() => {
        let user = JSON.parse(window.localStorage.getItem('user'));
        setUser(user);
    }, [])
    console.log(user)



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
                {(user.title === 'super Admin' || user.title === 'Admin') ?
                    <>
                        <NavLink to={'reports'}><h4> <i className="fa-solid fa-chart-line"></i>Reports</h4></NavLink>
                        <hr />
                    </>
                    : ''
                }
                <NavLink to={'account'}><h4><i className="fa-solid fa-user-gear"></i>Account</h4></NavLink>
                <hr />
            </div>
        </div>
    )
}
