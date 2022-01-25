import React from 'react'
import '../styles/Navigation.css'
import { Link, useNavigate } from 'react-router-dom'

const Navigation = () => {
    const navigate = useNavigate();
    return (
        <div className='nav'>
            <div style={{cursor:'pointer'}} onClick={()=> navigate('/')} className="nav-left">
                <img src="/logo.png" alt="Logo" />
            </div>
            <Link className='links' to="/signup">
                <div className='nav-right'>
                    <p>Sign / Signup</p>
                </div>
            </Link>
        </div>
    )
}

export default Navigation
