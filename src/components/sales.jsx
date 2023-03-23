import React, { useState } from 'react'
import ExistingSales from './existing-sales';
import Makesale from './makesale';
import { products } from './testData/products-test';

export default function Sales() {
    const [makeSale, setMakeSale] = useState(false);
    const[message, setMessage]= useState('');
    const[selectedProds, setSelectedProds]= useState([])
    const [search, setSearch] = useState('');
    const [prods, setProds] = useState({
        id: "",
        items: 1
    });

    function handleaddToCart() {
        if (prods.id) {
            let id = prods.id.split('-')[0];
            let {items} = prods
            setSelectedProds(prevState => [...prevState,{id,items}])
            setMessage(`Item added successfully {${id}}`)
            setProds({
                id: "",
                items: 1
            })
        }else{
            setMessage('Select Product to add !!!')
        }
    }

    return (
        <div className='sales-component'>
            <h4 style={{ margin: '0' }}>Sales</h4>
            <div className="searchPanel">
                {!makeSale ?
                    <div className="search-box">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input
                            type="text"
                            name="search"
                            placeholder='Search by name'
                            onChange={(event) => {
                                setSearch(event.target.value)
                            }}
                        />
                    </div>
                    :
                    <>
                        <div className="search-prod-data">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input
                                type="text"
                                name="id"
                                placeholder='Search by category'
                                list="brow1"
                                value={prods.id}
                                onChange={(event) => {
                                    setProds(prevState => {
                                        const { name, value } = event.target
                                        return {
                                            ...prevState,
                                            [name]: value
                                        }
                                    })
                                }}
                            />
                            <button onClick={handleaddToCart}>Add</button>
                        </div>
                        {message && <p className={`${message === 'Select Product to add !!!' ?'addprods-message addprods-message-invalid' :'addprods-message addprods-message-valid' }`}>{message}</p> }
                        <datalist id="brow1" className="data--list">
                            {products ?
                                products.map((product, index) => (
                                    <option key={index} value={`${product.id}-${product.title} ${product.price}`} >{`  ${product.title} ${product.price}    |       ${product.category}`}</option>
                                )) : 'Nothing'}
                        </datalist>
                    </>
                }
                {!makeSale ? <button
                    className='add-user-btn'
                    onClick={() => { setMakeSale(true) }}
                >Make a sale</button> :
                    <button
                        className='add-user-btn'
                        onClick={() => { setMakeSale(!true) }}
                    >Cancel</button>}
            </div>
            {makeSale ?
                <Makesale search={search} selectedProds={selectedProds} setSelectedProds={setSelectedProds} /> 
                :
                <ExistingSales search={search} />
            }
        </div>
    )
}
