import React, { useState, useEffect } from 'react';


import '../styles/products.css'
import AddProduct from './add-product-modal';
import { products } from './testData/products-test'
import TextWithReadMore from './textwithreadmore';

export default function Products() {
    const [addProd, setAddProd] = useState(false);
    const [prods, setProducts] = useState([]);
    // const [prods, setProducts] = useState(products);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
    const [showPopUp, setShowPopUp] = useState(prods?.map(() => false));


    useEffect(() => {
        async function fetchData() {

            let data1 = await fetch('https://fakestoreapi.com/products')
            const res =  await data1.json()
            setProducts(res)
        }
        fetchData();
    }, [])

    useEffect(() => {
        function setFilterfunc() {
            if (filter.trim()) {
                setProducts(products?.filter(product => product.status === filter))
            } else {
                setProducts(products)
            }
        }
        setFilterfunc();
        return () => {
            setProducts(products)
        }
    }, [filter])


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
        setProducts(prods?.filter(item => item.id !== id))
    }
    // approve product
    function approveProduct(id) {
        prods.map(item => {
            if (item.id === id) {
                return item.status = 'In Market'
            } else {
                return item
            }
        })
        console.log(prods)
    }


    useEffect(() => {
        function handleEscapeKeyPress(event) {
            if (event.key === 'Escape') {
                const newShowPopUp = prods?.map(() => false);
                setShowPopUp(newShowPopUp);
            }
        }
        document.addEventListener('keydown', handleEscapeKeyPress);
        return () => {
            document.removeEventListener('keydown', handleEscapeKeyPress);
        };
    }, [prods]);

    return (
        <div className='modal-container'>
            <div className="filters">
                <h5 className={filter === "" ? "h5active" : ""} onClick={() => { setFilter(``) }} >All Products</h5>
                <h5 className={filter === "Pending Approval" ? "h5active" : ""} onClick={() => { setFilter(`Pending Approval`) }} >Pending Approval</h5>
                <h5 className={filter === "In Market" ? "h5active" : ""} onClick={() => { setFilter(`In Market`) }} >In Market</h5>
                <h5 className={filter === "Sold Out" ? "h5active" : ""} onClick={() => { setFilter(`Sold Out`) }} >Sold Out</h5>
            </div>
            <div className="searchPanel">
                <div className="search-box">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input
                        type="text"
                        name="search"
                        placeholder='Search by category'
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }}
                    />
                </div>
                <button
                    className='add-user-btn'
                    onClick={() => { setAddProd(true) }}
                >Add Product</button>
            </div>
            <table className='products-table' >
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Name</td>
                        <td>Description</td>
                        <td>category</td>
                        {/* <td>Date Added</td> */}
                        <td>Status</td>
                        <td>Remaining <br /> Pieces</td>
                        <td>Price</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody >
                    {prods && prods.filter((item) => {
                        return search.toLowerCase() === "" ? item : item.category.toLowerCase().includes(search)
                    }).map((item, index) => (
                        <tr className='actions-row' key={item.id}>
                            <td className='sold-ou'>{item.id}</td>
                            <td className='product-name'><img className='product-image' src={item.image} alt="product " /> {item.title}</td>
                            {/* <td className='user--name'><img src={item.image} alt="product " />{item.name}</td> */}
                            <td className='table-desc'> <TextWithReadMore text ={item.description}/></td>
                            <td>{item.category}</td>
                            <td>{item.status}</td>
                            <td className={item.remainingPieces === 0 ? "sold-out actions" : 'actions'}>{item.remainingPieces}</td>
                            <td className='actions'>{item.price}</td>
                            <td className='actions' onClick={() => { handleEllipsisClick(index) }}><i className="fa-solid fa-ellipsis-vertical" ></i></td>
                            {showPopUp[index] &&
                                <div className='action-drop'>
                                    <i className="fa-solid fa-x fa-actions" onClick={() => { handleEllipsisClose(index) }}></i>
                                    <p>More details</p>
                                    <hr className='hrhr' />
                                    {(item.status === 'Pending Approval') && <>
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
            {addProd && <AddProduct
                setAddProd={setAddProd}
                setProducts={setProducts}
            />}
        </div >
    )
}
