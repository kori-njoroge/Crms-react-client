import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { myArray } from '../components/logintest'


import '../styles/login.css'
import logo from '../assets/logo.png'

export default function Login() {
    const[message, setMessage]= useState('');
    const [pwdCheck, setpwdCheck] = useState(!false);
    const [loginData, setLoginData] = useState(
        {
            email: "",
            password: ""
        }
    )
    function handleonKeyup(event) {
        const { value } = event.target;
        const pwd = value.length >= 8;
        setpwdCheck(pwd);
    }

    function handleOnFocus() {
        setpwdCheck(false)
        setMessage('')
    }

    function handleOnBlur() {
        setpwdCheck(true)
    }

    function handleOnChange(event) {
        const { name, value } = event.target;
        setLoginData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }
    function submitLoginData(event) {
        event.preventDefault();
        const userPresent = myArray.find(user => user.email === loginData.email);
        // console.log(userPresent)
        if(userPresent=== undefined) setMessage('User not found')
        else if(userPresent.password !== loginData.password) setMessage('Check your Credentials')
        else setMessage('Login successful')
    }




    return (
        <div className='loginBody'>
            <div className="logincard">
                <img src={logo} alt="company logo" />
                <div className="cartTop">
                    <p>sign in</p>
                </div>
                <form className='loginForm' onSubmit={submitLoginData}>

                    <div className="details">
                        <input
                            type="text"
                            name="email"
                            value={loginData.email}
                            onChange={handleOnChange}
                            placeholder='Email'
                            required />

                        <input type="password"
                            name="password"
                            value={loginData.password}
                            onChange={handleOnChange}
                            placeholder='Password'
                            onKeyUp={handleonKeyup}
                            onFocus={handleOnFocus}
                            onBlur={handleOnBlur}
                            required />
                            {message && <p className='invalid'>{message}</p>}
                        {!pwdCheck && <p className={pwdCheck ? 'valid' : 'invalid'}>Password must be more than 7 characters</p>}

                    </div>
                    <div className="rememberMe">
                        <div >
                            <input
                                type="checkbox"
                                name="rememberMe"
                                id="rememberMe" />

                            <label htmlFor="rememberMe">Remember Me</label>
                        </div>
                        <Link>Forgot Password?</Link>
                    </div>
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}
