import React, { useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handelEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handelPasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handelUserSignIn = event => {
        //to prevent reloading
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handelUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handelEmailBlur} type="email" name="email" id="" placeholder='Enter Email Address' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handelPasswordBlur} type="password" name="password" id="" placeholder='Enter password' required />
                    </div>
                    <p style={{ color: 'red' }}>
                        {error?.message}
                    </p>

                    {
                        loading ? <p>loading....</p> : <></>
                    }


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