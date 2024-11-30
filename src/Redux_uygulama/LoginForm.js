import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './authSlice';  // Import your login action

const LoginForm = () => {
    // State
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === "example@gmail.com" && password === "root") {
            dispatch(login({ username }));  // Dispatch the login action
        } else {
            alert('Geçersiz kullanıcı adı ve şifre');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Username"
            />
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password"
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
