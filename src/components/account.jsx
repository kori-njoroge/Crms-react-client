import React, { useEffect, useState } from 'react';
import '../styles/account.css'

import rick from '../assets/rick.png'
import axios from 'axios';
import { apiusers } from './api-links';

export default function Account() {
    const [token, setToken] = useState('')
    const [message, setMessage] = useState('')
    const [update, setUpdate] = useState(!false);
    const [user, setUser] = useState()
    const [selection, setSelection] = useState(
        {
            password: true,
            phone: false,
            email: false
        }
    )
    const [newData, setNewData] = useState(
        {
            phone: '',
            email: '',
            password: '',
            conPass: ''
        }
    )

    function switchDetails(value) {
        setSelection(prevState => ({
            password: value === 'password' ? true : false,
            phone: value === 'phone' ? true : false,
            email: value === 'email' ? true : false
        }))
    }

    useEffect(() => {
        let user = JSON.parse(window.localStorage.getItem('user'))
        let tok = window.localStorage.getItem('token')
        setToken(tok)
        setUser(user)
    }, []);

    function handleOnchange(event) {
        const { name, value } = event.target;
        setNewData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }
    function handleOnfocus() {
        setMessage('')
    }

    function handleSubmit() {
        if (newData.phone?.length) {
            axios.patch(`${apiusers}/update-user`,
                {
                    id: user?.id,
                    phone: newData.phone,
                },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'Application/json'
                    }
                }).then(reply => {
                    console.log(reply.data.message)
                    setMessage(reply.data.message)
                    setNewData(
                        {
                            phone: '',
                            email: '',
                            password: '',
                            conPass: ''
                        }
                    )
                }).catch(error => {
                    console.log(error.response.data.message)
                    setMessage(error.response.data.message)
                })
        }
        else if (newData.email?.length) {
            axios.patch(`${apiusers}/update-user`,
                {
                    id: user?.id,
                    email: newData.email,
                },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'Application/json'
                    }
                }).then(reply => {
                    console.log(reply.data.message)
                    setMessage(reply.data.message)
                    setNewData(
                        {
                            phone: '',
                            email: '',
                            password: '',
                            conPass: ''
                        }
                    )
                }).catch(error => {
                    console.log(error.response.data.message)
                    setMessage(error.response.data.message)
                })
        }
        else if (newData.password?.length) {
            console.log("first")
            if (newData.password === newData.conPass) {
                console.log('here misteakently')
                axios.patch(`${apiusers}/update-user`,
                    {
                        id: user?.id,
                        password: newData.password,
                    },
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'Application/json'
                        }
                    }).then(reply => {
                        console.log(reply.data.message)
                        setMessage(reply.data.message)
                        setNewData(
                            {
                                phone: '',
                                email: '',
                                password: '',
                                conPass: ''
                            }
                        )
                    }).catch(error => {
                        console.log(error.response.data.message)
                        setMessage(error.response.data.message)
                    })
            } else {
                console.log("here we are")
                setMessage('Passwords do not match')
            }
        } else {
            setMessage('No data to update')
        }
    }
    console.log(newData)
    return (
        <div className='account-page'>
            <img src={rick} alt="member logo" />
            <div className="the-page">
                <div className="user-detailss">
                    <div className="det-left">
                        Name: <br />
                        <p>{user?.full_name}</p>
                        Email:
                        <p>{user?.email}</p>
                        Phone Number:
                        <p>{user?.phone}</p>
                    </div>
                    <div className="det-right">
                        Title:
                        <p>{user?.role}</p>
                        Joined At:
                        <p>{(user?.joined_at)?.split('T')[0]}</p>
                        Password:
                        <p>******</p>
                    </div>
                </div>
                {
                    update &&
                    <div className="edit-details" >
                        <div >
                            <p className={selection.password && 'selected'} onClick={() => { switchDetails(`password`) }}>Password</p>
                            <p className={selection.phone && 'selected'} onClick={() => { switchDetails(`phone`) }}>Phone</p>
                            <p className={selection.email && 'selected'} onClick={() => { switchDetails(`email`) }}>Email</p>

                        </div>
                        <hr className='hrhr hr-update-det' />
                        {selection.password &&
                            <div className="password-edit">
                                <label htmlFor="password">New Password:</label>
                                <input
                                    onFocus={handleOnfocus}
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={newData.password}
                                    onChange={handleOnchange} />
                                <label htmlFor="conpassword">Confirm Password:</label>
                                <input
                                    onFocus={handleOnfocus}
                                    type="password"
                                    name="conPass"
                                    id="conpassword"
                                    value={newData.conPass}
                                    onChange={handleOnchange} />
                            </div>}

                        {selection.phone &&
                            <div className="password-edit">
                                <label htmlFor="password">New Phone number:</label>
                                <input
                                    onFocus={handleOnfocus}
                                    type="tel"
                                    name="phone"
                                    value={newData.phone}
                                    id="password" maxLength={12}
                                    onChange={handleOnchange} />
                            </div>}

                        {selection.email &&
                            <div className="password-edit">
                                <label htmlFor="password">New Email:</label>
                                <input
                                    onFocus={handleOnfocus}
                                    type="tel"
                                    name="email"
                                    id="password"
                                    value={newData.email}
                                    onChange={handleOnchange} />
                            </div>}
                        <button onClick={handleSubmit}>Update Details</button>
                        <div style={{ position: 'relative' }}>
                            {message && <p className={message === 'User details updated successfully' ? 'edit-details-valid' : 'edit-details-invalid'}>{message}</p>}
                        </div>
                    </div>
                }

            </div>
            {
                update ?
                    <button className='update-details cancel-btn-details' onClick={() => { setUpdate(false) }}>Cancel</button>
                    :
                    <button className='update-details' onClick={() => { setUpdate(true) }}>Update Details</button>
            }

        </div>
    )
}
