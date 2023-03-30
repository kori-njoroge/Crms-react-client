import React, { useState, useEffect } from 'react';
import axios from 'axios';


import '../styles/products.css'
import AddProduct from './add-product-modal';
import { apiproducts } from './api-links';
import TextWithReadMore from './textwithreadmore';
import AddCategory from './add-category-modal';

export default function Products() {
    const[addCategory,setAddCategory]= useState(false)
    const [loading, setLoading] = useState(true)
    const [addProd, setAddProd] = useState(false);
    const [prods, setProds] = useState([]);
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
    const [showPopUp, setShowPopUp] = useState(products?.map(() => false));


    useEffect(() => {
        let token = window.localStorage.getItem('token')
        console.log(token)
        async function fetchData() {
            axios.get(`${apiproducts}/all`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
            ).then(response => {
                setProducts(response.data)
                setProds(response.data)
                setLoading(false)
            }).catch(err => {
                setLoading(false)
            })
        }
        fetchData();
    }, [])

    useEffect(() => {
        console.log(prods)
        function setFilterfunc() {
            if (filter) {
                setProducts(prods?.filter(product => product.approved === filter))
            } else {
                setProducts(prods)
            }
        }
        setFilterfunc();
        return () => {
            setProducts(prods)
        }
    }, [filter])

    console.log(filter)

    function handleEllipsisClick(index) {
        const popUp = showPopUp.map((_, i) => i === index)
        setShowPopUp(popUp)
    }

    function handleEllipsisClose(index) {
        const newShowPopUp = [...showPopUp];
        newShowPopUp[index] = false;
        setShowPopUp(newShowPopUp);
    }
    // function delete item
    function deleteItem(id) {
        // setProducts(prods?.filter(item => item.id !== id))
    }
    // approve product
    function approveProduct(id) {
        // prods.map(item => {
        //     if (item.id === id) {
        //         return item.status = 'In Market'
        //     } else {
        //         return item
        //     }
        // })
    }


    useEffect(() => {
        function handleEscapeKeyPress(event) {
            if (event.key === 'Escape') {
                const newShowPopUp = products?.map(() => false);
                setShowPopUp(newShowPopUp);
            }
        }
        document.addEventListener('keydown', handleEscapeKeyPress);
        return () => {
            document.removeEventListener('keydown', handleEscapeKeyPress);
        };
    }, [products]);

    return (
        <div className='modal-container'>
            <div className="filters">
                <h5 className={filter === "" ? "h5active" : ""} onClick={() => { setFilter(``) }} >All Products</h5>
                <h5 className={filter === false ? "h5active" : ""} onClick={() => { setFilter(false) }} >Pending Approval</h5>
                <h5 className={filter === true ? "h5active" : ""} onClick={() => { setFilter(true) }} >In Market</h5>
                <h5 className={filter === "Sold Out" ? "h5active" : ""} onClick={() => { setFilter(`Sold Out`) }} >Sold Out</h5>
            </div>
            <div className="searchPanel">
                <div className="search-box">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input
                        type="text"
                        name="search"
                        placeholder='Search by product name'
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }}
                    />
                </div>
                <div className="prod-cat-btns">
                    <button
                        className='add-user-btn'
                        style={{ marginRight: '1vw' }}
                        onClick={() => { setAddCategory(true) }}
                    >Add Category</button>
                    <button
                        className='add-user-btn'
                        onClick={() => { setAddProd(true) }}
                    >Add Product</button>
                </div>
            </div>

            <table className='products-table' >
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Name</td>
                        <td>Description</td>
                        <td>category id</td>
                        <td>Date on</td>
                        <td>Status</td>
                        <td>Quantity</td>
                        <td>Price</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody >
                    {products && products.filter((item) => {
                        return search.toLowerCase() === "" ? item : item.name.toLowerCase().includes(search)
                    }).map((item, index) => (
                        <tr className='actions-row' key={item.id}>
                            <td className='sold-ou'>{item.id}</td>
                            <td className='product-name'><img className='product-image' src={item.image} alt="imge " /> {item.name}</td>
                            <td className='table-desc'> <TextWithReadMore text={item.description} characters={20} /></td>
                            <td>{item.category_id}</td>
                            <td>{(item.added_on).split('T')[0]}</td>
                            <td >{item.approved ? 'In Market' : "Pending approval"}</td>
                            {/* <td>{item.approved}</td> */}
                            <td className={item.remainingPieces === 0 ? "sold-out actions" : 'actions'}>{item.quantity}</td>
                            <td className='actions'>{item.price}</td>
                            <td className='actions' onClick={() => { handleEllipsisClick(index) }}><i className="fa-solid fa-ellipsis-vertical" ></i></td>
                            {showPopUp[index] &&
                                <div className='action-drop'>
                                    <i className="fa-solid fa-x fa-actions" onClick={() => { handleEllipsisClose(index) }}></i>
                                    <p>More details</p>
                                    <hr className='hrhr' />
                                    {(item.approved === false) && <>
                                        <p
                                            onClick={() => { approveProduct(item.id) }}>Approve product</p>
                                        <hr className='hrhr' />
                                    </>}
                                    <p>Update details</p>
                                    <hr className='hrhr' />
                                    <p onClick={() => {
                                        deleteItem(item.id);
                                        handleEllipsisClose(index)
                                    }}>Delete products</p>
                                </div>}
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            {loading ? <div className='donut-wrapper donut-users'>
                <div className='donut multi'></div>
            </div>
                : ""}
            {addProd && <AddProduct
                setAddProd={setAddProd}
                setProducts={setProducts}
            />}
            {addCategory && <AddCategory
                setAddCategory={setAddCategory} />}
        </div >
    )
}
