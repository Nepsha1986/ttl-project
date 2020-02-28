import React from 'react';

import './style.scss';
import {Link} from "react-router-dom";

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
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </header>
    )
};
