import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

// import { users } from '../components/testData/logintest'
import '../styles/login.css'
import logo from '../assets/logo.png'
import { apiusers } from '../components/api-links'

export default function Login() {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({})

    const [isFormValid, setIsFormValid] = useState(false);

    const navigate = useNavigate()
    const [showPass, setShowPass] = useState(false);
    const [message, setMessage] = useState('');
    const [loginData, setLoginData] = useState(
        {
            email: "",
            password: ""
        }
    )


    function handleOnChange(event) {


        const { name, value } = event.target;
        setLoginData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
        const { target } = event
        const isRequired = target.hasAttribute("required");
        const isValid = isRequired ? value.trim() !== "" : true;


        setIsFormValid((prevState) => ({
            ...prevState,
            [name]: isValid,
        }));


    }

    function handleOnfocus() {
        setMessage('')
    }



    function submitLoginData(event) {
        event.preventDefault();
        setLoading(true)
        axios.post(`${apiusers}/login`, {
            email: loginData.email,
            password: loginData.password
        }).then(respon => {
            setLoading(false)
            setMessage(respon.data?.response)
            if (respon.data?.response === 'Login successful') {
                setUser(respon.data.user)
                window.localStorage.setItem('token', respon.data?.token)
                window.localStorage.setItem('user', JSON.stringify(respon.data.user))
                if (user.role.toLowerCase() === 'staff') {
                    navigate('/staff/dashboard')
                } else {
                    navigate('/admin/dashboard')
                }
            }
        }).catch(err => {
            setLoading(false)
            setMessage(err.response?.data?.message)
        })
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
                            onFocus={handleOnfocus}
                            required />

                        <input
                            type={showPass ? "text" : "password"}
                            name="password"
                            value={loginData.password}
                            onChange={handleOnChange}
                            placeholder='Password'
                            onFocus={handleOnfocus}
                            required />

                        {showPass ?
                            <i className="fa-sharp fa-solid fa-eye-slash show-pass" onClick={() => {
                                setShowPass(false)
                            }}></i>
                            :
                            <i className="fa-regular fa-eye show-pass" onClick={() => {
                                setShowPass(true)
                            }
                            }></i>}
                        {message && <p className={message === 'Login successful' ? 'valid' : 'invalid'}>{message}</p>}
                        {loading ? <div className='donut-wrapper donut-login'>
                            <div className='donut multi'></div>
                        </div>
                            : ""}

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
                    <button className={isFormValid ? 'abled-btn' : 'disabled-btn'} disabled={!isFormValid}>Login</button>
                </form>
            </div>
        </div>
    )
}
