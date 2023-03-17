import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



import { users } from '../components/testData/logintest'
import '../styles/login.css'
import logo from '../assets/logo.png'

export default function Login() {


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

    function handleOnfocus(){
        setMessage('')
    }



    function submitLoginData(event) {
        event.preventDefault();
        if (loginData.email && loginData.password) {
            const userPresent = users.find(user => user.email === loginData.email);
            window.localStorage.setItem('user',JSON.stringify(userPresent))
            if (userPresent === undefined) setMessage('User not found')
            else if (userPresent.password !== loginData.password) setMessage('Check your Credentials')
            else {
                setMessage('Login successful')
                window.localStorage.setItem('login', true)
                setTimeout(() => {
                    navigate('/admindashboard/sales')
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
