import React from 'react';

import './style.scss';
import {useHistory} from "react-router-dom";
import {useUser} from "../../context/user";
import {UserBlock} from "../user-block";
import {Button} from "../button";
import Icon from "../../primitives/icon";

export const Header = () => {
    const {authenticated} = useUser();
    const history = useHistory();

    return (
        <header className='header'>
            <div className="header__container">
                <div className="header__menu">
                    <a href="#" className="menu-btn">
                        <Icon icon="fas fa-bars" />
                    </a>
                </div>

                <div className="header__meta">
                    {!authenticated &&
                    <>
                        <Button utilities={'mr-2'} color="secondary" onClick={() => {
                            history.push('/login')
                        }}>Login</Button>
                        <Button color="secondary" onClick={() => {
                            history.push('/register')
                        }}>Register</Button>
                    </>
                    }
                    {authenticated ? <UserBlock/> : null}
                </div>
            </div>
        </header>
    )
};
