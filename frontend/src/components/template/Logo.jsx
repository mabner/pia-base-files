import './Logo.css';
import React from 'react';
// @ts-ignore
import logo from '../../assets/images/logo.svg';


export default props =>
    <aside className="logo">
        <a href="/" className="logo">
            <img src={logo} alt="Take Blip" />
        </a>
</aside>