import React, { useState, useEffect } from 'react'

import '../styles/users.css'
import { users } from './testData/logintest'
import rick from '../assets/rick.png'
import AddUserModal from './addusermodal'

export default function Users() {
    const [adduser, setAdduser] = useState(false)
    const [members, setMembers] = useState(users)
    const [search, setSearch] = useState('');
    const [showPopUp, setShowPopUp] = useState(members?.map(() => false));
    const [filter, setFilter] = useState("");

    useEffect(() => {
        function setFilterfunc() {
            if (filter.trim()) {
                setMembers(users.filter(user => user.title === filter))
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
                <h5 className={filter === "super Admin" ? "h5active" : ""} onClick={() => { setFilter(`super Admin`) }} >Super Admins</h5>
                <h5 className={filter === "Admin" ? "h5active" : ""} onClick={() => { setFilter(`Admin`) }} >Admins</h5>
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
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {members && members.filter((user) => {
                            return search.toLowerCase() === "" ? user : user.fullname.toLowerCase().includes(search)
                        }).map((user, index) => (
                            <tr className='actions-row' key={user.id}>
                                <td>{user.id}</td>
                                <td className='user--name'><img src={rick} alt="member logo" />{user.fullname}</td>
                                <td>{user.phonenumber}</td>
                                <td>{user.email}</td>
                                <td>{user.title}</td>
                                <td>{user.joinDate}</td>
                                <td className='actions' onClick={() => { handleEllipsisClick(index) }}><i className="fa-solid fa-ellipsis-vertical" ></i></td>
                                {showPopUp[index] &&
                                    <div className='action-drop'>

                                        <i className="fa-solid fa-x fa-actions" onClick={() => { handleEllipsisClose(index) }}></i>
                                        <p>Last Activity</p>
                                        <hr className='hrhr' />
                                        <p>Update Details</p>
                                        <hr className='hrhr' />
                                        <p>Delete Account</p>
                                    </div>}
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
            {adduser && <AddUserModal
                setAdduser={setAdduser}
                setMembers={setMembers} />}
        </div>
    )
}
