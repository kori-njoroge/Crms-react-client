import axios from 'axios';
import React, { useEffect, useState } from 'react';


import logo from '../assets/logo.png'
import { apiproducts } from './api-links';

export default function AddCategory({ setAddCategory }) {
    const [loading, setLoading] = useState(false)
    let token = window.localStorage.getItem('token')
    let user = JSON.parse(window.localStorage.getItem('user'))
    const [message, setMessage] = useState('')
    const [catDetails, setcatDetails] = useState(
        {
            categoryName: '',
            description: '',
            addedBy: user?.id
        }
    )



    function handleOnchange(event) {
        const { name, value } = event.target;
        setcatDetails(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true)
        axios.post(`${apiproducts}/category/add`, {
            "role": user?.role,
            "categoryName": catDetails.name,
            "description": catDetails.description,
            "addedBy": user?.id,
            "token": token
        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'Application/json'
            }
        }).then(reply => {
            console.log(reply)
            setMessage(reply.data.message)
            setLoading(false)
            setcatDetails({
                categoryName: '',
                description: '',
            })
        }).catch(err => {
            setLoading(false)
            setMessage(err.response.data.message)
        })

    }


    useEffect(() => {
        function handleKeyDown(event) {
            if (event.keyCode === 27) {
                setAddCategory(false);
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [setAddCategory]);
    function handleOnfocus() {
        setMessage('')
    }
    return (
        <div className='modal'>
            <div className="info-container">
                <img src={logo} alt="company logo" />
                <i className="fa-solid fa-x" onClick={() => { setAddCategory(false) }}></i>
                <h5>Enter product details</h5>
                <form className='userdet-form prod-det-form' onSubmit={handleSubmit} >
                    <div className="div">
                        <div className="">
                            <label htmlFor="name">Category name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={catDetails.name}
                                onChange={handleOnchange}
                                onFocus={handleOnfocus}
                                required />
                        </div>

                    </div>
                    {message && <p className={message?.toLowerCase().includes('successfully') ? 'valid validvalid' : "invalid validvalid"}>{message}</p>}
                    <div className='tt-area'>
                        <label htmlFor="description">Description:</label>
                        <textarea
                            name="description"
                            id="description"
                            value={catDetails.description}
                            onChange={handleOnchange}
                            onFocus={handleOnfocus}
                            required
                        ></textarea> <br />
                    </div>
                    {loading ? <div className='donut-wrapper donut-users'>
                        <div className='donut-product multi'></div>
                    </div>
                        : ""}
                    {message?.toLowerCase().includes('successfully') ? <button type='button' onClick={() => { setAddCategory(false) }}>Exit</button> : <button>Add Category</button>}
                </form>
            </div>
        </div>
    )
}
