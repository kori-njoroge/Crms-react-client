import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import '../styles/navbar.css'
import logo from '../assets/logo.png'
import member from '../assets/rick.png'

export default function Navbar() {
    const [user, setUser] = useState()
    const navigate = useNavigate()
    const [chevDown, setChevDown] = useState(false);
    useEffect(() => {
        let user = JSON.parse(window.localStorage.getItem('user'))
        setUser(user)
    }, []);

    useEffect(() => {
        function handleEscapeKeyPress(event) {
            if (event.key === 'Escape') {
                setChevDown(false);
            }
        }
        document.addEventListener('keydown', handleEscapeKeyPress);
        return () => {
            document.removeEventListener('keydown', handleEscapeKeyPress);
        };
    }, []);


    return (
        <div className='navbar'>
            <div className="nav-left">
                <img src={logo} alt="company logo" />
                <h1>crms</h1>
            </div>
            <div className="nav-right">
                <i className="fa-solid fa-bell"></i>
                <img src={member} alt="member logo" />
                <div className="name-title">
                    <h5>{user?.username}</h5>
                    <h6>{user?.title}</h6>
                </div>
                {chevDown ?
                    <i className="fa-solid fa-chevron-right"
                        onClick={() => { setChevDown(false) }}></i>
                    :
                    <i className="fa-solid fa-chevron-down"
                        onClick={() => { setChevDown(true) }} ></i>
                }

                {chevDown &&
                    (<div className='dropDown' >
                        <Link to={''}><p><i className="fa-solid fa-gear"></i> Settings</p></Link>
                        <hr />
                        <p onClick={() => {
                            window.localStorage.setItem('login', false)
                            setTimeout(() => {
                                navigate('/')
                            }, 500);
                        }}><i className="fa-solid fa-right-from-bracket"></i> Logout</p>
                    </div>)
                }

            </div>
        </div>
    )
}
