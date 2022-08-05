import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../css/header.css'
import Ripple from 'react-ripples'
function Header() {
    const activeClassName = ({isActive})=>{
        return isActive ?'active-link':'inactive-link'
    }
    return (
        <div className='main_header'>
            <div className="logo-text">
                <h1>MDUDES</h1>
            </div>
            <div className="header-navigations">
                <NavLink className={activeClassName} to={'/'}>Home</NavLink>
                <NavLink to={'/app/dashboard'}>Dashboard</NavLink>
                <Ripple ><NavLink to='#' style={{color:'#fff'}}>Logout</NavLink></Ripple>
            </div>
        </div>
    )
}

export default Header