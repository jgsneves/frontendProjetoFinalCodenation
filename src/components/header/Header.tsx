import React from 'react';
import './Header.css';
import logo from './../../assets/stone-logo.svg';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <>
            <header className="headerContainer">
                <img src={logo} alt="Stone"/>
                <div className="linksDiv">
                    <Link to="/" className="link">Login</Link>
                    <Link to="/reports" className="link">Reports</Link>
                </div>
            </header>
        </>
    );
}

export default HeaderComponent;