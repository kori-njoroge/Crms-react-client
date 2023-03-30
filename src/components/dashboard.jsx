import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';



import '../styles/dashboard.css'
import { apiproducts } from './api-links';
import Category from './category-reports';
import DashCards from './dash-cards';


export default function Dashboard() {
    // const [token, setToken] = useState('')
    const [topCust, setTopCust] = useState()
    const [count, setCount] = useState()
    const navigate = useNavigate();
    const [user, setUser] = useState({})

    useEffect(() => {
        let tok = window.localStorage.getItem('token')
        let user = JSON.parse(window.localStorage.getItem('user'));
        // setToken(tok)
        setUser(user)
    }, [])
    useEffect(() => {
        let tok = window.localStorage.getItem('token')
        axios.get(`${apiproducts}/reports/count`,
            {
                headers: {
                    Authorization: `Bearer ${tok}`
                }
            }).then(reply => {
                let array = [...reply?.data[0], ...reply?.data[1], ...reply?.data[2], ...reply?.data[3], ...reply?.data[4]]
                setCount(array)
            }).catch(err => {
                console.log(err)
            })

        axios.get(`${apiproducts}/reports/top-customers`,
            {
                headers: {
                    Authorization: `Bearer ${tok}`
                }
            }).then(reply => {
                console.log(reply.data)
                setTopCust(reply.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <>
            <div className='dasboard-main'>
                <div className="user-card">
                    <p>Welcome</p>
                    <p>{user?.full_name}!</p>
                    <small>{user?.role}</small>
                </div>
                <div className="dashboard-links">
                    <button onClick={() => { navigate('/admin/users') }}> Add user&nbsp; <i className="fa-solid fa-user-plus"></i></button>
                    <button onClick={() => { navigate('/admin/sales') }}>Make Sale&nbsp; <i className="fa-solid fa-plus"></i></button>
                    <button onClick={() => { navigate('/admin/users') }}>Users&nbsp; <i className="fa-solid fa-users"></i></button>
                    <button onClick={() => { navigate('/admin/products') }}>Add Product&nbsp; <i className="fa-solid fa-plus"></i> </button>
                    <button onClick={() => { navigate('/admin/account') }}>My Account &nbsp; <i className="fa-solid fa-user-gear"></i></button>
                </div>
                <div className="div-stats-dash">
                    <DashCards
                        count={count}
                        topCust={topCust}
                    />
                    <div className="catcat-graph">
                        <Category />
                    </div>
                </div>
            </div>
        </>
    )
}
