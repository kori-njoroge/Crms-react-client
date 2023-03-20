import React, { useState } from 'react';


import logo from '../assets/logo.png'

export default function AddProduct({ setAddProd, setProducts }) {
    const[message, setMessage] = useState('')
    const [prodDetails, setProdDetails] = useState(
        {
            name: '',
            description: '',
            category: '',
            itmesNo: '',
            price: ''
        }
    )


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
        let arr = {
            id: 'AD54',
            status: 'Pending Approval',
            remainingPieces: prodDetails.itmesNo
        }
        let modified = Object.assign(prodDetails, arr)
        console.log(modified)
        setProducts(prevState => [...prevState, modified]);
        setMessage('Product added successfully')

    }

    // console.log(prodDetails)
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
                                required />
                            <label htmlFor="number">Number of items:</label>
                            <input
                                type="number"
                                name="itmesNo"
                                id="number"
                                value={prodDetails.itmesNo}
                                onChange={handleOnchange}
                                required />
                        </div>
                        <div className="">
                            <label htmlFor="category">Category:</label>
                            <select
                                name="category"
                                id="category"
                                value={prodDetails.category}
                                onChange={handleOnchange}
                                required>
                                <option value="electronics">Electronics</option>
                                <option value="men's clothes">Men's clothes</option>
                                <option value="women's clothes">Women's clothes</option>
                                <option value="shoes">Shoes</option>
                            </select>
                            <label htmlFor="price">Price per item:</label>
                            <input
                                type="number"
                                name="price"
                                id="price"
                                value={prodDetails.price}
                                onChange={handleOnchange}
                                required />
                        </div>
                    </div>
                    {message && <p className={message === "Product added successfully"?  'valid validvalid' : "invalid validvalid"}>{message}</p>}
                    <div className='tt-area'>
                        <label htmlFor="description">Description:</label>
                        <textarea
                            name="description"
                            id="description"
                            value={prodDetails.description}
                            onChange={handleOnchange}
                        ></textarea> <br />
                    </div>
                    
                    {message ==="Product added successfully"? <button type='button' onClick={()=>{setAddProd(false)}}>Exit</button> :<button>Add Product</button> }
                </form>
            </div>
        </div>
    )
}
