import React, { useState, useEffect } from 'react'

import logo from '../assets/logo.png'

export default function AddUserModal({ setAdduser, setMembers }) {
    const [userDetails, setUserDetails] = useState(
        {
            fullname: "",
            phonenumber: "",
            email: "",
            title: ""
        }
    )

    function handleOnchange(event) {
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
        console.log(userDetails)
        setMembers(prevState => [...prevState, userDetails])
        setUserDetails(
            {
                fullname: "",
                phonenumber: "",
                email: "",
                title: ""
            }
        )
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

    return (
        <div className='modal'>
            <div className="info-container" >
                <img src={logo} alt="company logo" />
                <h5>Enter user details</h5>
                <p className='valid'>User added successfully</p>
                <i className="fa-solid fa-x" onClick={() => { setAdduser(false) }}></i>
                <form className='userdet-form' onSubmit={handleSubmit} >
                    <div className="div">
                        <div className="">
                            <label htmlFor="name">Full Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="fullname"
                                value={userDetails.fullname}
                                onChange={handleOnchange}
                                placeholder="Jane Doe"
                                required />
                            <label htmlFor="number">Phone Number:</label>
                            <input
                                type="tel"
                                name="phonenumber"
                                id="number"
                                value={userDetails.phonenumber}
                                onChange={handleOnchange}
                                placeholder='254706306415'
                                required />
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
                                required />
                            <label htmlFor="title">Title:</label>
                            <select
                                name="title"
                                id="title"
                                value={userDetails.title}
                                onChange={handleOnchange}
                                required>
                                <option value="customer">Customer</option>
                                <option value="staff">Staff</option>
                                <option value="admin">Admin</option>
                                <option value="super admin">Super admin</option>
                            </select>
                        </div>
                    </div>
                    <button>Add User</button>
                </form>
            </div>
        </div>
    )
}
