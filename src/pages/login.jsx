import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



import { users } from '../components/logintest'
import '../styles/login.css'
import logo from '../assets/logo.png'

export default function Login() {
    const navigate = useNavigate()
    const [showPass, setShowPass] = useState(false);
    const [message, setMessage] = useState('');
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
        if (loginData.email && loginData.password) {
            const userPresent = users.find(user => user.email === loginData.email);
            // console.log(userPresent)
            if (userPresent === undefined) setMessage('User not found')
            else if (userPresent.password !== loginData.password) setMessage('Check your Credentials')
            else {
                setMessage('Login successful')
                setTimeout(() => {
                    navigate('/admindashboard')
                }, 2000);
            }
        }
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

                        <input 
                        type={showPass? "text" :"password"}
                            name="password"
                            value={loginData.password}
                            onChange={handleOnChange}
                            placeholder='Password'
                            onKeyUp={handleonKeyup}
                            onFocus={handleOnFocus}
                            onBlur={handleOnBlur}
                            required />

                        {showPass ?
                            <i className="fa-sharp fa-solid fa-eye-slash" onClick={() => {
                                setShowPass(false)
                            }}></i>
                            :
                            <i className="fa-regular fa-eye" onClick={() => {
                                setShowPass(true)
                            }
                            }></i>}
                        {message && <p className={message === 'Login successful' ? 'valid' : 'invalid'}>{message}</p>}
                        {/* {!pwdCheck && <p className={pwdCheck ? 'valid' : 'invalid'}>Password must be more than 7 characters</p>} */}

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
