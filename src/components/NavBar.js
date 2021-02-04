import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'red',
    textDecoration: 'none',
    color: 'white',
}

const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink to="/" exact style={link} activeStyle={{background: 'red'}}>Home</NavLink>
            <NavLink to="/theaters" exact style={link} activeStyle={{background: 'red'}}>Theaters</NavLink>
            <NavLink to="/productions" exact style={link} activeStyle={{background: 'red'}}>Productions</NavLink>
            <hr/>
        </div>
    )
}

export default NavBar;