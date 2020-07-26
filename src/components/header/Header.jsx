import React, {Fragment} from 'react';

import './style.scss';
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";
import {useUser} from "../../context/user";
import {UserBlock} from "../user-block";
import {Button} from "../button";

export const Header = () => {
    const {authenticated} = useUser();
    const history = useHistory();

    return (
        <header className='header'>
            <div className="header__container">
                <div className="header__menu">
                    <a href="#" className="menu-btn">
                        <i className="menu-btn__icon fas fa-bars"></i>
                    </a>
                </div>

                <div className="header__meta">
                    {!authenticated &&
                    <Fragment>
                        <Button utilities={'mr-2'} color="secondary" onClick={() => {
                            history.push('/login')
                        }}>Login</Button>
                        <Button color="secondary" onClick={() => {
                            history.push('/register')
                        }}>Register</Button>
                    </Fragment>
                    }
                    {authenticated ? <UserBlock/> : null}
                </div>
            </div>
        </header>
    )
};
