import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
          <h1 className='header-title'>Knowledge Cafe</h1>
          <div className='header-right'>
            <div>
                <a href="./home">Home</a>
                <a href="./about">About</a>
                <a href="./blog">Blog</a>
                <a href="./contact">Contact Us</a>
            </div>
            <div>
                <img src="../../../images/profile.png" alt="" />
            </div>
          </div>
        </div>
    );
};

export default Header;