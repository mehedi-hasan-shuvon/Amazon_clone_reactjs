import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" placeholder='Enter Email Address' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" placeholder='Enter password' required />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>

                <p>
                    New To Ema Zon? <Link className='form-link' to='/signup'>Create new Account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;