import React, { useState, useEffect } from 'react'
import axios from 'axios'

import '../styles/users.css'
import rick from '../assets/rick.png'
import AddUserModal from './addusermodal'
import { apiusers } from './api-links'

export default function Users() {
    const [loading, setLoading] = useState(true)
    const [adduser, setAdduser] = useState(false)
    const [users, setUsers] = useState([])
    const [members, setMembers] = useState([])
    const [search, setSearch] = useState('');
    const [showPopUp, setShowPopUp] = useState();
    const [filter, setFilter] = useState("");


    useEffect(() => {
        let token = window.localStorage.getItem('token')
        setLoading(true)
        async function fetchData() {
            axios.get(`${apiusers}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
            ).then(response => {
                setUsers(response.data)
                setMembers(response.data)
                setShowPopUp(response?.data.map(() => false))
                setLoading(false)
            }).catch(err => {
                setLoading(false)
            })
        }
        fetchData();
    }, [])

    useEffect(() => {
        function setFilterfunc() {
            if (filter.trim()) {
                setMembers(users.filter(user => user.role.toLowerCase() === filter))
            } else {
                setMembers(users)
            }
        }
        setFilterfunc();
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
    useEffect(() => {
        function handleEscapeKeyPress(event) {
            if (event.key === 'Escape') {
                const newShowPopUp = members?.map(() => false);
                setShowPopUp(newShowPopUp);
            }
        }
        document.addEventListener('keydown', handleEscapeKeyPress);
        return () => {
            document.removeEventListener('keydown', handleEscapeKeyPress);
        };
    }, [members]);

    return (
        <div className='modal-container'>
            <div className="filters">
                <h5 className={filter === "" ? "h5active" : ""} onClick={() => { setFilter(``) }} >All Users</h5>
                <h5 className={filter === "super Admin" ? "h5active" : ""} onClick={() => { setFilter(`super admin`) }} >Super Admins</h5>
                <h5 className={filter === "Admin" ? "h5active" : ""} onClick={() => { setFilter(`admin`) }} >Admins</h5>
                <h5 className={filter === "staff" ? "h5active" : ""} onClick={() => { setFilter(`staff`) }} >Staff</h5>
                <h5 className={filter === "customer" ? "h5active" : ""} onClick={() => { setFilter(`customer`) }} >Customers</h5>
            </div>
            <div className="searchPanel">

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
                <button className='add-user-btn' onClick={() => { setAdduser(true) }}>Add User <i className="fa-solid fa-user-plus"></i></button>
            </div>
            <div className="table">
                <table className='products-table'>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Full Name</td>
                            <td>Phone No</td>
                            <td>Email</td>
                            <td>Title</td>
                            <td>Joining Date</td>
                            {/* {filter ==='customer' && <td>Points</td>} */}
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {members ? members.filter((user) => {
                            return search.toLowerCase() === "" ? user : user.full_name.toLowerCase().includes(search)
                        }).map((user, index) => (
                            <tr className='actions-row' key={user.id}>
                                <td>{user.id}</td>
                                <td className='user--name'><img src={rick} alt="member logo" />{user.full_name}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{(user.joined_at).split('T')[0]}</td>
                                {/* {filter === 'customer' &&<td>{user.points}</td>} */}
                                <td className='actions' onClick={() => { handleEllipsisClick(index) }}><i className="fa-solid fa-ellipsis-vertical" ></i></td>
                                {showPopUp[index] &&
                                    <div className='action-drop'>
                                        <i className="fa-solid fa-x fa-actions" onClick={() => { handleEllipsisClose(index) }}></i>
                                        <p>Update Details &nbsp;&nbsp;</p>
                                        <hr className='hrhr' />
                                        <p>Delete Account &nbsp;&nbsp;</p>
                                    </div>}
                            </tr>
                        ))
                            : <tr>
                                <td></td>
                                <td></td>
                                <td>No</td>
                                <td>Users</td>
                                <td></td>
                            </tr>}
                    </tbody>
                </table>
                {loading ? <div className='donut-wrapper donut-users'>
                    <div className='donut multi'></div>
                </div>
                    : ""}
            </div>
            {adduser && <AddUserModal
                setAdduser={setAdduser}
                setMembers={setMembers} />}
        </div>
    )
}
