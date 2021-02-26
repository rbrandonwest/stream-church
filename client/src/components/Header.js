import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import SearchBar from './SearchBar';
import '../styles/Header.css'

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                <img src="../../images/logo.png" style={{width: '100px'}} />
            </Link>
            <div className="right menu">
                <SearchBar />
                <Link to="/churches" className="item">
                    All Churches In DB
                </Link>
                <Link to="/churches/new" className="item">
                    Add Church To DB
                </Link>
                <GoogleAuth />
            </div>
        </div>
    )
}

export default Header;