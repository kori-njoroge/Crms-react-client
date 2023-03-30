import axios from 'axios';
import React, { useEffect, useState } from 'react';


import logo from '../assets/logo.png'
import { apiproducts } from './api-links';

export default function AddProduct({ setAddProd }) {
    const [loading, setLoading] = useState(false)
    let token = window.localStorage.getItem('token')
    let user = JSON.parse(window.localStorage.getItem('user'))
    const [categories, setCategories] = useState([])
    const [message, setMessage] = useState('')
    const [prodDetails, setProdDetails] = useState(
        {
            name: '',
            description: '',
            category: '',
            itmesNo: '',
            price: '',
            role: user?.role,
            addedBy: user?.id
        }
    )
    useEffect(() => {
        async function getData() {
            await axios.get(`${apiproducts}/category/all-categories`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'Application/json'
                }
            }).then(reply => {
                setCategories(reply?.data)
            }).catch(err => {
                setMessage(err.response.data.message)
            })
        }
        getData()
    }, [])


    function handleOnchange(event) {
        const { name, value } = event.target;
        setProdDetails(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true)
        axios.post(`${apiproducts}/add`, {
            "role": user?.role,
            "productName": prodDetails.name,
            "description": prodDetails.description,
            "addedBy": user?.id,
            "price": prodDetails.price,
            "quantity": prodDetails.itmesNo,
            "categoryId": prodDetails.category,
            "token": token

        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'Application/json'
            }
        }).then(reply => {
            setMessage(reply.data.message)
            setLoading(false)
            setProdDetails({
                name: '',
                description: '',
                category: '',
                itmesNo: '',
                price: ''
            })
        }).catch(err => {
            setLoading(false)
            setMessage(err.response.data.message)
        })

    }


    useEffect(() => {
        function handleKeyDown(event) {
            if (event.keyCode === 27) {
                setAddProd(false);
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [setAddProd]);
    function handleOnfocus(){
        setMessage('')
    }
    return (
        <div className='modal'>
            <div className="info-container">
                <img src={logo} alt="company logo" />
                <i className="fa-solid fa-x" onClick={() => { setAddProd(false) }}></i>
                <h5>Enter product details</h5>
                <form className='userdet-form prod-det-form' onSubmit={handleSubmit} >
                    <div className="div">
                        <div className="">
                            <label htmlFor="name">Product name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={prodDetails.name}
                                onChange={handleOnchange}
                                onFocus={handleOnfocus}
                                required />
                            <label htmlFor="number">Number of items:</label>
                            <input
                                type="number"
                                name="itmesNo"
                                id="number"
                                value={prodDetails.itmesNo}
                                onChange={handleOnchange}
                                onFocus={handleOnfocus}
                                required />
                        </div>
                        <div className="">
                            <label htmlFor="category">Category:</label>
                            <select
                                name="category"
                                id="category"
                                value={prodDetails.category}
                                onChange={handleOnchange}
                                onFocus={handleOnfocus}
                                required
                            >
                                {categories &&
                                    categories.map((category, index) => (
                                        <option style={{ textTransform: 'capitalize !important' }} key={index} value={category.id}>{category.name}</option>
                                    ))}
                            </select>
                            <label htmlFor="price">Price per item:</label>
                            <input
                                type="number"
                                name="price"
                                id="price"
                                value={prodDetails.price}
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
                            value={prodDetails.description}
                            onChange={handleOnchange}
                            onFocus={handleOnfocus}
                        ></textarea> <br />
                    </div>
                    {loading ? <div className='donut-wrapper donut-users'>
                        <div className='donut-product multi'></div>
                    </div>
                        : ""}

                    {message === "Product added successfully" ? <button type='button' onClick={() => { setAddProd(false) }}>Exit</button> : <button>Add Product</button>}
                </form>
            </div>
        </div>
    )
}
