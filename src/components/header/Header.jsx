import React from 'react';

import './style.scss';

export const Header = () => {
    return (
        <header className='header'>
            <div className="header__container">
                <div className="header__menu">
                    <a href="#" className="menu-btn">
                        <i className="menu-btn__icon fas fa-bars"></i>
                    </a>
                </div>

                <div className="header__meta">
                    Login
                </div>
            </div>
        </header>
    )
};
