import React from 'react';
import {Link} from 'react-router-dom';
function Header() {
    return (
        <header style={HeaderStyle}>
            <h1>Todo list </h1>
            <Link style={LinkStyle} to="/">Home</Link> | <Link style={LinkStyle} to="/About">About</Link>
        </header>
    )
}


const HeaderStyle = {
    background: '#000',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const LinkStyle = {
  color:'#fff',
  textDecoration:'none'
}
export default Header;