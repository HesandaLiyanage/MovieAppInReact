import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'


const Navbar= () => {
    render (
        <div className='navbar'>
            <div className="navbar-left">
                nkobo
                <img src={logo} alt="" />
            </div>
            <div className="navbar-right"></div>
        </div>
    )
}