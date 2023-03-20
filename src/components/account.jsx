import React, { useState } from 'react';
import '../styles/account.css'

import rick from '../assets/rick.png'

export default function Account() {
    const [update, setUpdate] = useState(false);
    const [selection, setSelection] = useState(
        {
            password: true,
            phone: false,
            email: false
        }
    )

    function switchDetails(value) {
        setSelection(prevState => ({
            password: value === 'password' ? true : false,
            phone: value === 'phone' ? true : false,
            email: value === 'email' ? true : false
        }))
    }


    return (
        <div className='account-page'>
            <img src={rick} alt="member logo" />
            <div className="the-page">
                <div className="user-detailss">
                    <div className="det-left">
                        Name: <br />
                        <p>Rick Sanchez</p>
                        Email:
                        <p>ricksances@gmail.com</p>
                        Phone Number:
                        <p>254706306415</p>
                    </div>
                    <div className="det-right">
                        Title:
                        <p>Super admin</p>
                        Joined At:
                        <p>2021-09-11</p>
                        Password:
                        <p>******</p>
                    </div>
                </div>
                {
                    update &&
                    <div className="edit-details">
                        <div className="">
                            <p className={selection.password && 'selected'} onClick={() => { switchDetails(`password`) }}>Password</p>
                            <p className={selection.phone && 'selected'} onClick={() => { switchDetails(`phone`) }}>Phone</p>
                            <p className={selection.email && 'selected'} onClick={() => { switchDetails(`email`) }}>Email</p>

                        </div>
                        <hr className='hrhr hr-update-det' />
                        {selection.password &&
                            <div className="password-edit">
                                <label htmlFor="password">New Password:</label>
                                <input type="password" name="password" id="password" />
                                <label htmlFor="conpassword">Confirm Password:</label>
                                <input type="password" name="password" id="conpassword" />
                            </div>}

                        {selection.phone &&
                            <div className="password-edit">
                                <label htmlFor="password">New Phone number:</label>
                                <input type="tel" name="password" id="password" />
                            </div>}

                        {selection.email &&
                            <div className="password-edit">
                                <label htmlFor="password">New Email:</label>
                                <input type="tel" name="password" id="password" />
                            </div>}
                        <button>Update Details</button>
                    </div>
                }
            </div>
            {
                update ?
                    <button className='update-details cancel-btn-details' onClick={() => { setUpdate(false) }}>Cancel</button>
                    :
                    <button className='update-details' onClick={() => { setUpdate(true) }}>Update Details</button>
            }

        </div>
    )
}
