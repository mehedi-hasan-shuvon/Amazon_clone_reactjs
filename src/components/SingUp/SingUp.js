import React, { useState } from 'react';
import './SingUp.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SingUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    //navigate user if he has done sing up successfully
    const navigate = useNavigate();


    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);




    const handelEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handelPasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handelConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/shop');
    }

    const handelCreateUser = event => {
        //to prevent reloading
        event.preventDefault();

        if (password !== confirmPassword) {
            setError("Two Password's did not match")
            return;
        }
        if (password.length < 6) {
            setError("Password must be 6 characters or longer")
            return;
        }


        createUserWithEmailAndPassword(email, password);
    }



    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handelCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handelEmailBlur} type="email" name="email" id="" placeholder='Enter Email Address' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handelPasswordBlur} type="password" name="password" id="" placeholder='Enter password' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handelConfirmPasswordBlur} type="password" name="confirm-password" id="" placeholder='Re-Enter password' required />
                    </div>
                    <p style={{ color: 'red' }}>
                        {error}
                    </p>

                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>

                <p>
                    Already Have an Account? <Link className='form-link' to='/login'>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SingUp;