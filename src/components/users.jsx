import React, { useState } from 'react'

import '../styles/users.css'
import { users } from './logintest'
import rick from '../assets/rick.png'
import AddUserModal from './addusermodal'

export default function Users() {
    const [adduser, setAdduser] = useState(false)
    const [members, setMembers] = useState(users)
    const [search, setSearch] = useState('');
    // const[filtered, setFiltered] = useState("")
    const [dropDown, setDropDown] = useState(!true);

    function setFilter(filter) {
        if (filter.trim()) {
            setMembers(users.filter(user => user.title === filter))
        } else {
            setMembers(users)
        }
    }

    return (
        <div className='user-page'>
            <div className="filters">
                <h5 onClick={() => { setFilter(``) }} >All Users</h5>
                <h5 onClick={() => { setFilter(`super Admin`) }} >Super Admins</h5>
                <h5 onClick={() => { setFilter(`Admin`) }} >Admins</h5>
                <h5 onClick={() => { setFilter(`staff`) }} >Staff</h5>
                <h5 onClick={() => { setFilter(`customer`) }} >Customers</h5>
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
                <table>
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
                            return search.toLowerCase() === "" ? user : user.username.toLowerCase().includes(search)
                        }).map((user) => (
                            <tr className='actions-row' key={user.id}>
                                <td>{user.id}</td>
                                <td className='user--name'><img src={rick} alt="member logo" />{user.fullname}</td>
                                <td>{user.phonenumber}</td>
                                <td>{user.email}</td>
                                <td>{user.title}</td>
                                <td>{user.joinDate}</td>
                                <td className='actions'><i className="fa-solid fa-ellipsis-vertical"></i></td>
                                {dropDown &&
                                    <div className='action-drop'>
                                        <p>Last Activity</p>
                                        <p>Update Details</p>
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
                                setMembers ={setMembers} />}
        </div>
    )
}
