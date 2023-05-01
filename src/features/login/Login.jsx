import React from 'react'
import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getIsLoggedIn, login} from './loginSlice';
import Style from './login.module.css';
import Logout from './Logout';

const LoginBox = () => {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const changeUserName = e => setUserName(e.target.value);
    const changePassword = e => setPassword(e.target.value);
    const handleKeyDown = (e) => {
        console.log("handleKeyDown", e.code);
        if(e.code === "Enter" || e.code === "NumpadEnter"){
            dispatch(login({userName, password}));
        }
    }
    return (
        <div className={Style.centerBox}>
            <div className={Style.inputBox}>
                <label>User Name</label>
                <input type="text" 
                    className={Style.input} onChange={changeUserName} 
                    value={userName}
                    data-testid="userName"
                />
            </div>
            <div className={Style.inputBox}>
                <label>Password</label>
                <input type="password" 
                    className={Style.input} onChange={changePassword} 
                    value={password}
                    onKeyDown={handleKeyDown}
                    data-testid="password"
                />
            </div>
            <div className={Style.inputBox}>
                <button 
                    onClick={() => dispatch(login({userName, password}))}
                    data-testid="loginBtn">
                    Login
                </button>
            </div>
            
        </div>
      )
}

const LogoutBox = () => {
    return (
        <div className={Style.centerBox}>
            <h3>You are logged In</h3>            
            <Logout />
        </div>
    )
}

const Login = () => {
    
    const isLoggedIn = useSelector(getIsLoggedIn);

    return isLoggedIn ? <LogoutBox /> : <LoginBox />

  
}

export default Login