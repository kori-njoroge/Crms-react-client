import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AddUserModal from './addusermodal';
import { apiusers } from './api-links';

export default function Checkout({ setSelectedProds }) {
    const [customers, setCustomers] = useState()
    const [addUser, setAdduser] = useState(false);
    const [phone, setPhone] = useState('');
    const [customer, setCustomer] = useState({});


    useEffect(() => {
        let token = window.localStorage.getItem('token')
        async function fetchData() {
            axios.get(`${apiusers}/`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
            ).then(response => {
                setCustomers(response.data)
                console.log(response.data)
            }).catch(err => {
                console.log(err.response)
            })
        }
        fetchData();
    }, [])

    function searchCustomer() {
        let customer = customers.filter(customer => customer.phone === phone);
        setCustomer(customer[0])
    }

    return (
        <div className='checkout'>
            <div className="search-user-cont">
                <p>Search Customer:</p>
                <input
                    type="tel"
                    name="search"
                    placeholder='phone number'
                    list='brow2'
                    onChange={(event) => {
                        setPhone(event.target.value)
                    }}
                />
                <button onClick={searchCustomer}>Search</button>
                <datalist id="brow2" className="data--list">
                    {customers ?
                        customers.map((customer, index) => (
                            <option key={index} value={`${customer.phone}`} >{`${customer.phone}  ${customer.full_name}`}</option>
                        )) : 'Nothing'}
                </datalist>
            </div>
            <div className="results-search">
                {customer ?
                    <>
                        <div>
                            <p>Name:&nbsp;{customer.full_name}</p>
                            <p>Email: &nbsp;{customer.email}</p>
                        </div>
                        <button
                            className='complete-btn'
                            onClick={() => {
                                alert("Transaction completed succesfully ")
                                setSelectedProds([])
                            }}>Complete</button>
                    </>
                    :
                    <>
                        <p>No records found</p>
                        <button
                            className='complete-btn'
                            onClick={() => {
                                setAdduser(true)
                            }}
                        >Add User</button>
                    </>}
            </div>
            {addUser &&
                <AddUserModal
                    setAdduser={setAdduser} />}
        </div>
    )
}
