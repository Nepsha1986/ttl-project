import React, {useState} from 'react';
import {useHistory, Link} from "react-router-dom";

import './style.scss';
import Logo from './logo.jpg';
import {Image} from "../../primitives/image";
import {Button} from "../button";
import {useUser} from "../../context/user";
import userService from "../../services/userService";

export const UserBlock = () => {
    const {userData, setAuthenticated} = useUser();
    const history = useHistory();
    const [actionsActive, setActionsActive] = useState(false);

    return (
        <span className="user-block">
            <span onClick={() => {setActionsActive(!actionsActive)}} className="btn btn-link user-block__btn">
                <span className="user-block__name mr-3">{userData?.username}</span>
                <i className="fas fa-user"></i>
            </span>

            { actionsActive && (
                <div className="user-block__actions">
                    <div className="user-card">
                        <div className="user-card__header">
                            <div className="user-card__header-left">
                                <div className="user-card__image">
                                    <Image src={Logo} />
                                </div>
                            </div>

                            <div className="user-card__header-right">
                                <div className='user-card__name'>{userData?.username}</div>
                                <div className='user-card__email'>{userData?.email}</div>
                            </div>
                        </div>

                        <Link className={'user-card__link'} to={'/dashboard'}>Dashboard</Link>
                        <Link className={'user-card__link mb-3'} to={'/settings'}>Settings</Link>

                        <Button utilities={'btn-sm'} color='secondary' onClick={() => {
                            userService.logout();
                            setAuthenticated(false);
                            history.push('/');
                        }}>Logout</Button>
                    </div>
                </div>
            ) }
        </span>
    )
};
