import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../css/header.css'
import Ripple from 'react-ripples'
function Header() {
    return (
        <div className='main_header'>
            <div className="logo-text">
                <h1>MDUDES</h1>
            </div>
            <div className="header-navigations">
                <ul>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/app/dashboard'}>Dashboard</NavLink></li>
                    <li><Ripple ><NavLink to='#' style={{color:'#fff'}}>Logout</NavLink></Ripple></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default Header