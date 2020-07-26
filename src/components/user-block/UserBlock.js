import React from 'react';

import './style.scss';
import {Button} from "../button";
import {useUser} from "../../context/user";

export const UserBlock = () => {
    const {userData, setAuthenticated} = useUser();

    console.log(userData);

    return (
        <span className="user-block">
            <span className='user-block__email'>{`Hello, ${userData?.username}!`}</span>
            <Button color='secondary' onClick={() => {
                localStorage.clear();
                setAuthenticated(false);
            }}>Logout</Button>
        </span>
    )
};
