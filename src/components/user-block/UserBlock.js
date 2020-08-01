import React from 'react';
import {useHistory} from "react-router-dom";

import './style.scss';
import {Button} from "../button";
import {useUser} from "../../context/user";
import userService from "../../services/userService";

export const UserBlock = () => {
    const {userData, setAuthenticated} = useUser();
    const history = useHistory();

    return (
        <span className="user-block">
            <span className='user-block__email'>{`Hello, ${userData?.username}!`}</span>
            <Button color='secondary' onClick={() => {
                userService.logout();
                setAuthenticated(false);
                history.push('/');
            }}>Logout</Button>
        </span>
    )
};
