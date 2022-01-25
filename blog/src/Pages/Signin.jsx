import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { instance } from '../api/axios';
import Navigation from '../Components/Navigation'
import '../styles/auth.css'

const Signin = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    const handleChange = (e)=>{
        switch(e.target.id){
            case 'email':
                setEmail(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            default:
                break;
        }
    }
    
    const signup = (e)=>{
        e.preventDefault();

        const body = {
            email,
            password
        }

        instance.post('/signin', body).then((response)=>{
            navigate('/')

            localStorage.setItem('token', response.data.token)
            localStorage.setItem('uid', response.data.token_payload._id) 
        }).catch((error)=>{
            alert(error.response.data.msg)
        })
    }
    return (
        <div>
            <Navigation />
            <div className="auth">
                <h3>SIGN IN</h3>

                <form>
                    <label htmlFor="email" className="input-label">Email</label>
                    <input onChange={(e) => handleChange(e)} id='email' type="email" name='password' className="input-field" />
                    <label htmlFor="password" className="input-label">Password</label>
                    <input onChange={(e)=> handleChange(e)} id='password' type="password" name='password' className="input-field" />
                </form>
                <button onClick={(e)=> signup(e)} className='btn btn-create'>LOGIN</button>
                <Link to={'/signup'}>
                    <p>Don't have an account? Create Account.</p>
                </Link>
            </div>

        </div>
    )
}

export default Signin
