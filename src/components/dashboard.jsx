import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';



import '../styles/dashboard.css'
import Category from './category-reports';
import DashCards from './dash-cards';


export default function Dashboard() {
    const navigate = useNavigate();
    const [user, setUser] = useState({})


    useEffect(() => {
        let user = JSON.parse(window.localStorage.getItem('user'));
        setUser(user)
    }, [])


    return (
        <>
            <div className='dasboard-main'>
                <div className="user-card">
                    <p>Welcome</p>
                    <p>{user?.fullname}!</p>
                    <small>{user?.title}</small>
                </div>
                <div className="dashboard-links">
                    <button onClick={()=>{navigate('/admindashboard/users')}}> Add user&nbsp; <i className="fa-solid fa-user-plus"></i></button>
                    <button onClick={()=>{navigate('/admindashboard/sales')}}>Make Sale&nbsp; <i className="fa-solid fa-plus"></i></button>
                    <button onClick={()=>{navigate('/admindashboard/users')}}>Users&nbsp; <i className="fa-solid fa-users"></i></button>
                    <button onClick={()=>{navigate('/admindashboard/products')}}>Add Product&nbsp; <i className="fa-solid fa-plus"></i> </button>
                    <button onClick={()=>{navigate('/admindashboard/account')}}>My Account &nbsp; <i className="fa-solid fa-user-gear"></i></button>
                </div>
                <div className="div-stats-dash">
                    <DashCards />
                    <div className="catcat-graph">
                        <Category />
                    </div>
                </div>
            </div>
        </>
    )
}
