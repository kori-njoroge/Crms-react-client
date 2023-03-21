import React, { useEffect, useState } from 'react'
import TextWithReadMore from './textwithreadmore';

import '../styles/sales.css'
import Checkout from './checkout';
import { products } from './testData/products-test';


export default function Makesale({ selectedProds, search,setSelectedProds }) {
    const [theProducts, setProducts] = useState([]);
    const [checkout, setCheckout] = useState(!true);
    useEffect(() => {
        if (selectedProds.length) {
            let prods = selectedProds.flatMap(single => (products.filter(item => item.id === single.id))
            );
            setProducts(prods.filter(prod => prod !== null));
        }
    }, [selectedProds]);


    return (

        <div className=''>
            <h4 style={{ marginBottom: "0" }}>Selected Items</h4>
            <table className='products-table' >
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Name</td>
                        <td>Description</td>
                        <td>category</td>
                        <td>Price</td>
                        <td>Items</td>
                        <td>Total</td>
                        <td>Points</td>
                    </tr>
                </thead>
                <tbody >
                    {theProducts.length && theProducts?.filter((item) => {
                        return search.toLowerCase() === "" ? item : item.category.toLowerCase().includes(search)
                    }).map((item, index) => (
                        <tr className='actions-row' key={index}>
                            <td className='sold-ou'>{item.id}</td>
                            <td className='product-name'><img className='product-image' src={item.image} alt="product " /> {item.title}</td>
                            <td className='table-desc'> <TextWithReadMore text={item?.description} characters={20} /></td>
                            <td>{item.category}</td>
                            <td className='actions'>{item.price}</td>
                            <td >{1}</td>
                            <td className='actions'>{item.price}</td>
                            <td className='actions'>{(item.price) / 100}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            <div className="grand-total ">
                <h2>Grand Total</h2>
                <h2>$
                    {theProducts.length &&
                        theProducts.reduce((total, next) => total + next.price, 0)
                    }
                </h2>
                <p>{(theProducts.length &&
                    theProducts.reduce((total, next) => total + next.price, 0)/100)
                }</p>
            </div>
            {!checkout ?
                <div>
                    <button className='grand-total-btn' onClick={() => { setCheckout(true) }}>Checkout</button>
                </div>
                :
                <div>
                    <button className='grand-total-btn' onClick={() => { setCheckout(false) }}>Cancel</button>
                </div>
            }
            {checkout && <Checkout setSelectedProds={setSelectedProds} />}
        </div>
    )
}