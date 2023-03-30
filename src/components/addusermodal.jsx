import axios from 'axios';
import React, { useState, useEffect } from 'react'

import logo from '../assets/logo.png'
import { apiusers } from './api-links';

export default function AddUserModal({ setAdduser, user }) {
    const token = window.localStorage.getItem('token')
    const [loading, setLoading] = useState(!true)
    const [message, setMessage] = useState('');
    const [userDetails, setUserDetails] = useState(
        {
            fullName: "",
            phone: "",
            email: "",
            gender: "",
            title: 'customer'
        }
    )

    function handleOnchange(event) {
        event.preventDefault()
        console.log(event)
        const { name, value, type } = event.target;
        setUserDetails(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? event.target.checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true)
        axios.post(`${apiusers}/signup`,
            {
                "fullName": userDetails.fullName,
                "phone": userDetails.phone,
                "email": userDetails.email,
                "gender": userDetails.gender,
                "role": userDetails.title,
                "token": token
            }).then(reply => {
                setMessage(reply.data.message)
                setLoading(false)
                setUserDetails(
                    {
                        fullName: "",
                        phone: "",
                        email: "",
                        gender: ""
                    })
            }).catch(err => {
                setLoading(false)
                console.log(err.response)
            })

    }

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.keyCode === 27) {
                setAdduser(false);
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [setAdduser]);

    function handleOnFocus(){
        setMessage('')
    }
console.log(userDetails)

    return (
        <div className='modal'>
            <div className="info-container" >
                <img src={logo} alt="company logo" />
                <h5>Enter user details</h5>
                {message && <p className={message=== 'User created succesfully'? 'valid':'invalid'}>{message}</p>}
                <i className="fa-solid fa-x" onClick={() => { setAdduser(false) }}></i>
                <form className='userdet-form' onSubmit={handleSubmit} >
                    <div className="div">
                        <div className="">
                            <label htmlFor="name">Full Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="fullName"
                                value={userDetails.fullName}
                                onChange={handleOnchange}
                                placeholder="Jane Doe"
                                onFocus={handleOnFocus}
                                required />
                            <label htmlFor="number">Phone Number:</label>
                            <input
                                type="tel"
                                name="phone"
                                id="number"
                                value={userDetails.number}
                                onChange={handleOnchange}
                                placeholder='254706306415'
                                onFocus={handleOnFocus}
                                required />
                            <div className="gender" style={{ display: 'flex', fontSize: '13px', textAlign: 'left', marginTop: '1.5vh' }}>
                                Gender:
                                <input onChange={handleOnchange} type="radio" name="gender" value='male' id="" required/>Male
                                <input onChange={handleOnchange} type="radio" name="gender" value='female' id="" required/>Female
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={userDetails.email}
                                onChange={handleOnchange}
                                placeholder="janedoe@example.com"
                                onFocus={handleOnFocus}
                                required />
                            <label htmlFor="title">Title:</label>
                            <select
                                name="title"
                                id="title"
                                value={user?.role?.toLowerCase() === 'staff' ? 'customer' : userDetails.title}
                                onChange={handleOnchange}
                                onFocus={handleOnFocus}
                                required>
                                <option value="customer">Customer</option>
                                {user?.role?.toLowerCase() !== 'staff' &&
                                    <>
                                        <option value="staff">Staff</option>
                                        <option value="admin">Admin</option>
                                        <option value="super admin">Super admin</option>
                                    </>
                                }
                            </select>
                        </div>
                    </div>
                    {loading ? <div className='donut-wrapper donut-users'>
                        <div className='donut-product multi'></div>
                    </div>
                        : ""}
                    {message=== 'User created succesfully' ? <button type='button' onClick={() => { setAdduser(false) }}>Exit</button> : <button>Add User</button>}
                </form>
            </div>
        </div>
    )
}
