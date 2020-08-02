import React from 'react';
import "./style.scss";
import {AuthForm} from "../../components/auth-form";
import {Window} from "../../layouts";
import {Link} from "react-router-dom";

export const Auth = () => {
    return (
        <Window>
            <h1 className='mb-3'><Link to={'/'} className={"text-decoration-none"}>Timeline</Link></h1>
            <AuthForm/>
        </Window>
    )
};
