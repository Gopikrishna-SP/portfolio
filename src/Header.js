import React from 'react';

function Header() {
    return (
        <>
        <div className='header'>
            <p className='logo'>Portfolio</p>
            <div className='menu'>
                <svg className='menu-button' width="35px" height="35px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
                <path fill="#ffffff" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"/>
                </svg>
                <div className='menu-content'>
                    <a href='#' >Contact</a>
                    <a href='#'>Resume</a>
                </div>
            </div>
        </div> 
             
        </>
    );
}

export default Header;