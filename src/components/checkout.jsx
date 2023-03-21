import React, { useState } from 'react'
import AddUserModal from './addusermodal';
import { users } from './testData/logintest'

export default function Checkout({setSelectedProds}) {
    const [addUser, setAdduser] = useState(false);
    const [phone, setPhone] = useState('');
    const [customer, setCustomer] = useState({});

    function searchCustomer() {
        let customer = users.filter(customer => customer.phonenumber === phone);
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
                    onChange={(event) => {
                        setPhone(event.target.value)
                    }}
                />
                <button onClick={searchCustomer}>Search</button>
            </div>
            <div className="results-search">
                {customer ?
                    <>
                        <div>
                            <p>Name:&nbsp;{customer.fullname}</p>
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
