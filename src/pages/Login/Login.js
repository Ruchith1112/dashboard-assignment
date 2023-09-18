import React, { useState } from 'react'
import './Login.scss'
import { ReactComponent as AppleLogo } from './../../assets/images/apple.svg'
import { ReactComponent as GoogleLogo } from './../../assets/images/google.svg'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [passwordValue, setPasswordValue] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const navigate = useNavigate();
    const handleSignIn = (e) => {
        e.preventDefault();
        const values = new FormData(e.target)
        const loginData = [];
        for (var pair of values.entries()) {
            loginData.push(pair[1]);
        }
        const emailVal = loginData[0];
        const passwordVal = loginData[1];
        if (passwordVal.length > 5) {
            localStorage.setItem('access_token','123456');
            setPasswordError('*Minimum 6 digit password required');
            navigate('/dashboard')
        }
        else setPasswordError('*Minimum 6 digit password required');
    }
    return (
        <div className='login'>
            <div className="sideLogo__container">
                <div className='sideLogo__title' >Board.</div>
            </div>
            <div className="login__content">
                <div className="login__heading">
                    Sign In
                </div>
                <div className="login__subheading">
                    Sign in to your account
                </div>
                <div className="login__accounts">
                    <div className="login__accounts__google"><GoogleLogo /> <span className="login__accounts__google__text"> Sign in with Google</span> </div>
                    <div className="login__accounts__apple"><AppleLogo /> <span className="login__accounts__apple__text"> Sign in with Apple</span> </div>
                </div>
                <div className="login__form__container">
                    <form action="" onSubmit={handleSignIn}>
                        <div className="login__form">
                            <div className="container">
                                <label htmlFor="loginemail">Email address</label>
                                <input type="email" name="loginemail" id="loginemail" defaultValue='Johndoe@gmail.com' />
                            </div>
                            <div className="container">
                                <label htmlFor="loginpass">Password</label>
                                <input type="password" name="loginpass" id="loginpass" onChange={(e) => { e.target.value.length > 6 && setPasswordError('') }} />
                                <div className="password-error"> {passwordError} </div>
                            </div>
                            <div className="login__form__forgotpass">
                                Forgot password?
                            </div>
                            <button className="login__form__submit" typeof='submit' >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
                <div className="register">
                    <span className='text-blue'>
                        <span className="text-muted">
                            Don't have an account?
                        </span> Register here
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Login